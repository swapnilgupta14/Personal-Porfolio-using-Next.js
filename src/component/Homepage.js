import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Mail, Leetcode, HackerRank } from './icon/icon';

const Homepage = () => {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

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
        const starsCount = 150; 
        const glowRadius = 100; 
        const createStar = () => {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            starsContainer.appendChild(star);

            const moveStar = () => {
                const deltaX = (Math.random() * 20 - 10) + 'px';
                const deltaY = (Math.random() * 20 - 10) + 'px';
                star.style.transform = `translate(${deltaX}, ${deltaY})`;
                setTimeout(moveStar, Math.random() * 2000 + 1000);
            };

            moveStar();
        };

        for (let i = 0; i < starsCount; i++) {
            createStar();
        }

        const handleMouseMove = (event) => {
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
        };

        frontpageContainer.addEventListener('mousemove', handleMouseMove);

        return () => {
            frontpageContainer.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="frontpage-container">
            <div className="stars"></div>
            <div className="container" id="otherElement">
                <div className="text">
                    <div className="name name-float">
                        Hello, {isSmallScreen && <><br /></>} I'm <br />
                        <span className="name-color">Swapnil {isSmallScreen && <><br /></>} Gupta</span>
                    </div>
                </div>
                <section className="animation animationOnLoad">
                    <div className="first"><div>Full Stack Developer</div></div>
                    <div className="second"><div>UI/UX Designer</div></div>
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
            </div>
        </div>
    );
};

export default Homepage;
