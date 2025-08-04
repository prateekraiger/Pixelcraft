import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          About Pixelcraft
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Discover the story behind the AI-powered pixel art revolution
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {/* Mission - Large Card */}
          <div className="lg:col-span-2 lg:row-span-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 border border-white/20 rounded-xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-purple-400"
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
              </div>
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              We believe that creativity should be accessible to everyone.
              Pixelcraft democratizes pixel art creation by combining the
              nostalgic charm of retro gaming aesthetics with cutting-edge AI
              technology.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our goal is to bridge the gap between imagination and creation,
              making it possible for anyone to bring their pixel art visions to
              life without years of artistic training.
            </p>
          </div>

          {/* Innovation */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-pink-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Advanced AI algorithms that understand pixel art nuances and
              creative vision.
            </p>
          </div>

          {/* Speed */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Lightning Fast
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Generate stunning pixel art in seconds with just a text prompt.
            </p>
          </div>

          {/* Authentic Style */}
          <div className="lg:col-span-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.5l1.5-1.5 1.5 1.5m-1.5-1.5V12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">
                Authentic Pixel Art Style
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Maintains true pixel art aesthetics with proper scaling, limited
              color palettes, and that classic retro gaming feel that brings
              back nostalgic memories.
            </p>
          </div>

          {/* Team Section */}
          <div className="lg:col-span-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
            <h2 className="text-3xl font-bold text-white mb-4">
              Built with Passion
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Pixelcraft is crafted by a team of AI enthusiasts, game
              developers, and pixel art lovers who understand the magic of retro
              aesthetics and modern technology. We're passionate about making
              creativity accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
