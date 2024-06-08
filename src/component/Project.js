
import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';

const Project = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);


  const projectsData = [
    {
      title: "Electronic Medical Record application using MERN",
      description: "A web application that allows users to track their daily tasks.",
      technologies: ["React", "Redux", "CSS"],
      img: "./p1.png",
      link: "https://project-one.example.com"
    },
    {
      title: "Project Two",
      description: "An e-commerce platform with a customizable product catalog.",
      technologies: ["Next.js", "Node.js", "MongoDB"],
      img: "./p1.png",

      link: "https://project-two.example.com"
    },
    {
      title: "Project Three",
      description: "A social media application with real-time messaging.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      img: "./p1.png",

      link: "https://project-three.example.com"
    },
    {
      title: "Project Four",
      description: "A mobile app for managing personal finances and budgeting.",
      technologies: ["React Native", "Expo", "SQLite"],
      img: "./p1.png",
      link: "https://project-four.example.com"
    },
    {
      title: "Project Five",
      description: "A blogging platform with markdown support and user authentication.",
      technologies: ["Gatsby", "GraphQL", "Netlify"],
      img: "./p1.png",
      link: "https://project-five.example.com"
    },
    {
      title: "Project Six",
      description: "A portfolio website showcasing various web development projects.",
      technologies: ["HTML", "CSS", "JavaScript"],
      img: "./p1.png",
      link: "https://project-six.example.com"
    }
  ];

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
            <LazyLoad height={200} offset={100} placeholder={<div>Loading...</div>}>
              <img className="project-image" src={project.img} alt={project.title} />
            </LazyLoad>
            <h2>{project.title}</h2>
          </div>
        ))}
      </div>
      <div className='project-container'>
        <div className='container-title-second'><h1>EXPERIENCE</h1></div>
      </div>
    </div>
  );
}

export default Project;
