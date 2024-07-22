import { useState, useEffect } from "react";
import Footer from "@/component/footer";
import Homepage from "@/component/Homepage";
import AddButton from "@/component/utils/addButton";
import About from "@/component/About";
import Misc from "@/component/Misc";
import Experience from "@/component/Experience";
import Projects from "@/component/Projects";
import { Custom } from "@/component/icon/icon";

export default function Home() {
  const [cursorColor, setCursorColor] = useState('#ffffff'); 

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


  let isMobile;
  if (typeof window !== "undefined") {
    isMobile = window.innerWidth <= 768;
  }

  useEffect(() => {
    document.addEventListener('mousemove', function (dets) {
      let x = dets.clientX - 5;
      let y = dets.clientY - 4;
      console.log(x, y);

      let cursor = document.querySelector('.cursor');
      if(cursor === null) return;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    });
  }, []);

  const getLuminance = (color) => {
    const rgb = color.match(/\d+/g).map(Number);
    const [r, g, b] = rgb.map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };


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
            <div className="global-bg">
              <div className="cursor">
                <Custom fill={"#ffffff"} />
              </div>
              <Homepage />
              {isMobile ? null : <AddButton />}
              <About />
              <Projects />
              <Experience />
              <Misc />
              <Footer />
            </div>
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
