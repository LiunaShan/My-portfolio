'use client';
import React, { useState, useEffect } from 'react';
import styles from "./Projects.module.css";

type Project = {
  icon: string;
  title: string;
  description: string;
  details: string;
};

const projects = [
  {
    icon: "🏢",
    title: "Municipal Accounting System",
    description:
      "Developed and maintained accounting systems for municipalities.",
    details:
      "details",
  },
  {
    icon: "💻",
    title: "Todo Application",
    description:
      "Built a full-stack Todo application using Django and React.",
    details:
      "details",
  },
  {
    icon: "🏢",
    title: "Municipal Accounting System2",
    description:
      "Developed and maintained accounting systems for municipalities.",
    details:
      "details",
  },
  {
    icon: "💻",
    title: "Todo Application3",
    description:
      "Built a full-stack Todo application using Django and React.",
    details:
      "details",
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
              <div className={styles.icon}>{project.icon}</div>
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