import Illustration from "../images/pricing-illustration.svg";
import React from "react";
import NFTCard from "./NFTCard";
import { v4 as uuidv4 } from "uuid";
import Carroussel from "./Carroussel";

function Pricing() {
  // var settings = {
  //   className: "center",
  //   centerMode: true,
  //   centerPadding: "60px",
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 2,
  //   initialSlide: 1,
  //   // autoplay: true,
  //   // autoplaySpeed: 3000,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  let genesisKoi = [
    {
      name: "创世锦鲤-盲盒",
      price: 0.1,
      priceUnit: "BNB",
      limit: 5000,
      minted: 0,
      image:"./images/koi-box.gif",
      type:"box",
      startTime:1664582400000,
      endTime:1665792000000,
    },
    {
      name: "创世锦鲤-白色",
      price: 0.1,
      priceUnit: "BNB",
      limit: 3000,
      minted: 0,
      image:"./images/koi-white.png",
      startTime:1664582400000,
      endTime:1665792000000,
    },
    {
      name: "创世锦鲤-黑色",
      price: 0.15,
      priceUnit: "BNB",
      limit: 2400,
      minted: 0,
      image:"./images/koi-black.png",
      startTime:1664582400000,
      endTime:1665792000000,
    },
    {
      name: "创世锦鲤-黄色",
      price: 0.2,
      priceUnit: "BNB",
      limit: 2000,
      minted: 0,
      image:"./images/koi-yellow.png",
      startTime:1664582400000,
      endTime:1665792000000,
    },
    {
      name: "创世锦鲤-橙色",
      price: 0.3,
      priceUnit: "BNB",
      limit: 1600,
      minted: 0,
      image:"./images/koi-orange.png",
      startTime:1664582400000,
      endTime:1665792000000,
    },
    {
      name: "创世锦鲤-红色",
      price: 0.4,
      priceUnit: "BNB",
      limit: 1000,
      minted: 0,
      image:"./images/koi-red.png",
      startTime:1664582400000,
      endTime:1665792000000,
    },
  ];
  let cards = [
    {
      key: uuidv4(),
      content: <NFTCard data={genesisKoi[0]}/>
    },
    {
      key: uuidv4(),
      content: <NFTCard data={genesisKoi[1]}/>
    },
    {
      key: uuidv4(),
      content: <NFTCard data={genesisKoi[2]}/>
    },
    {
      key: uuidv4(),
      content: <NFTCard data={genesisKoi[3]}/>
    },
    {
      key: uuidv4(),
      content: <NFTCard data={genesisKoi[4]}/>
    },
    {
      key: uuidv4(),
      content: <NFTCard data={genesisKoi[5]}/>
    }
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  function getSlides(){
    
    let slides = [
      <div></div>
    ];
    delete slides[0]
    for (let index = 0; index < genesisKoi.length; index++) {
      const element = genesisKoi[index];
      slides.push(
        <NFTCard data = {element}/>
      )
      
    }
    return slides;

  }
  return (
    <section id="genesis" className="relative">
      {/* Illustration */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10" aria-hidden="true" />
      
      <div className="relative max-w-6xl  mx-auto py-10 px-4 sm:px-6">
        <div
          className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/3 pointer-events-none -z-10"
          aria-hidden="true"
        >
          <img
            src={Illustration}
            className="max-w-none"
            width="618"
            height="468"
            alt="Pricing Illustration"
          />
        </div>
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="h2 font-uncut-sans mb-4 font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-emerald-400 to-fuchsia-400">创世锦鲤</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-sm md:text-xl text-gray-500 font-uncut-sans">
              我们0代的创世锦鲤即将开放铸造,0代创世锦鲤通过增强有机会成为彩虹锦鲤,同时享受彩虹池分红.另还有神秘宝箱可以开启,开启后随机掉落一个0代锦鲤
            </p>
          </div>
        </div>
        <div className="max-w-sm mx-auto md:max-w-none">
          <Carroussel
            cards={cards}
            height="500px"
            width="80%"
            margin="0 auto"
            offset={2}
            showArrows={false}
          />
        </div>
      </div>
    </section>
  );
}

export default Pricing;
