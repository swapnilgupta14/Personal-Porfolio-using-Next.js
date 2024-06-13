import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Mail, Leetcode, HackerRank, DownloadIcon } from './icon/icon';
import { IndicatorIcon } from './icon/icon';

const Homepage = () => {

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    let isMobile = false;
    if(typeof window !== "undefined" && window.innerWidth <= 768){
        isMobile = true;
    }


    const handleButtonClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
            setIsHovered(false);
            setTimeout(() => {
                const link = document.createElement('a');
                link.href = 'https://drive.google.com/file/d/10Aq7BljScKLy-G8FTlHwjYk874xG7YOL/view?usp=sharing';
                link.target = '_blank';
                link.download = 'swapnil_gupta.pdf';
                link.click();
                setIsSuccess(false);
            }, 2000);
        }, 2000);
    };


    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const frontpageContainer = document.querySelector('.frontpage-container');
        const starsContainer = frontpageContainer.querySelector('.stars');
        const starsCount = isSmallScreen ? 60 : 120;
        const glowRadius = 100;
        let glowTimeout;

        const createStar = () => {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            starsContainer.appendChild(star);

            const moveStar = () => {
                const deltaX = (Math.random() * 20 - Math.random()) + 'px';
                const deltaY = (Math.random() * 20 - Math.random()) + 'px';
                star.style.transform = `translate(${deltaX}, ${deltaY})`;
                setTimeout(moveStar, Math.random() * 2000 + 1000);
            };

            moveStar();
        };

        for (let i = 0; i < starsCount; i++) {
            createStar();
        }

        const randomlyGlowStar = () => {
            const stars = starsContainer.querySelectorAll('.star');
            const randomIndex = Math.floor(Math.random() * stars.length);
            const randomStar = stars[randomIndex];

            randomStar.classList.add('glow');

            setTimeout(() => {
                randomStar.classList.remove('glow');
            }, 500);
        };

        const handleMouseMove = (event) => {
            clearTimeout(glowTimeout);
            const { clientX, clientY } = event;
            const stars = starsContainer.querySelectorAll('.star');

            stars.forEach(star => {
                const rect = star.getBoundingClientRect();
                const starX = rect.left + rect.width / 2;
                const starY = rect.top + rect.height / 2;
                const distance = Math.sqrt((starX - clientX) ** 2 + (starY - clientY) ** 2);

                if (distance < glowRadius) {
                    star.classList.add('glow');
                } else {
                    star.classList.remove('glow');
                }
            });

            glowTimeout = setTimeout(() => {
                stars.forEach(star => {
                    star.classList.remove('glow');
                });
            }, 500);
        };

        frontpageContainer.addEventListener('mousemove', handleMouseMove);
        const glowInterval = setInterval(randomlyGlowStar, 1500);

        return () => {
            frontpageContainer.removeEventListener('mousemove', handleMouseMove);
            clearInterval(glowInterval);
        };
    }, []);

    return (
        <div className="frontpage-container" id='home'>
            <div className="stars"></div>
            <div className="container" id="otherElement">
                <div className="text">
                    <div className="name name-float">
                        <span className='color-diff2'>Hello, </span>{isSmallScreen && <><br /></>} <span className='color-diff'>I'm</span><br />
                        <span className="name-color">Swapnil {isSmallScreen && <><br /></>} Gupta</span>
                    </div>
                </div>
                <section className="animation animationOnLoad">
                    <div className="first"><div>Web Developer</div></div>
                    <div className="second"><div>Full Stack Developer</div></div>
                    <div className="third"><div>Web3 Enthusiast</div></div>
                </section>
                <div className='social-nav-container'>
                    <div className="social-nav">
                        <a className="icon" href="https://www.linkedin.com/in/swapnilgupta-ln/"><Linkedin /></a>
                        <a className="icon" href="https://github.com/swapnilgupta14"><Github /></a>
                        <a className="icon" href="#"><Leetcode /></a>
                        <a className="icon" href="https://www.hackerrank.com/dashboard"><HackerRank /></a>
                    </div>
                </div>
                <div className='button-wrapper' onClick={handleButtonClick}>
                    {isLoading ? (
                        <div className='loading-bar'>
                            <div className='loading-bar-progress'></div>
                        </div>
                    ) : (
                        <button
                            className='button'
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {!isHovered && <span className='text-1'>Check Out my Resume</span>}
                          {!isMobile ? (isHovered && <span className='icon-1'><DownloadIcon width={20} height={20} /></span>) : null}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Homepage;
