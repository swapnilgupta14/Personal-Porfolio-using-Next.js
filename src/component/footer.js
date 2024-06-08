import React from 'react';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='bottom-text'>
                <p>Made by Swapnil Gupta</p>
                <p>&copy; {new Date().getFullYear()} Swapnil Gupta. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
