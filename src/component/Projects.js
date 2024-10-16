import React, { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  const projectsData = [
    {
      title: "CompileX - An Online Coding Platform",
      description: "A Coding Platform to Practice Problems, Compete in Battles",
      technologies: ["NEXT.js", "Tailwind CSS", "SCSS", "TypeScript", "AWS Lambda", "Django"],
      img: "/p0.png",
      link: "https://github.com/swapnilgupta14/CompileX-An-Online-Coding-Platform",
      demo: "https://code-editor-wine-kappa.vercel.app/",
    },
    {
      title:
        "GrabNGoods: An E-commerce web application",
      description:
        "A comprehensive e-commerce platform designed for a startup, featuring a scalable, component-based architecture with React.js and Redux Toolkit.",
      technologies: ["React", "Redux", "CSS", "Tailwind"],
      img: "/p.png",
      link: "https://github.com/swapnilgupta14/GrabNGoods-E-commerce-web-application",
      demo: "https://grab-n-goods-e-commerce-web-application.vercel.app/",
    },
    {
      title: "Cricify: Cricket Coverage & Tournament Organiser Web Application",
      description: "a Tournament Organizer App built with React, Vite, and Tailwind CSS. The app allows users to create tournaments, manage teams, schedule matches, and review tournament details with a clean and responsive UI.",
      technologies: ["NEXT.js", "Redux-Toolkit", "TypeScriptIcon", "Tailwind"],
      img: "/p_1.png",
      link: "https://github.com/swapnilgupta14/Cricify-Cricket-Tournament-Organiser",
      demo: "https://cricify.vercel.app/",
    },
    {
      title: "ChalkSlate - Real-Time Collaborative Whiteboard Canvas with Recording Features",
      description: "Developed an interactive drawing application, leveraging Rough.js and perfect-freehand for rendering hand-drawn style graphics and real-time user interactions on the canvas",
      technologies: ["NEXT.js", "Redux-Toolkit", "Roughjs", "Socket.io", "Radix UI", "Tailwind CSS"],
      img: "/p6.webp",
      link: "https://github.com/swapnilgupta14/ChalkPad-An-interactive-whiteboard",
      demo: "https://chalkpad-web.vercel.app/",
    },
    {
      title: "CNN-Based-Neural-Network-based-on-ResNet50-Architecture ",
      description: "A machine learning model tuned specifically to control the steering angle of an autonomous vehicle.",
      technologies: ["Python", "ResNet50", "Udacity Simulator"],
      img: "/p4.webp",
      link: "https://github.com/swapnilgupta14/CNN-Based-Neural-Network-for-the-Autonomous-Vehicle-based-on-ResNet50-Architecture",
      demo: "https://github.com/swapnilgupta14/CNN-Based-Neural-Network-for-the-Autonomous-Vehicle-based-on-ResNet50-Architecture",
    },
    {
      title: "IP Address Tracker using HTML, CSS, JavaScript",
      description:
        "A portfolio website showcasing various web development projects.",
      technologies: ["HTML", "CSS", "JavaScript"],
      img: "/p5.webp",
      link: "https://github.com/swapnilgupta14/IP-Address-Tracker",
      demo: "https://swapnilgupta14.github.io/IP-Address-Tracker/",
    },
    {
      title:
        "Fully responsive personal-portfolio using Next.js & Sass with custom animations, build from scratch.",
      description: "A social media application with real-time messaging.",
      technologies: ["Next.js", "SASS", "HTML"],
      img: "/p31.webp",
      link: "https://github.com/swapnilgupta14/next-personal-portfolio",
      demo: "#",
    },
    // {
    //   title: "Stock Price Prediction using LSTM.",
    //   description:
    //     "A blogging platform with markdown support and user authentication.",
    //   technologies: ["Gatsby", "GraphQL", "Netlify"],
    //   img: "/p2.webp",
    //   link: "https://github.com/swapnilgupta14/Stock-Growth-Prediction-Project-using-LSTM",
    //   demo: "https://github.com/swapnilgupta14/Stock-Growth-Prediction-Project-using-LSTM",
    // },
    // {
    //   title: "Geospatial-Remote-Sensing-application - In Developement",
    //   description: "An e-commerce platform with a customizable product catalog.",
    //   technologies: ["Next.js", "Node.js", "MongoDB"],
    //   img: "/p1 (2).webp",
    //   link: "https://github.com/swapnilgupta14/Geospatial-Remote-Sensing-application",
    //   demo: "#",
    // },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log("about");
        if (entry.isIntersecting) {
          entry.target.classList.add('cardShow');
        } else {
          entry.target.classList.remove('cardShow');
        }
      });
    });

    const elements = document.querySelectorAll(".projectHidden");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const projectContainer = document.querySelector('.projects-container');
    const handleScroll = () => {
      let offsetTop = projectContainer.parentElement.offsetTop;
      let projectHeight = window.innerHeight;
      let totalHeight = projectHeight * projectsData.length;
      let percentage = ((window.scrollY - offsetTop) / totalHeight) * 100;
      percentage = Math.max(0, Math.min(percentage, 100 * (projectsData.length - 1) / projectsData.length));
      projectContainer.style.transform = `translate3D(${-(percentage * projectsData.length)}vw, 0, 0)`;

      if(isMobile){
        projectContainer.style.transform = `translate3D(0, 0, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [projectsData]);

  return (
    (true && (<div className='project-wrapper'>
      <div className="container-title " id="projects">
        <h2>Projects</h2>
        <p>Explore a selection of innovative projects demonstrating a blend of creativity and technical expertise.</p>
      </div>
      <div className='outer'>
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <div className="project " key={index} style={{ '--projects-count': projectsData.length }}>
              <div className='helper-div'>
                <img src={project.img} alt={project.title} />
                <div className='project-text'>
                  <div className='main-text projectHidden'>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p>{project.technologies.join(', ')}</p>
                  </div>
                  <div className='link-text'>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>))
  );
};

export default Projects;