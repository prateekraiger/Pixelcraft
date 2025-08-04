import React, { useState } from "react";
import PixelArtCanvas from "../components/PixelArtCanvas";
import { generatePixelArt } from "../services/geminiService";

const CraftPage: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [artHistory, setArtHistory] = useState<string[]>([]);

  const handleGenerate = async () => {
    if (!prompt) {
      setErrorMessage("Please enter a prompt.");
      return;
    }
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const generatedImageUrl = await generatePixelArt(prompt);
      setImageUrl(generatedImageUrl);
      if (generatedImageUrl) {
        setArtHistory((prevHistory) =>
          [generatedImageUrl, ...prevHistory].slice(0, 5)
        );
      }
    } catch (error) {
      console.error("Error generating pixel art:", error);
      setErrorMessage("Failed to generate pixel art. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleHistoryClick = (url: string) => {
    setImageUrl(url);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Craft Your Pixel Art
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Transform your imagination into stunning pixel art masterpieces using
          the power of artificial intelligence
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 max-w-7xl mx-auto">
        {/* Left Panel - Input and History */}
        <div className="w-full lg:w-1/2 flex flex-col items-center space-y-8">
          {/* Input Card */}
          <div className="w-full max-w-lg backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Generate Pixel Art
              </h2>
              <p className="text-gray-300 text-sm">
                Describe your vision and watch it come to life
              </p>
            </div>

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter a prompt for your pixel art... (e.g., 'a futuristic city skyline with neon lights')"
              className="w-full p-4 border border-white/20 rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 h-32 resize-none backdrop-blur-sm"
            ></textarea>

            <button
              onClick={handleGenerate}
              disabled={isLoading}
              className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Generating...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span>Create Pixel Art</span>
                </div>
              )}
            </button>

            {errorMessage && (
              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                <p className="text-red-400 text-center text-sm">
                  {errorMessage}
                </p>
              </div>
            )}
          </div>

          {/* History Card */}
          {artHistory.length > 0 && (
            <div className="w-full max-w-lg backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Recent Creations
                </h2>
                <p className="text-gray-300 text-sm">
                  Your latest pixel art masterpieces
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {artHistory.map((artUrl, index) => (
                  <div
                    key={index}
                    className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                    onClick={() => handleHistoryClick(artUrl)}
                  >
                    <img
                      src={artUrl}
                      alt={`Pixel Art ${index + 1}`}
                      className="w-full h-24 object-cover pixelated"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                      <span className="text-white text-xs font-semibold">
                        View
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Panel - Canvas */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <PixelArtCanvas imageUrl={imageUrl} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default CraftPage;
