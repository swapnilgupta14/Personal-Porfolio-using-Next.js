import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const FrontpageContainer = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        window.addEventListener('resize', handleResize);

        // Initial check
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="frontpage-container">
            <div className="container">
                <div className="text">
                    <div className="name">
                        Hello, {isSmallScreen && <><br /></>} I'm <br />
                        <span className="name-color">Swapnil {isSmallScreen && <><br /></>} Gupta</span>
                       
                    </div>
                </div>
                <section className="animation">
                    <div className="first"><div>Full Stack {isSmallScreen && <><br /></>} Developer</div></div>
                    <div className="second"><div>UI/UX{isSmallScreen && <><br /></>} Designer</div></div>
                    <div className="third"><div>Web3 Enthusiast</div></div>
                </section>
            </div>
        </div>
    );
};

export default FrontpageContainer;
