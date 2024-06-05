import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, Github, Mail, Leetcode, HackerRank } from './icon/icon';
import Link from 'next/link';
const Homepage = () => {

    const [visibleProjects, setVisibleProjects] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleProjects((prevVisibleProjects) => [
                            ...prevVisibleProjects,
                            entry.target.dataset.index
                        ]);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1
            }
        );

        const projectCards = document.querySelectorAll('.left .right');
        projectCards.forEach((card) => {
            observer.observe(card);
        });

        return () => {
            projectCards.forEach((card) => {
                observer.unobserve(card);
            });
        };
    }, []);

    return (
        <div className='frontpage-container'>
            <div key={1} className={`left ${visibleProjects.includes(1) ? 'visible' : ''}`}>
                <div className='upper-left-container'>
                    <img src='./IMG_1.jpg' className='profile profile-mobile' />
                </div>
            </div>
            <div key={2} className={`right ${visibleProjects.includes(2) ? 'visible' : ''}`}>
                <div className='right-text'>
                    <h1 className='caveat-cursive-regular'>Hi! I'm Swapnil Gupta</h1>
                    <div>
                    </div>
                    <div className='social-nav-container'>
                        <div className="social-nav">
                            <a className="icon" href="#"><Leetcode /></a>
                            <a className="icon" href="#"><Github /></a>
                            <a className="icon" href="#"><HackerRank /></a>
                            <a className="icon" href="#"><Linkedin /></a>
                        </div>
                    </div>
                    <div>
                        <div className='button-container'>
                            <button className='buttons'><p>Resume</p></button>
                            <button className='buttons'><p>Contact</p></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
