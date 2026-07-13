'use client';
import React, { useState, useEffect } from 'react';
import styles from "./Projects.module.css";

const projects = [
  {
    icon: "🏢",
    title: "Municipal Accounting System",
    description:
      "Developed and maintained accounting systems for municipalities.",
  },
  {
    icon: "💻",
    title: "Todo Application",
    description:
      "Built a full-stack Todo application using Django and React.",
  },
  {
    icon: "🏢",
    title: "Municipal Accounting System2",
    description:
      "Developed and maintained accounting systems for municipalities.",
  },
  {
    icon: "💻",
    title: "Todo Application3",
    description:
      "Built a full-stack Todo application using Django and React.",
  }
];

export default function Projects() {

    return (
        <section className={styles.projects}>
         <p className={styles.title}>Projects</p>
          <div className={styles.grid}>
           {projects.map((project) => (
            <div className={styles.card} key={project.title}>
              <div className={styles.icon}>{project.icon}</div>
               <h3>{project.title}</h3>
               <p>{project.description}</p>
           </div>
          ))}
         </div>
         </section>
    )

}