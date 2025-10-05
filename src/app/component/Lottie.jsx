"use client";
import React from "react";
import Lottie from "lottie-react";

const LogoAnimation = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500">
        <div className="bg-black rounded-xl p-4">
        <Lottie
            path="/animations/Bot.json"  // ✅ Load directly from public folder
            loop={true}
            autoplay={true}
            className="w-60 h-60"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoAnimation;
