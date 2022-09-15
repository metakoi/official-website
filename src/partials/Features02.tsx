import React from 'react';

import Features1Image from '../images/kst-float.svg';
import Features2Image from '../images/kmt-float.svg';


function Features02() {
  return (
    <section className="relative">
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10" aria-hidden="true" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 relative">
          <img className="absolute mx-auto md:max-w-none w-12 md:w-28 animate-float" src={Features1Image}  alt="Features" data-aos="zoom-out" data-aos-delay="400"/>
          <img className="absolute right-0 bottom-0 mx-auto md:max-w-none w-12 md:w-28 animate-float" src={Features2Image}  alt="Features" data-aos="zoom-out" data-aos-delay="400"/>
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20"  data-aos="zoom-out" data-aos-delay="200">
            <h2 className="h2 font-uncut-sans mb-4  font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-emerald-400 to-fuchsia-400">多种多样的玩法</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-400">META KOI 是一款奖励培育锦鲤用户的 WEB3 生活方式应用程序.</p>
            </div>
          </div>
          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">
            {/* Content */}
            <div className="md:w-7/12 lg:w-1/2 order-1 md:order-none" data-aos="zoom-out" data-aos-delay="200">
              <div className="text-center md:text-left">
                <h3 className="h3 font-uncut-sans text-4xl mb-4  font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-emerald-400 to-fuchsia-400">强大的GameFi体系</h3>
                <p className="text-xl text-gray-400 mb-6">锦鲤可以通过参与游戏内功能让您获得更多收益.</p>
                <ul className="inline-flex flex-col text-lg text-gray-400 space-y-3">
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>能量系统</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>宝石和插槽系统</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>繁衍和铸造系统</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>忠诚度系统</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>盲盒系统</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-4 h-4 mr-3 fill-current text-red-500 ">
                      <path d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"  />
                    </svg>
                    <span>任务系统(计划中)</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-4 h-4 mr-3 fill-current text-red-500 ">
                      <path d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"  />
                    </svg>
                    <span>成功率提升系统(计划中)</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-4 h-4 mr-3 fill-current text-red-500 ">
                      <path d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"  />
                    </svg>
                    <span>增强系统(计划中)</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-4 h-4 mr-3 fill-current text-red-500 ">
                      <path d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"  />
                    </svg>
                    <span>融合系统(计划中)</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Image */}
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features02;
