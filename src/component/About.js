import React from 'react';
import Image from 'next/image';

const About = () => {

    const data = [
        { number: '6+', text: 'Projects' },
        { number: '600+', text: 'Solved Problems' },
        { number: '15+', text: 'CourseWorks' },
        { number: '2+', text: 'Experience Count' },
    ];

    return (
        <>
            {/* <div className="wrapper-anime">
                <div className="animation animationOnLoad">
                    <div className="first"><div>Web Developer</div></div>
                    <div className="second"><div>Full Stack Developer</div></div>
                    <div className="third"><div>Web3 Enthusiast</div></div>
                </div>
            </div> */}
            <div className="aboutWrapper">
                <div className="left">
                    <div className="inside-div">
                        {data.map((item, index) => (
                            <div key={index} className="item">
                                <h2>{item.number}</h2>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="right">
                    <div className="profileImage">
                        <Image src="/profile-pic.png" alt="profile" width={300} height={300} />
                    </div>
                    {/* <h2 className="name">SWAPNIL GUPTA</h2> */}
                </div>
            </div>
        </>
    );
};

export default About;
