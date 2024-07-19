import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image"; // Import the Next.js Image component
import { HorArrow, Tray } from "./icon/icon";

import {
  CIcon,
  // TypeScriptIcon,
  ExpressIcon,
  NodeJSIcon,
  PostmanIcon,
  // DartIcon,
  // FlutterIcon,
  // ReactNativeIcon,
  HTMLIcon,
  CSSIcon,
  // BootstrapIcon,
  ReduxIcon,
  SassIcon,
  JavaScriptIcon,
  TailwindCSSIcon,
  ReactIcon,
  MySQLIcon,
  MongoDBIcon,
  // HerokuIcon,
  GitIcon,
  FirebaseIcon,
  Github,
} from "./icon/icon";
import Link from "next/link";
// src/data/projectsData.js

const experienceData = [
  {
    companyTitle: "Wyvate Tech Services Pvt. Ltd.",
    img: "",
    detail: [
      {
        jobTitle: "Web Developer Intern",
        description: "",
        technologies: [],
        link: "",
        duration: { from: "12/2023", to: "Present" },
      },
      {
        jobTitle: "Student Intern",
        description: "",
        technologies: [],
        link: "",
        duration: { from: "09/2023", to: "12/2023" },
      },
    ],
  },
  {
    companyTitle: "Euphelity Pvt. Ltd.",
    img: "",
    detail: [
      {
        jobTitle: "Graphic Designer Intern",
        description:
          "Worked on the The Special School Project to design mind maps fro their students.",
        technologies: [],
        link: "",
        duration: { from: "06/2023", to: "09/2023" },
      },
    ],
  },
];

const icons = [
  { Component: CIcon, label: "C Language" },
  { Component: JavaScriptIcon, label: "JavaScript" },
  { Component: MySQLIcon, label: "MySQL" },
  // { Component: TypeScriptIcon, label: 'TypeScript' },
  // { Component: DartIcon, label: 'Dart' },
  // { Component: FlutterIcon, label: 'Flutter' },
  // { Component: ReactNativeIcon, label: 'React Native' },
  { Component: ReactIcon, label: "React" },
  { Component: ReduxIcon, label: "Redux" },
  { Component: NodeJSIcon, label: 'NodeJS' },
  { Component: ExpressIcon, label: 'Express' },
  { Component: HTMLIcon, label: "HTML" },
  { Component: CSSIcon, label: "CSS" },
  { Component: SassIcon, label: "Sass" },
  { Component: TailwindCSSIcon, label: "Tailwind CSS" },
  // { Component: BootstrapIcon, label: 'Bootstrap' },
  { Component: PostmanIcon, label: "Postman" },
  // { Component: HerokuIcon, label: 'Heroku' },
  { Component: GitIcon, label: "Git" },
  { Component: MongoDBIcon, label: "MongoDB" },
  { Component: FirebaseIcon, label: "Firebase" },
];

const Experience = () => {
  const cardRefs = useRef([]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 768);
    });
  }, []);

  return (
    <div className="detail-container">
      <div className="container-title" id="experience">
        <h2>Experience</h2>
        <p>A detailed overview of my career path, highlighting key positions, responsibilities, and skills.</p>
        </div>
      <div className="experience-container">
        <div className="skill-container">
          <h4 className="experience-sub-container">Skill I have Acquired - </h4>

          <div className="wrapper">
            {icons.map(({ Component, label }, index) => (
              <div key={index} className={`icon-container`}>
                <Component />
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="companies-container">
          <h4 className="experience-sub-container">Work Experience</h4>
          <div className="wrapper">
            {experienceData.map((experience, index) => (
              <div key={index} className={`experience-card`} data-index={index}>
                <h3 className="company-title">{experience.companyTitle}</h3>
                {experience.img && (
                  <img
                    className="company-image"
                    src={experience.img}
                    alt="image"
                  />
                )}
                <div className="experience-details">
                  {experience.detail.map((detail, detailIndex) => (
                    <div key={detailIndex} className="job-detail">
                      <div className="line"></div>
                      <div className="content">
                        <h4 className="job-title">{detail.jobTitle}</h4>
                        <p className="duration">{`${detail.duration.from} - ${detail.duration.to}`}</p>

                        <p className="description">{detail.description}</p>

                        <div className="technologies">
                          {detail.technologies.map(
                            (technology, technologyIndex) => (
                              <span
                                key={technologyIndex}
                                className="technology"
                              >
                                {technology}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
