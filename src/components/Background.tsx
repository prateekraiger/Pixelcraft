import React from "react";

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Main radial gradient background */}
      <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        {/* Grid pattern overlay */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        {/* Subtle animated gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 animate-pulse"></div>

        {/* Enhanced floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-300 rounded-full animate-ping opacity-60"></div>
          <div
            className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-ping opacity-40"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-indigo-300 rounded-full animate-ping opacity-50"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-1 h-1 bg-violet-300 rounded-full animate-ping opacity-30"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-45"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Background;
