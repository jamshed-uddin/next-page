import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div>
        <div className="text-5xl font-bold flex">
          <p>L</p>
          <div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-blue-400"></div>
          <p>ading...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
