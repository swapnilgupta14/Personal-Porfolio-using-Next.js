import React from 'react';
import Image from 'next/image';

const About = () => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if(entry.isIntersecting){
                entry.target.classList.add('prjShow');
            }else{
                entry.target.classList.remove("prjShow");
            }
        });
    });

    const intscnOBJ =  document.querySelectorAll(".prjAnime");
    intscnOBJ.forEach((e) => observer.observe(e));

    const data = [
        { number: '8+', text: 'Projects' },
        { number: '600+', text: 'Solved DSA Problems' },
        { number: '15+', text: 'CourseWorks' },
        { number: '1yr', text: 'Experience Count' },
    ];

    return (
        <>
            <div className="aboutWrapper ">
                <div className="left">
                    <div className="inside-div">
                        {data.map((item, index) => (
                            <div key={index} className="item prjAnime">
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
