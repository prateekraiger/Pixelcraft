import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Background from "./components/Background";

const App: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <Background />
        <Navbar />
        <main className="flex-grow pt-20 relative z-10">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  imageUrl={imageUrl}
                  isLoading={isLoading}
                  setImageUrl={setImageUrl}
                  setIsLoading={setIsLoading}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
