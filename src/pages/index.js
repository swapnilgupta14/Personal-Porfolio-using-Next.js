import { useState, useEffect } from "react";
import Header from "@/component/header";
import Footer from "@/component/footer";
import Homepage from "@/component/Homepage";
import Projects from "@/component/Project";
import AddButton from "@/component/utils/addButton";
import Misc from "@/component/Misc";

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const [currentScroll, setCurrentScroll] = useState(0);
  useEffect(() => {
    let currentScroll = window.scrollY;
    window.addEventListener('scroll', () => {
      currentScroll = window.scrollY;
      setCurrentScroll(currentScroll);
    }
    );
  }, [currentScroll]);

  const scrollToSection = (id) => {
    let section = document.getElementById(id);
    if (section) {
      setTimeout(() => {
        let sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (sectionTop > currentScroll) {
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        } else {
          window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
          });
        }
        setIsDropdownOpen(false);
      }, 200);
    }
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
              <Header isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} scrollToSection={scrollToSection} />
              <Homepage />
              {isMobile ? null : <AddButton />}
              <Projects />
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
