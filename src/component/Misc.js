import React, { useEffect, useState } from 'react';

const Misc = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="misc-container ">
            <div className='inner'>
                <h2>I'd love to hear from you! Whether you have a question, a collaboration idea, or just want to connect, feel free to reach out.</h2>
                <div className='buttons'>
                    <button >But Me a Cofee</button>
                    <button>Contact Me</button>
                </div>
            </div>
        </div>
    );
};

export default Misc;
