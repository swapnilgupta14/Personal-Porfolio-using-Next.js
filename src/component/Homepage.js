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

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('homeShow');
                } else {
                    entry.target.classList.remove("homeShow");
                }
            });
        });
        
        const intscnOBJ = document.querySelectorAll(".prjHome");
        intscnOBJ.forEach((e) => observer.observe(e));
    }, []);


    return (
        <div className='home-wrapper'>
            <Header isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} scrollToSection={scrollToSection} />

            <div className="frontpage-container" id='home'>
                {/* <div className="stars"></div> */}
                <div className="container" id="otherElement">
                    <div className="name">
                        <p className="iam prjHome">hi, {isSmallScreen && <><br /></>} i am</p><br />
                        <p className={`name-color ${isChrome ? 'chrome-class' : ''} prjHome`}><p>Swapnil {isSmallScreen && <><br /></>} Gupta</p></p>
                        <p className="detail prjHome">A front-end developer passionate about building accessible <br /> and user friendly websites.</p>
                    </div>
                    <div className="button-wrapper">
                        <button className="download-button comic-neue-bolder prjHome">Get in touch</button>
                        <button className="download-button other comic-neue-bolder prjHome ">
                            Download CV
                        </button>
                        <button className="icon" style={{ marginBottom: "-7px" }}><Linkedin width={35} height={35} /></button>
                        <button className="icon"><Github width={35} height={35} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
