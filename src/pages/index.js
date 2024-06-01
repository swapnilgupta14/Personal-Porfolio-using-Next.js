import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/component/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);
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
          <Header />
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
