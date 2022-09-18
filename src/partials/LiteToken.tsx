import KmtFloat from "../images/kmt-float.svg";
import KstFloat from "../images/kst-float.svg";
import Kmt from "../images/kmt.svg";
import Kst from "../images/kst.svg";
import React from "react";

function LiteToken() {
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
              className="w-full"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <div className="text-center md:text-left">
                <h3 className="h3 font-uncut-sans text-4xl mb-4  font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-emerald-400 to-fuchsia-400">
                代币
                </h3>
                <div className="flex justify-center  font-uncut-sans py-16">
                  <div className="flex space-x-6 text-lg md:text-3xl">
                    <div className="flex  items-center space-x-4">
                      <div className="flex flex-col items-center">
                        <img src={Kst} className="w-10 md:w-20" alt="" />
                        <span className="font-bold">KST</span>
                      </div>
                      <span>无限供应</span>
                    </div>
                    <div className="flex  items-center  space-x-4">
                      <div className="flex flex-col items-center">
                        <img src={Kmt} className="w-10 md:w-20" alt="" />
                        <span className="font-bold">KMT</span>
                      </div>
                      <span>总供应量 60 亿</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center  font-uncut-sans  py-16">
                  <div className="flex flex-row space-x-6 text-lg md:text-3xl">
                    <div className="flex flex-col justify-center items-centers">
                      <span className="font-bold">
                        KMT
                      </span>
                      <span>
                        治理代币
                      </span>
                    </div>
                    <div className="flex animate-float">
                      <img src={KmtFloat} className="w-28 md:w-80 " alt="" />
                      <img src={KstFloat} className="w-28 md:w-80 -ml-8 -z-10" alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-centers">
                      <span className="font-bold">
                        KST
                      </span>
                      <span>
                        治理代币
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}

export default LiteToken;
