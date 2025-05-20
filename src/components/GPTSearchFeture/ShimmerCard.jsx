
import React from "react";

const ShimmerCard = () => {
  return (
   <div className=" w-full bg-black h-[400px] opacity-60 mt-10 flex flex-wrap space-x-5">
     <div className="w-64 h-36 rounded-lg relative overflow-hidden bg-gray-800">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/100 to-transparent animate-pulse" />
    </div>
    <div className="w-64 h-36 rounded-lg relative overflow-hidden bg-gray-800">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/100 to-transparent animate-pulse" />
    </div>
    <div className="w-64 h-36 rounded-lg relative overflow-hidden bg-gray-800">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/100 to-transparent animate-pulse" />
    </div>
    <div className="w-64 h-36 rounded-lg relative overflow-hidden bg-gray-800">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/100 to-transparent animate-pulse" />
    </div>
    <div className="w-64 h-36 rounded-lg relative overflow-hidden bg-gray-800">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/100 to-transparent animate-pulse" />
    </div>
    <div className="w-64 h-36 rounded-lg relative overflow-hidden bg-gray-800">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/100 to-transparent animate-pulse" />
    </div>
   </div>
  );
};

export default ShimmerCard;
