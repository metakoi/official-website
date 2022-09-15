import Illustration from "../images/hero-illustration.svg";
import AudioBank from "../js/audio/audioBank";
import AudioEngine from "../js/audio/audioEngine";
import CodeIconDefs from "../js/koi/code/codeIconDefs";
import CodeViewer from "../js/koi/code/codeViewer";
import Drop from "../js/koi/drop";
import FishIconDefs from "../js/koi/gui/cards/requirement/icon/fishIconDefs";
import GUI from "../js/koi/gui/gui";
import Loader from "../js/koi/gui/loader/loader";
import Menu from "../js/koi/gui/menu/menu";
import Koi from "../js/koi/koi";
import Session from "../js/koi/session";
import TutorialBreeding from "../js/koi/tutorial/tutorialBreeding";
import Language from "../js/language";
import Random from "../js/random";
import Systems from "../js/render/systems";
import StorageFile from "../js/storage/storageFile";
import StorageLocal from "../js/storage/storageLocal";
import i18next from "i18next";
import { loadLanguages } from "i18next";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t, i18n } = useTranslation();
  const canvas = useRef();
  useEffect(() => {
    if (!canvas.current) {
      return;
    }
    const searchParams = new URLSearchParams(window.location.search);
    const glParameters = {
      alpha: false,
      antialias:
        window["localStorage"].getItem(Menu.prototype.KEY_MSAA) === null ||
        window["localStorage"].getItem(Menu.prototype.KEY_MSAA) === "true",
      premultipliedAlpha: true,
      preserveDrawingBuffer: true,
    };
    // const canvas = document.getElementById("renderer");

    const gl =
      canvas.current.getContext("webgl", glParameters) ||
      canvas.current.getContext("experimental-webgl", glParameters);

    let chosenLocale = null;
    let chosenSlot = -1;

    /**
     * Check if game is running within WKWebView on iOS.
     */

    const RUNNING_ON_WEBVIEW_IOS =
      window.webkit && window.webkit.messageHandlers ? true : false;

    /**
     * Reload the game into the menu
     */
    window.reloadMenu = () => {
      window.location =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname;
    };

    /**
     * Reload the currently loaded game
     */
    window.reloadGame = () => {
      if (chosenSlot === -1) window.reloadMenu();
      else
        window.location =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          "?resume=" +
          chosenSlot.toString();
    };

    /**
     * Called when loading resources failed
     */
    const onFailure = () => {
      alert("Failed loading resources");
    };

    /**
     * Make a language object from a locale code
     * @param {String} locale The locale code
     * @returns {Language} The language object most suitable for this locale
     */
    const makeLanguage = (locale) => {
      switch (locale) {
        default:
        case "en":
          chosenLocale = "en";
          window.chosenLocale = chosenLocale;
          return new Language("KoiTranslations/english.json");
        case "nl":
          chosenLocale = "nl";
          window.chosenLocale = chosenLocale;
          return new Language("KoiTranslations/dutch.json");
        case "pl":
          chosenLocale = "pl";
          window.chosenLocale = chosenLocale;
          return new Language("KoiTranslations/polish.json");
        case "tr":
          chosenLocale = "tr";
          window.chosenLocale = chosenLocale;
          return new Language("KoiTranslations/turkish.json");
        case "de":
          chosenLocale = "de";
          window.chosenLocale = chosenLocale;
          return new Language("KoiTranslations/german.json");
        case "fr":
          chosenLocale = "fr";
          window.chosenLocale = chosenLocale;
          return new Language("KoiTranslations/french.json");
        case "ja":
          chosenLocale = "ja";
          window.chosenLocale = chosenLocale;
          return new Language("KoiTranslations/japanese.json");
        case "es":
          chosenLocale = "es";
          window.chosenLocale = chosenLocale;
          return new Language("KoiTranslations/spanish.json");
        case "pt":
          chosenLocale = "pt";

          return new Language("KoiTranslations/portuguese.json");
        case "zh":
          chosenLocale = "zh";
          window.chosenLocale = chosenLocale;
          return new Language("KoiTranslations/simplifiedchinese.json");
        case "ko":
          chosenLocale = "ko";
          window.chosenLocale = chosenLocale;
          return new Language("KoiTranslations/korean.json");
        case "ru":
          chosenLocale = "ru";
          window.chosenLocale = chosenLocale;
          return new Language("KoiTranslations/russian.json");
        case "fy":
          chosenLocale = "fy";
          window.chosenLocale = chosenLocale;
          return new Language("KoiTranslations/frisian.json");
        case "uk":
          chosenLocale = "uk";
          window.chosenLocale = chosenLocale;
          return new Language("KoiTranslations/ukrainian.json");
        case "it":
          chosenLocale = "it";
          window.chosenLocale = chosenLocale;
          return new Language("KoiTranslations/italian.json");
        case "fil":
          chosenLocale = "fil";
          window.chosenLocale = chosenLocale;
          return new Language("KoiTranslations/filipino.json");
        case "id":
          chosenLocale = "id";
          window.chosenLocale = chosenLocale;
          return new Language("KoiTranslations/indonesian.json");
      }
    };

    const paramLang =
      window["localStorage"].getItem(Menu.prototype.KEY_LANGUAGE) ||
      searchParams.get("lang");
    const language = paramLang
      ? makeLanguage(paramLang)
      : makeLanguage(navigator.language.substring(0, 2));
    window.language = language;

    const loader = new Loader(
      document.getElementById("loader"),
      document.getElementById("loader-graphics"),
      document.getElementById("loader-slots"),
      document.getElementById("loader-button-settings"),
      document.getElementById("wrapper"),
      !RUNNING_ON_WEBVIEW_IOS,
      !RUNNING_ON_WEBVIEW_IOS
    );
    window.loader = loader;

    if (
      gl &&
      gl.getExtension("OES_element_index_uint") &&
      (gl.vao = gl.getExtension("OES_vertex_array_object"))
    ) {
      language.load(() => {
        let imperial = false;

        const audioEngine = new AudioEngine(new Random());
        const audio = new AudioBank(audioEngine);
        const wrapper = document.getElementById("wrapper");

        const guiDoc = document.getElementById("gui");
        const codeDoc = document.getElementById("code");
        const menuDoc = document.getElementById("menu");
        const dropDoc = document.getElementById("drop");
        imperial = window.language.get("UNIT_LENGTH") === "ft";

        const settings = {
          flash: true,
        };

        let session = new Session();
        let slot = null;
        const slotNames = ["session", "session2", "session3"];
        const storage = window["require"]
          ? new StorageFile()
          : new StorageLocal();

        const gui = new GUI(guiDoc, new CodeViewer(codeDoc, storage), audio);
        const systems = new Systems(
          gl,
          new Random(2893),
          wrapper.clientWidth,
          wrapper.clientHeight
        );
        const menu = new Menu(
          menuDoc,
          window.fullscreen,
          window.chosenLocale,
          audioEngine,
          settings,
          audio
        );
        let lastTime = null;
        let koi = null;
        let loaded = true;
        let mouseLeft = false;
        let alt = false;
        let control = false;
        let shift = false;

        new Drop(gui, systems, dropDoc, canvas.current);

        window.loader.setMenu(menu);

        canvas.current.width = wrapper.clientWidth;
        canvas.current.height = wrapper.clientHeight;

        window.onresize = () => {
          if (
            canvas.current.width === wrapper.clientWidth &&
            canvas.current.height === wrapper.clientHeight
          )
            return;

          canvas.current.width = wrapper.clientWidth;
          canvas.current.height = wrapper.clientHeight;

          systems.resize(canvas.current.width, canvas.current.height);
          gui.resize();

          if (koi) koi.resize();
        };

        /**
         * Save the game state to local storage
         */
        const save = () => {
          storage.setBuffer(slot, session.serialize(koi, gui));
        };

        /**
         * A function that creates a new game session
         * @param {number} index Create a new game at a given slot index
         */
        const newSession = (index) => {
          window.chosenSlot = index;
          slot = slotNames[index];
          session = new Session();

          gui.clear();

          if (koi) koi.free();

          koi = session.makeKoi(
            storage,
            systems,
            audio,
            gui,
            save,
            new TutorialBreeding(storage, gui.overlay)
          );
        };

        /**
         * Continue an existing game
         * @param {number} index Create a new game at a given slot index
         */
        const continueGame = (index) => {
          window.chosenSlot = index;
          slot = slotNames[index];

          gui.cards.enableBookButton(audio);

          try {
            session.deserialize(storage.getBuffer(slot));

            koi = session.makeKoi(storage, systems, audio, gui, save);
          } catch (error) {
            newSession(index);

            console.warn(error);
          }
        };

        window.loader.setResumables([
          storage.getBuffer(slotNames[0]) !== null,
          storage.getBuffer(slotNames[1]) !== null,
          storage.getBuffer(slotNames[2]) !== null,
        ]);

        // Trigger the animation frame loop
        lastTime = performance.now();

        const loop = (time) => {
          if (loaded) {
            koi.render(0.001 * (time - lastTime), settings);

            lastTime = time;

            requestAnimationFrame(loop);
          }
        };

        canvas.current.addEventListener("mousedown", (event) => {
          event.preventDefault();

          if (!koi) {
            return;
          }
          koi.touchStart(event.clientX, event.clientY, control, shift);
        });

        canvas.current.addEventListener("touchstart", (event) => {
          event.preventDefault();

          if (!koi) {
            return;
          }
          koi.touchStart(
            event.changedTouches[0].clientX,
            event.changedTouches[0].clientY,
            control,
            shift
          );
        });

        canvas.current.addEventListener("mousemove", (event) => {
          if (!koi) {
            return;
          }
          koi.touchMove(event.clientX, event.clientY, mouseLeft);

          mouseLeft = false;
        });

        canvas.current.addEventListener("touchmove", (event) => {
          event.preventDefault();

          if (!koi) {
            return;
          }
          koi.touchMove(
            event.changedTouches[0].clientX,
            event.changedTouches[0].clientY
          );
        });

        canvas.current.addEventListener("mouseup", () => {
          if (!koi) {
            return;
          }
          koi.touchEnd();
        });

        canvas.current.addEventListener("touchend", (event) => {
          event.preventDefault();

          if (!koi) {
            return;
          }
          koi.touchEnd();
        });

        canvas.current.addEventListener("mouseleave", () => {
          if (!koi) {
            return;
          }
          koi.mouseLeave();

          mouseLeft = true;
        });

        window.onkeydown = (event) => {
          if (event.key === "Alt") alt = true;
          else if (event.key === "Control") control = true;
          else if (event.key === "Shift") shift = true;
          else if (event.key === "Enter" && alt)
            window.loader.fullscreen.toggle();
          else if (event.key === "Escape" || event.key === "m") menu.toggle();
          else if (koi && koi.keyDown(event.key)) event.preventDefault();
        };

        window.onkeyup = (event) => {
          switch (event.key) {
            case "Alt":
              alt = false;

              break;
            case "Control":
              control = false;

              break;
            case "Shift":
              shift = false;

              break;
          }
        };

        window.onbeforeunload = () => {
          gui.cancelAction();
          if (koi) {
            koi.touchEnd();

            save();

            koi.free();
          }

          systems.free();
          gui.clear();

          loaded = false;
        };

        window.addEventListener("appMovedToBackground", () => {
          save();
          menu.show();
        });

        window.loader.setFinishCallback(() => {
          requestAnimationFrame(loop);

          audioEngine.interact();
        });

        window.loader.setNewGameCallback(newSession);
        window.loader.setContinueCallback(continueGame);
      }, onFailure);
      // Create globally available SVG defs
      new FishIconDefs(
        document.getElementById("fish-icon-defs"),
        new Random(Random.prototype.makeSeed(Koi.prototype.COLOR_BACKGROUND.r))
      );
      new CodeIconDefs(document.getElementById("code-icon-defs"));
    } else onFailure();
    return function cleanup() {
      window.reloadMenu()
    };
  }, []);
  return (
    <section className="relative overflow-hidden">

      <div id="wrapper">
        <canvas id="renderer" ref={canvas}></canvas>
        <div id="gui" className="hidden"></div>
        <div id="code" className="hidden"></div>
        <div id="drop" className="hidden"></div>
        <div id="loader" className="hidden">
          <div id="loader-graphics"></div>
          <div id="loader-slots"></div>
          <div className="loader-button" id="loader-button-settings"></div>
        </div>
        <div id="menu" className="hidden"></div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
        <defs id="fish-icon-defs"></defs>
        <defs id="code-icon-defs"></defs>
      </svg>
      {/* Bg gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <img
          src={Illustration}
          className="max-w-none"
          width="2143"
          height="737"
          alt="Hero Illustration"
        />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-[640px] md:mx-0 text-center md:text-left">
            <div data-aos="zoom-out">
              <div className="relative text-sm text-gray-300  bg-gradient-to-r from-cyan-800 to-gray-700 rounded-full inline-block px-4 py-1 mb-6 ">
                <div className="text-gray-400">
                {t('home.hero.launch_metaverse')}{" "}
                
                  <a
                    className="font-medium text-blue-500 inline-flex items-center transition duration-150 ease-in-out group"
                    href="#0"
                  >
                     {t("home.hero.learn_more")}{" "}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <h1
              className="h1 font-uncut-sans mb-6 font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-emerald-400 to-fuchsia-400"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              {t("home.hero.title")}
            </h1>
            <p
              className="text-xl text-gray-400 mb-10"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              {/* {t("home.hero.sub_title")} */}
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <div>
                <a
                  target={'_blank'}
                  className="btn text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group"
                  href="https://metakoi.github.io/stand-alone/"
                >
                  {t('home.hero.open_app')}{" "}
                  <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </a>
              </div>
              <div>
                <a
                  className="btn text-gray-300 bg-gradient-to-t from-gray-800 to-gray-700 hover:to-gray-800 w-full shadow-lg"
                  href="#0"
                >
                  {t('home.hero.community_activity')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
