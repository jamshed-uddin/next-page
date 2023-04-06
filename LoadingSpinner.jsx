import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="h-[90vh] flex items-center justify-center">
      <div>
        <p>L</p>
        <div className="border-6 border-red-500 border-dashed rounded-full animate-spin"></div>
        <p>ading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
