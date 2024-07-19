import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Mail, Leetcode, HackerRank, DownloadIcon } from './icon/icon';
import { IndicatorIcon } from './icon/icon';
import Header from './header';


const Homepage = () => {

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

    let isMobile = false;
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
        isMobile = true;
    }

    const [isChrome, setIsChrome] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsChrome(window.navigator.userAgent.indexOf("Chrome") !== -1);
        }
    }, []);


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

    // useEffect(() => {
    //     const frontpageContainer = document.querySelector('.frontpage-container');
    //     const starsContainer = frontpageContainer.querySelector('.stars');
    //     const starsCount = isSmallScreen ? 40 : 80;
    //     const glowRadius = 100;
    //     let glowTimeout;

    //     const createStar = () => {
    //         const star = document.createElement('div');
    //         star.classList.add('star');
    //         star.style.top = `${Math.random() * 100}%`;
    //         star.style.left = `${Math.random() * 100}%`;
    //         starsContainer.appendChild(star);

    //         const moveStar = () => {
    //             const deltaX = (Math.random() * 20 - Math.random()) + 'px';
    //             const deltaY = (Math.random() * 20 - Math.random()) + 'px';
    //             star.style.transform = `translate(${deltaX}, ${deltaY})`;
    //             setTimeout(moveStar, Math.random() * 2000 + 1000);
    //         };

    //         moveStar();
    //     };

    //     for (let i = 0; i < starsCount; i++) {
    //         createStar();
    //     }

    //     const randomlyGlowStar = () => {
    //         const stars = starsContainer.querySelectorAll('.star');
    //         const randomIndex = Math.floor(Math.random() * stars.length);
    //         const randomStar = stars[randomIndex];

    //         randomStar.classList.add('glow');

    //         setTimeout(() => {
    //             randomStar.classList.remove('glow');
    //         }, 500);
    //     };

    //     const handleMouseMove = (event) => {
    //         clearTimeout(glowTimeout);
    //         const { clientX, clientY } = event;
    //         const stars = starsContainer.querySelectorAll('.star');

    //         stars.forEach(star => {
    //             const rect = star.getBoundingClientRect();
    //             const starX = rect.left + rect.width / 2;
    //             const starY = rect.top + rect.height / 2;
    //             const distance = Math.sqrt((starX - clientX) ** 2 + (starY - clientY) ** 2);

    //             if (distance < glowRadius) {
    //                 star.classList.add('glow');
    //             } else {
    //                 star.classList.remove('glow');
    //             }
    //         });

    //         glowTimeout = setTimeout(() => {
    //             stars.forEach(star => {
    //                 star.classList.remove('glow');
    //             });
    //         }, 500);
    //     };

    //     frontpageContainer.addEventListener('mousemove', handleMouseMove);
    //     const glowInterval = setInterval(randomlyGlowStar, 1500);

    //     return () => {
    //         frontpageContainer.removeEventListener('mousemove', handleMouseMove);
    //         clearInterval(glowInterval);
    //     };
    // }, []);

    return (
        <div className='home-wrapper'>
            <Header isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} scrollToSection={scrollToSection} />

            <div className="frontpage-container" id='home'>
                {/* <div className="stars"></div> */}
                <div className="container" id="otherElement">
                    <div className="name">
                        <p className="iam">hi, {isSmallScreen && <><br /></>} i am</p><br />
                        <p className={`name-color ${isChrome ? 'chrome-class' : ''}`}><p>Swapnil {isSmallScreen && <><br /></>} Gupta</p></p>
                        <p className="detail">A front-end developer passionate about building accessible <br /> and user friendly websites.</p>
                    </div>
                    <div className="button-wrapper">
                        <button className="download-button comic-neue-bolder ">Get in touch</button>
                        <button className="download-button other comic-neue-bolder ">
                            Download CV
                        </button>
                        <buttona className="icon" style={{ marginBottom: "-7px" }}><Linkedin width={35} height={35} /></buttona>
                        <button className="icon"><Github width={35} height={35} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
