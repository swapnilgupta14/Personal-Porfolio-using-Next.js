"use client";
import React, { useEffect, useState } from 'react';
import Header from './components/header';

const Page = () => {
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
      }, 200); // Adjust delay before hiding the cursor
    };

    const mouseMoveHandler = (event) => {
      clearTimeout(moveTimeoutId);
      showCursor();
      setPosition({ x: event.clientX, y: event.clientY });
      moveTimeoutId = setTimeout(() => {
        hideCursor();
      }, 500); // Adjust delay for detecting inactivity
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

  const CustomCursor = () => {
    const cursorStyle = {
      position: 'fixed',
      top: position.y + 'px',
      left: position.x + 'px',
      pointerEvents: 'none',
      zIndex: 9999,
      visibility: visible ? 'visible' : 'hidden',
      cursor: "none !important",

    };

    const outerCircleStyle = {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      border: '2px solid white',
      position: 'absolute',
      top: '-20px',
      left: '-20px',
      pointerEvents: 'none',
      cursor: "none !important",
    };

    const innerCircleStyle = {
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      backgroundColor: 'blue', // Set your desired color here
      position: 'absolute',
      top: 'calc(50% - 10px)',
      left: 'calc(50% - 11px)',
      pointerEvents: 'none',
      cursor: "none !important",

    };

    return (
      <div style={cursorStyle}>
        <div style={outerCircleStyle}></div>
        <div style={innerCircleStyle}></div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <CustomCursor />
    </>
  );
};

export default Page;
