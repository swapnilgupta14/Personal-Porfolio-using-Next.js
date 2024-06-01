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
                    <h1>Hi! I'm Swapnil </h1>
                    <div>
                        <h2>About Me</h2>
                        <p>Born & brought up in Kanpur, Uttar Pradesh, I completed my schooling there.
                            I have completing my under-graduation from PSIT, Kanpur. Apart from academics,
                            my interests lie in building scalable applications - frontend & backend, UI/UX,
                            Graphic designing.
                        </p>
                    </div>
                    <div>
                        <ul className="social-nav">
                            <li><a href="https://www.facebook.com/rishabh.gupta.9083477" ></a></li>
                            <li><a href="https://github.com/rishotics"></a></li>
                            <li><a href="https://www.youtube.com/user/rishabhgupta05" target="_blank"></a></li>
                            <li><a href="https://www.linkedin.com/in/rishotics"></a></li>
                        </ul>
                    </div>
                    <div>
                        <div className='button-container'>
                            <button className='buttons'>Download CV</button>
                            <button className='buttons'>Mail Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
