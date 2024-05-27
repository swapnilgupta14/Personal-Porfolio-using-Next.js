'use client';
import { useEffect, useState } from 'react';
import HomePage from '../pages/HomePage';
import Header from '../pages/Header';

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let moveTimeoutId;
    let hideTimeoutId;

    const showCursor = () => {
      clearTimeout(hideTimeoutId);
      setVisible(true);
    };

    const hideCursor = () => {
      hideTimeoutId = setTimeout(() => {
        setVisible(false);
      }, 200);
    };

    const mouseMoveHandler = (event) => {
      clearTimeout(moveTimeoutId);
      showCursor();
      setPosition({ x: event.clientX, y: event.clientY });
      moveTimeoutId = setTimeout(() => {
        hideCursor();
      }, 200);
    };

    const mouseEnterHandler = () => {
      showCursor();
    };

    const mouseLeaveHandler = () => {
      hideCursor();
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseenter', mouseEnterHandler);
    document.addEventListener('mouseleave', mouseLeaveHandler);

    return () => {
      clearTimeout(moveTimeoutId);
      clearTimeout(hideTimeoutId);
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseenter', mouseEnterHandler);
      document.removeEventListener('mouseleave', mouseLeaveHandler);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
      `}</style>
      <div>
        <Header />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HomePage />
        <div
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.2s ease-in-out',
          }}
          className="fixed w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full"></div>
            </div>
            <div className="absolute inset-0 border-2 border-white rounded-full"></div>
          </div>
        </div>
      </main>
    </>
  );
}
