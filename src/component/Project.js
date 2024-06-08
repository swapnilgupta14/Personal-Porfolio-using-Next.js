import React, { useEffect, useState } from 'react';
// src/data/projectsData.js

const projectsData = [
  
  {
    title: "Geospatial-Remote-Sensing-application",
    description: "An e-commerce platform with a customizable product catalog.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    img: "./p6.webp",
    link: "https://github.com/swapnilgupta14/Geospatial-Remote-Sensing-application"
  },
  {
    title: "Electronic Medical Record application using MERN",
    description: "A web application that allows users to track their daily tasks.",
    technologies: ["React", "Redux", "CSS"],
    img: "./p1.webp",
    link: "https://github.com/swapnilgupta14/Mediblock"
  },
  {
    title: "CNN-Based-Neural-Network-based-on-ResNet50-Architecture ",
    description: "A mobile app for managing personal finances and budgeting.",
    technologies: ["React Native", "Expo", "SQLite"],
    img: "./p4.webp",
    link: "https://github.com/swapnilgupta14/CNN-Based-Neural-Network-for-the-Autonomous-Vehicle-based-on-ResNet50-Architecture"
  },
  {
    title: "Personal-Portfolio using Next.js",
    description: "A social media application with real-time messaging.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    img: "./p3.webp",
    link: "https://github.com/swapnilgupta14/next-personal-portfolio"
  },
  {
    title: "Stock Price Prediction using LSTM",
    description: "A blogging platform with markdown support and user authentication.",
    technologies: ["Gatsby", "GraphQL", "Netlify"],
    img: "./p2.webp",
    link: "https://github.com/swapnilgupta14/Stock-Growth-Prediction-Project-using-LSTM"
  },
  {
    title: "IP Address Tracker",
    description: "A portfolio website showcasing various web development projects.",
    technologies: ["HTML", "CSS", "JavaScript"],
    img: "./p5.webp",
    link: "https://github.com/swapnilgupta14/IP-Address-Tracker"
  }
];

const Project = () => {
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

    const projectCards = document.querySelectorAll('.project-card');
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
    <>
      <div className="detail-container">
        <div className='project-container'>
          <div className='container-title'><h1>PROJECTS</h1></div>
          <div className="timeline"></div>
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`project-card ${visibleProjects.includes(index.toString()) ? 'visible' : ''}`}
              data-index={index}
            >
              <div className="timeline-indicator"></div>
              <img className="project-image" src={project.img} alt="image" />
              <h2>{project.title}</h2>
            </div>
          ))}
        </div>
        <div className='project-container'>
          <div className='container-title-second'><h1>EXPERIENCE</h1></div>

        </div>
      </div>
    </>
  );
}

export default Project;
