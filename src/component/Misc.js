import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const Misc = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // No need for email sending logic here
        console.log('Form submitted:', formData);

        setFormData({ name: '', email: '', message: '' }); // Reset form after submission
    };


    return (
        <div className="misc-container">
            <div className="container-title" id='publication'>
                <h2>PUBLICATION</h2>
            </div>
            <div className="publications">
                <img src="./wiley.svg" alt="Publication Image" className="publication-image" />
                <div className="publication">
                    <div className="publication-details">
                        <h4>Decentralized Systems and Distributed Computing, Scrivener Publishing, Wiley </h4>

                        <span className="publication-date"><span>Mar 2023 - July 2023</span></span>
                        <p><strong>Chapter Title:</strong> Introduction to Next-Generation Internet and Distributed Systems.</p>
                        <ul>
                            <li>Analyzed diverse distributed system architectures: client-server, p2p, microservices, focusing on scalability and fault tolerance.</li>
                            <li>SDN, its architecture, network virtualization, and programmable control plane for dynamic control.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container-title" id='contact'>
                <h2>Contact Me</h2>
            </div>
            <div className="contact-container">
                <div className="contact-me">
                    <h4 className="experience-sub-container">Fill the Form</h4>
                    <form className="contact-form" onSubmit={handleSubmit} action="https://formspree.io/your_formspree_email_address" method="POST">
                        <div className="form-group">
                            <label className='name' htmlFor="name">Name: <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} /></label>
                            <label className='email' htmlFor="email">Email: <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} /></label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:<input id="message" name="message" rows="5" required value={formData.message} onChange={handleChange} ></input>
                            </label>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
                <div className="buy">
                    <h4 className="experience-sub-container" id='buy-cofee'>Buy Me a Cofee - </h4>
                    <div className='buy-container'>
                        <img src="./bmc_qr.png" alt="Buy Me a Coffee" />
                        <p>https://buymeacoffee.com/14guptaswapnil</p>
                        <button>Copy to clipboard</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Misc;