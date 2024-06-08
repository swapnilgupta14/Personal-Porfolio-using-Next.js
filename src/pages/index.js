import { useState, useEffect } from "react";
import Header from "@/component/header";
import Footer from "@/component/footer";
import Homepage from "@/component/Homepage";
import Projects from "@/component/Project";

export default function Home() {
  
  useEffect(() => {
    const handleCopy = (e) => {
      e.preventDefault();
    };

    document.addEventListener('copy', handleCopy);

    return () => {
      document.removeEventListener('copy', handleCopy);
    };
  }, []);

  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowWelcome(false);
    }, 2500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div>

        {showWelcome ? (
          <div>
            <div className="loader-container">
              <div className="loader">
                <svg viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="32"></circle>
                </svg>
              </div>
              <div className="loader triangle">
                <svg viewBox="0 0 86 80">
                  <polygon points="43 8 79 72 7 72"></polygon>
                </svg>
              </div>
              <div className="loader">
                <svg viewBox="0 0 80 80">
                  <rect x="8" y="8" width="64" height="64"></rect>
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <>
          <Header />
          <Homepage />
          <Projects/>
          <Footer/>
          </>
        )}
        {!showWelcome && (
          <style jsx global>{`
            .hide-welcome-message {
              display: none !important;
            }
          `}</style>
        )}
      </div>
    </>
  );
}
