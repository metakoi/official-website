import React from "react";
import moment from "moment";

function NFTCard(props) {
  return (
    <div className="h-full w-80">
      <div className="relative p-0.5 bg-gradient-to-tl from-fuchsia-400 to-emerald-400 w-full">
        <div className="absolute top-0 right-0 mr-6 z-10 hidden">
          <div className="inline-flex items-center text-sm font-semibold py-1 px-3 text-red-600 bg-red-200 rounded-full">
            <svg
              className="fill-red-500 mr-2"
              width="12"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.315.068a.5.5 0 0 0-.745.347A7.31 7.31 0 0 1 3.182 3.6a7.924 7.924 0 0 1-.8.83A6.081 6.081 0 0 0 0 9.035a5.642 5.642 0 0 0 2.865 4.9.5.5 0 0 0 .746-.4 2.267 2.267 0 0 1 .912-1.67 4.067 4.067 0 0 0 1.316-1.4 4.662 4.662 0 0 1 1.819 3.1.5.5 0 0 0 .742.371c1.767-.999 2.86-2.87 2.865-4.9-.001-3.589-2.058-6.688-5.95-8.968Z" />
            </svg>
            <span>{props.data.limit - props.data.minted}/{props.data.limit}</span>
          </div>
        </div>

        <div className="h-full w-full bg-gray-900   flex flex-col justify-center items-center">
          <div className="card p-6">
            <div className="preview-frame">
              {
                props.data.type != 'box' && <div className={`preview-animation`} style={{
                  backgroundImage:`url(${props.data.image})`
                }}></div>
              }
              {
                props.data.type == 'box' && <div className={``} style={{
                  backgroundImage:`url(${props.data.image})`,
                  width:'200px',
                  height:'120px'
                }}></div>
              }
              
              {/* preview-frame preview-animation  bg-[url('/images/koi-yellow.png')]`} */}
              {/* preview-animation  bg-[url('/images/koi-white.png')] */}
            </div>
          </div>

          <div className="bg-gradient-to-tr from-gray-700 to-gray-800 p-4 w-full h-full space-y-4">
            <div className="flex flex-row justify-between items-center">
              <div className="text-lg font-semibold mb-1 inline-flex items-baseline">{props.data.name}</div>
              <span className="text-slate-300 font-medium	">
                <span>
                {props.data.limit - props.data.minted}
                </span>
                /
                <span className="">
                {props.data.limit}
                </span>
               
              </span>
            </div>
            <div className="font-uncut-sans inline-flex items-baseline mb-2  font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-emerald-400 to-fuchsia-400 gap-2">
              <span className="text-4xl font-bold leading-7">{props.data.price}</span>
              <span className="text-3xl font-medium">
                {props.data.priceUnit}
              </span>
            </div>
            

            <div className=" mb-6 flex flex-row item-end">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-orange-500 w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {
                new Date().getTime() < props.data.startTime && 
                <span className="text-white">
              {`Sale starts ${moment(props.data.startTime).format("MMMM Do YYYY")} at ${moment(props.data.startTime).format("hh:mm:ss a")}`}
              </span>
              }
              {
                new Date().getTime() > props.data.startTime && new Date().getTime() < props.data.startTime && 
                <span className="text-white">
              {`Sale ends ${moment(props.data.endTime).format("MMMM Do YYYY")} at ${moment(props.data.endTime).format("hh:mm:ss a")}`}
              </span>
              }
            </div>
            <a
              className="btn-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group"
              href="#0"
            >
              铸造{" "}
              <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                -&gt;
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTCard;
