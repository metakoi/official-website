import React from "react";
import moment from "moment";

function NFTCard(props) {
  return (
    <div className="h-full">
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
          <div className="card p-10">
            <div className="preview-frame">
               <div className={`preview-animation`} style={{
                  backgroundImage:`url(${props.data.image})`
                }}/>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-tr from-gray-700 to-gray-800 p-4 w-full h-full space-y-4">
          {/* title */}
          <div className="h4 font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-emerald-400 to-fuchsia-400">
            {props.data.name}
          </div>
          {/* info */}
          <div className="text-lg space-y-4 font-uncut-sans font-semibold">
            <div className="flex flex-row justify-between">
              <span className="text-slate-400">
                总量
              </span>
              <span>
                {props.data.limit}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="text-slate-400">
                剩余
              </span>
              <span>
                {props.data.limit-props.data.minted}
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default NFTCard;
