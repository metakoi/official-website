import Features2Image from "../images/kmt-float.svg";
import Features1Image from "../images/kst-float.svg";
import React from "react";

function LiteProfit() {
  return (
    <section className="relative">
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 relative">
          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8  md:space-y-0">
            {/* Content */}
            <div
              className="md:w-7/12 lg:w-1/2"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <div className="text-center md:text-left">
                <h3 className="h3 font-uncut-sans text-4xl mb-4  font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-emerald-400 to-fuchsia-400">
                我们如何盈利
                </h3>
                <div className="inline-flex flex-col text-lg space-y-6">
                  <p>
                  我们从应用内活动中收取少量税款，例如 NFT 交易、繁衍和出租。META KOI 游戏中的所有资产均归个人用户所有，游戏中的大部分收入由用户赚取。
                  </p>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}

export default LiteProfit;
