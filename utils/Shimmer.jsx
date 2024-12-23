import React from "react";

const Shimmer = () => {
  return (
    <div className="grid grid-cols-4 justify-items-center mt-2">
     {Array(8).fill("").map((index) => {
        return(<>
              <div key={index} className="h-34 mt-2 mb-8 border-spacing-1 shadow-slate-200 bg-gray-900" >
                <img className="h-60 w-56 aspect-auto bg-gray-500 opacity-0" />
                <div className="text-start pl-1 bg-gray-500 text-gray-400">
                  <h3 className="font-semibold text-xl"> </h3>
                  <span className="flex">
                    <span>
                      <img className="w-6" />
                    </span>
                    <span>
                      <span className="font-semibold ml-1"></span>
                    </span>
                  </span>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </>)
     })}
    </div>
  );
};

export default Shimmer;
