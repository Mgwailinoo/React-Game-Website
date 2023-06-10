import React, { useEffect } from "react";
import PreloaderAnimation from "../assets/1747-preloader.json";
import Lottie from "lottie-react";
const Preloading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Lottie animationData={PreloaderAnimation} loop={false} />
    </div>
  );
};

export default Preloading;
