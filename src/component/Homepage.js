import React, { useEffect, useRef } from 'react';

const Homepage = () => {

    return (
        <div className='frontpage-container'>
            <div className='left'>
                <div className='upper-left-container'>
                <div className='circle-container'></div>
                </div>
            </div>
            <div className='right'>
                <div className='right-text'>
                    <h1>Hi, I'm <span className='highlight'>Swapnil</span></h1>
                    <p>Fullstack Developer</p>
                    <p>UI/UX Designer</p>
                    <p>Graphic Designer</p>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
