import React, { useEffect, useRef } from 'react';
import { Linkedin, Github, Mail, Leetcode, HackerRank } from './icon/icon';
import Link from 'next/link';
const Homepage = () => {

    return (
        <div className='frontpage-container'>
            <div className='left'>
                <div className='upper-left-container'>
                    <img src='./IMG_1.jpg' className='profile profile-mobile'/>
                </div>
            </div>
            <div className='right'>
                <div className='right-text'>
                    <h1 className='caveat-cursive-regular'>Hi! I'm Swapnil Gupta</h1>
                    <div>
                    </div>
                    <div className='social-nav-container'>
                        <div className="social-nav">
                            <a className="icon" href="#"><Leetcode/></a>
                            <a  className="icon"  href="#"><Github /></a>
                            <a className="icon"  href="#"><HackerRank/></a>
                            <a  className="icon"  href="#"><Linkedin/></a>
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
