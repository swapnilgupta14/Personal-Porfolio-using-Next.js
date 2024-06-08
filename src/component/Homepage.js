import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Linkedin, Github, Mail, Leetcode, HackerRank } from './icon/icon';

const FrontpageContainer = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="frontpage-container">
            <div className="container">
                <div className="text">
                    <div className="name name-float">
                        Hello, {isSmallScreen && <><br /></>} I'm <br />
                        <span className="name-color">Swapnil {isSmallScreen && <><br /></>} Gupta</span>
                       
                    </div>
                </div>
                <section className="animation animationOnLoad">
                    <div className="first"><div>Full Stack Developer</div></div>
                    <div className="second"><div>UI/UXDesigner</div></div>
                    <div className="third"><div>Web3 Enthusiast</div></div>
                </section>
                <div className='social-nav-container'>
                        <div className="social-nav">
                            <a className="icon" href="#"><Leetcode/></a>
                            <a  className="icon"  href="#"><Github /></a>
                            <a className="icon"  href="#"><HackerRank/></a>
                            <a  className="icon"  href="#"><Linkedin/></a>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default FrontpageContainer;
