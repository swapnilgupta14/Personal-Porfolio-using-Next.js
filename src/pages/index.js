import { useState, useEffect } from "react";
import Footer from "@/component/footer";
import Homepage from "@/component/Homepage";
import AddButton from "@/component/utils/addButton";
import About from "@/component/About";
import Misc from "@/component/Misc";
import Experience from "@/component/Experience";
import Projects from "@/component/Projects";
import { Custom } from "@/component/icon/icon";

import useLenis from "../component/utils/useLenis";
import dynamic from "next/dynamic";

// const ScrollTextEffect = dynamic(
//   () => import("../components/common/ScrollTextEffect"),
//   {
//     ssr: false,
//   }
// );

export default function Home() {
  useLenis();
  useEffect(() => {
    const handleCopy = (e) => {
      e.preventDefault();
    };
    document.addEventListener("copy", handleCopy);
    return () => {
      document.removeEventListener("copy", handleCopy);
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
    let timeoutId = null;

    const handleMouseMove = (dets) => {
      const x = dets.clientX - 5;
      const y = dets.clientY - 4;

      const cursor = document.querySelector(".cursor");
      if (cursor === null) return;

      cursor.style.display = "block";
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        cursor.style.display = "none";
      }, 1000);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
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
              <div></div>
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
              {/* <div>
                <ScrollTextEffect />
              </div> */}
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
