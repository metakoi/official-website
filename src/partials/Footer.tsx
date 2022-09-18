import React from "react";
import { Link } from "react-router-dom";
import Logo from  "../images/logo.svg"
import Jump from  "../images/jump.png"
function Footer() {
  return (
    <footer className="relative bg-cover bg-center rounded-t-full" style={{
      backgroundImage:`url("/official-website/images/jump.png")`
    }}>
      {/* Illustration */}
      {/* <div className="absolute -top-0 left-0 right-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-10 h-[10rem] pointer-events-none " aria-hidden="true" /> */}
      {/* <div className="absolute -top-20 left-0 right-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-20 h-[10rem] pointer-events-none " aria-hidden="true" /> */}
      {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10" aria-hidden="true" /> */}
      
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:h-96 flex items-end text-white" >
        {/* Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 pb-3 pt-8 md:pt-12 w-full">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-4 lg:max-w-xs md:bg-white md:bg-opacity-20 md:backdrop-blur-lg md:rounded-t-full md:drop-shadow-lg md:p-1 md:px-8">
            <div className="mb-2">
              {/* Logo */}
              <Link className="inline-flex" to="/official-website/" aria-label="Cruip">
                <svg className='w-28 lg:w-40 fill-current ' viewBox="0 0 307 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_16_141)">
                  <path d="M60.59 1C52.59 1.18 45.32 6.33 45.37 14.43C45.37 31.14 53.6 38.29 32.78 44.85C14.78 48.75 7.5 38.79 11.44 33.58C15.53 29.65 21.02 30.14 21.6 27.58C20.88 25.23 16.79 23.25 8 25.23C7.28 16.79 5.22 12.23 3.29 13.92C1.21 15.77 0.89 22.1 1 25.36C4.75 76.08 74.62 76.57 81.65 28.36C83 7.74 70.88 0.79 60.59 1.01V1ZM68 11.09C68.935 11.1567 69.8057 11.5905 70.4221 12.2968C71.0385 13.0031 71.3505 13.9245 71.29 14.86C71.3535 15.3293 71.3159 15.8068 71.1797 16.2604C71.0434 16.714 70.8117 17.1332 70.5001 17.4898C70.1885 17.8464 69.8041 18.1323 69.3729 18.3281C68.9417 18.524 68.4736 18.6253 68 18.6253C67.5264 18.6253 67.0583 18.524 66.6271 18.3281C66.1959 18.1323 65.8115 17.8464 65.4999 17.4898C65.1883 17.1332 64.9566 16.714 64.8203 16.2604C64.6841 15.8068 64.6465 15.3293 64.71 14.86C64.6495 13.9245 64.9615 13.0031 65.5779 12.2968C66.1943 11.5905 67.065 11.1567 68 11.09V11.09ZM59.17 44.89C65 48.89 59.17 58.29 48.58 53.16C48.35 53.05 48.36 52.64 48.92 52.35C52.4861 50.4907 55.642 47.9334 58.2 44.83C58.35 44.54 58.79 44.66 59.12 44.89H59.17Z" />
                  <path d="M35.15 42.18C37.41 42.07 43.99 37.59 44.61 35.62C44.99 34.39 34.23 32.3 32.46 35.94C31.51 37.9 32 42.32 35.15 42.18Z" />
                  </g>
                  <path d="M92.294 17.8942L91.646 50.5102L101.798 50.5642L101.906 33.3382L104.93 39.6562L110.762 39.2242L113.462 33.1762L114.164 50.7262L124.262 50.0242L123.02 17.1382L114.218 16.8142L107.63 29.6662L100.934 16.8142L92.294 17.8942ZM150.47 41.6542L138.482 41.9782L138.428 37.4422L146.636 37.5502L146.744 29.6122L138.914 29.6662L139.022 25.3462L149.282 25.2922L149.498 16.7062L131.138 17.0842L129.086 18.4882L128.87 50.2402L150.146 50.4022L150.47 41.6542ZM177.142 16.5442L151.816 17.0842L151.924 26.5342L159.7 26.2642L159.592 50.4562L170.176 49.9702L169.042 26.0482L177.574 26.1562L177.142 16.5442ZM203.639 29.5582L195.809 16.7602L186.305 17.1382L179.555 31.1242L178.151 50.4562L187.439 50.6182L187.709 44.8402L195.431 44.1922L195.971 50.8882L205.691 50.4562L203.639 29.5582ZM188.087 36.7402L188.573 31.8802L191.381 25.7782L194.297 31.9882L194.675 36.3622L188.087 36.7402ZM221.361 17.2462L221.793 50.5642L232.539 50.1862L232.161 37.4422L238.101 41.4382L238.695 50.7802L250.035 50.1322L247.767 35.9842L241.125 33.0682L247.605 29.0722L248.469 17.6782L237.507 16.9762L237.237 26.3722L231.729 30.3682L231.513 17.0842L221.361 17.2462ZM277.832 16.8682L254.612 17.2462L253.802 49.2682L263.306 50.3482L279.236 49.7002L280.37 43.5982L277.832 16.8682ZM263.144 41.1142L263.414 26.1022L269.408 26.4262L270.11 40.8442L263.144 41.1142ZM284.708 17.1382L285.086 50.6722L295.832 49.9702L295.616 16.7062L284.708 17.1382Z" />
                  <path d="M296.04 11.9423C297.367 11.2236 298.7 10.4802 300.025 9.78523C302.093 8.70164 304.15 9.02586 305.341 10.564C305.744 11.0487 305.977 11.6523 306.004 12.2823C306.031 12.9122 305.851 13.5336 305.491 14.0511C304.793 15.2224 303.828 16.0269 302.317 15.9008C300.122 15.7192 298.019 14.8292 295.88 14.5727C293.867 14.3576 293.464 13.1254 293.163 11.5874C292.817 9.70633 292.425 7.83358 292.092 5.92669C291.811 4.40255 292.137 2.98941 293.523 2.14848C294.041 1.79099 294.661 1.60948 295.29 1.63073C295.919 1.65198 296.525 1.87485 297.018 2.2665C297.625 2.70861 298.076 3.33199 298.305 4.04674C298.535 4.76148 298.531 5.53065 298.295 6.2433C297.819 8.20557 296.856 9.97618 296.04 11.9423Z" />
                  <defs>
                  
                  <clipPath id="clip0_16_141">
                  <rect width="82" height="63" fill="white" transform="translate(0 1)"/>
                  </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
            <div className="text-sm ">
              POWERED BY METAKOI LAB LTD.
            </div>
          </div>
          
          <a  href="mailto:hello@metakoi.net"  target={'_blank'}  className="sm:col-span-12 lg:col-span-4 lg:max-w-xs flex fex-row items-center md:bg-white md:bg-opacity-20 md:backdrop-blur-lg md:rounded-t-full md:drop-shadow-lg md:p-1 md:px-8">
            <div className="mr-2 ">
              <svg width="28" height="25" className="fill-current" viewBox="0 0 26 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.903 12.132c-1.465 1.17-2.367 1.75-3.28 1.75-.872 0-1.754-.543-3.117-1.605l-8.117 7.14h22.85l-8.245-7.355-.093.07h.002zm-9.622-2.35a683.345 683.345 0 0 1-6.278-4.89v13.46c.006.04.014.08.025.12l8.179-7.199c-.593-.469-1.229-.953-1.923-1.49l-.003-.001zm19.546 8.881c.038-.1.06-.205.063-.312V4.32c-2.87 2.23-5.735 4.467-8.592 6.713l8.53 7.631zM24.272 0H1.618A2.248 2.248 0 0 0 0 1.618v1.275c2.387 1.9 4.978 3.899 7.174 5.593 1.21.935 2.296 1.775 3.157 2.443 2.309 1.81 2.309 1.81 4.665-.073 2.13-1.704 7.865-6.165 10.899-8.524V1.62A2.245 2.245 0 0 0 24.272 0z"  fill-rule="nonzero"/>
              </svg>
            </div>
            <span className="">
            hello@metakoi.net
            </span>
          </a>
          <a  href="/official-website/" target={'_blank'} className="sm:col-span-12 lg:col-span-4 lg:max-w-xs flex fex-row  items-center md:bg-white md:bg-opacity-20 md:backdrop-blur-lg md:rounded-t-full md:drop-shadow-lg md:p-1 md:px-8">
            <div className="mr-2">
              <svg width="28" height="25" className="fill-current" viewBox="0 0 25 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.188 6.046a6.697 6.697 0 0 0-13.315-.124C2.545 6.456 0 9.335 0 12.814a6.99 6.99 0 0 0 6.99 6.99h11.066v-.031a6.985 6.985 0 0 0 6.407-6.96c0-3.267-2.246-6.001-5.275-6.767zM12.23 18.638l-6.535-6.99h4.724V5.243h3.495v6.407h4.852l-6.536 6.99z"  fill-rule="nonzero"/>
              </svg>
            </div>
            <span className="">
              下载媒体工具包
            </span>
          </a>
          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 hidden">
            <h6 className="text-xs text-gray-200 font-semibold uppercase mb-2">
              Products
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Neon Manage
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Neon Analyse
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Neon Launch
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Experimentation
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 hidden">
            <h6 className="text-xs text-gray-200 font-semibold uppercase mb-2">
              Resources
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Cheat Sheet
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Channel Partners
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Affiliate Program
                </a>
              </li>
            </ul>
          </div>
          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 hidden">
            <h6 className="text-xs text-gray-200 font-semibold uppercase mb-2">
              Compare
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Session Recording
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Feature Flags
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Heatmaps
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Correlation Analysis
                </a>
              </li>
            </ul>
          </div>
          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 hidden">
            <h6 className="text-xs text-gray-200 font-semibold uppercase mb-2">
              Company
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Work With Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
