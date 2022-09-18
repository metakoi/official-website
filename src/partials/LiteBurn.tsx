import React from 'react';



function LiteBurn() {
  return (
    <section className="relative">
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10" aria-hidden="true" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 relative">
          
          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">
            {/* Content */}
            <div className="w-full " data-aos="zoom-out" data-aos-delay="200">
              <div className="text-center md:text-left">
                <h3 className="h2 font-uncut-sans text-4xl mb-4  font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-emerald-400 to-fuchsia-400">KMT代币</h3>
                <ul className="flex flex-col gap-6">
                  <li className="flex flex-col text-left items-left bg-slate-800 rounded-xl p-2 md:p-8">
                    <span className='md:text-2xl font-bold'>优化繁衍</span>
                    <p className='text-slate-400'>消耗 KMT 永久提高生出两只鱼苗的概率</p>
                  </li>
                  <li className="flex flex-col text-left items-left bg-slate-800 rounded-xl p-2 md:p-8">
                    <span className='md:text-2xl font-bold'>锦鲤等级</span>
                    <p className='text-slate-400'>消耗 KMT 以升级5/10/20/29/30</p>
                  </li>
                  <li className="flex flex-col text-left items-left bg-slate-800 rounded-xl p-2 md:p-8">
                    <span className='md:text-2xl font-bold'>宝石升级成功率</span>
                    <p className='text-slate-400'>消耗 KMT 永久提高宝石升级成功率</p>
                  </li>
                  <li className="flex flex-col text-left items-left bg-slate-800 rounded-xl p-2 md:p-8">
                    <span className='md:text-2xl font-bold'>宝石升级</span>
                    <p className='text-slate-400'>消耗 KMT 以升级等级+4的宝石</p>
                  </li>
                  <li className="flex flex-col text-left items-left bg-slate-800 rounded-xl p-2 md:p-8">
                    <span className='md:text-2xl font-bold'>提高KST上限</span>
                    <p className='text-slate-400'>消耗 KMT 以永久增加 KST 每日收入上限</p>
                  </li>
                  <li className="flex flex-col text-left items-left bg-slate-800 rounded-xl p-2 md:p-8">
                    <span className='md:text-2xl font-bold'>繁衍高质量锦鲤</span>
                    <p className='text-slate-400'>消耗 KMT 以永久增加产出高质量锦鲤的概率</p>
                  </li>
                  <li className="flex flex-col text-left items-left bg-slate-800 rounded-xl p-2 md:p-8">
                    <span className='md:text-2xl font-bold'>繁衍稀有锦鲤</span>
                    <p className='text-slate-400'>消耗 KMT 以永久增加产出高质量锦鲤的概率</p>
                  </li>
                  <li className="flex flex-col text-left items-left bg-slate-800 rounded-xl p-2 md:p-8">
                    <span className='md:text-2xl font-bold'>重新分配属性点</span>
                    <p className='text-slate-400'>消耗 KMT 以重新分配属性点</p>
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

export default LiteBurn;
