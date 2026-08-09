'use client';
import React, { useState, useEffect } from 'react';
import styles from "./Projects.module.css";

type Project = {
  image: string;
  title: string;
  description: string;
  details: string;
};

const projects = [
  {
    image: "/images/fumrin-tokyo-4382950.jpg",
    title: "Financial Accounting System",
    description:
      "Professional experience in developing and maintaining accounting systems for municipalities.",
    details:
      "Software Engineer | 2022–2026\nResponsibilities: Development, testing, maintenance, and SQL-based data handling.\nTechnologies: COBOL, SQL, JavaScript, VBA, C.",
  },
  {
    image: "/images/mohamed_hassan-programmer-3607627.svg",
    title: "My portfolio",
    description:
      "Designed and developed a personal portfolio website to showcase my experience and skills.",
  details:
    "Designed and developed this portfolio using Next.js and React.\nFocus: Component-based development, responsive design, interactive UI, and personal branding.\nTechnologies: Next.js, React, TypeScript, CSS.",
  }
];

export default function Projects() {

const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    return (
        <section id = "projects" className={styles.projects}>
         <h2 className={styles.title}>Projects</h2>
          <div className={styles.grid}>
           {projects.map((project) => (
            <div className={styles.card} key={project.title} onClick={() => setSelectedProject(project)}>
            <div className={styles.imageWrapper}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.image}
            />
            </div>
               <h3>{project.title}</h3>
               <p>{project.description}</p>
           </div>
          ))}
         </div>
          {selectedProject && (
           <div className={styles.overlay} onClick={() => setSelectedProject(null)}>
           <div className={styles.modal}>
            <h2>{selectedProject.title}</h2>
             <p>{selectedProject.details}</p>
             <button className={styles.button} onClick={() => setSelectedProject(null)}>Back</button>
            </div>
          </div>
          )}
       </section>
    )

}