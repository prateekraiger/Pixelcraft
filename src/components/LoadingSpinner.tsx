import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      {/* Main spinner */}
      <div className="relative">
        <div className="w-20 h-20 border-4 border-purple-500/20 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
        </div>
        <div
          className="absolute inset-0 w-20 h-20 border-4 border-blue-500/20 rounded-full animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-blue-500 rounded-full animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>
        </div>
      </div>

      {/* Loading text */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-white mb-2">
          Creating Your Masterpiece
        </h3>
        <p className="text-gray-400 text-sm">AI is working its magic...</p>
      </div>

      {/* Animated dots */}
      <div className="flex space-x-2">
        <div
          className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
