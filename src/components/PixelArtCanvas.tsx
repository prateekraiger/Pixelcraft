import React from "react";
import LoadingSpinner from "./LoadingSpinner";

interface PixelArtCanvasProps {
  imageUrl: string | null;
  isLoading: boolean;
}

const PixelArtCanvas: React.FC<PixelArtCanvasProps> = ({
  imageUrl,
  isLoading,
}) => {
  const handleDownload = () => {
    if (imageUrl) {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "mosaic-mind-art.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden hover:bg-white/10 transition-all duration-300">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-3xl"></div>

        <div className="relative z-10">
          {isLoading ? (
            <div className="aspect-square flex items-center justify-center">
              <LoadingSpinner />
            </div>
          ) : imageUrl ? (
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-4 border border-white/10">
                <img
                  src={imageUrl}
                  alt="Generated pixel art"
                  className="w-full h-full object-contain rounded-xl pixelated shadow-lg"
                />
              </div>

              {/* Download button */}
              <button
                onClick={handleDownload}
                className="absolute bottom-6 right-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Download</span>
              </button>

              {/* Success indicator */}
              <div className="absolute top-6 right-6 bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1">
                <span className="text-green-400 text-sm font-medium">
                  Generated!
                </span>
              </div>
            </div>
          ) : (
            <div className="aspect-square flex items-center justify-center">
              <div className="text-center text-gray-300 flex flex-col items-center gap-6 max-w-md">
                <div className="relative">
                  <div className="w-24 h-24 border border-white/20 rounded-3xl flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.5l1.5-1.5 1.5 1.5m-1.5-1.5V12m0 0h8"
                      />
                    </svg>
                  </div>
                  {/* Animated dots */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    <div
                      className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Unleash Your Creativity!
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Type a prompt above and click 'Create Pixel Art' to
                    transform your imagination into stunning pixel art
                    masterpieces.
                  </p>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>AI Powered</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Instant Generation</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>High Quality</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PixelArtCanvas;
