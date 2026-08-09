'use client';
import React, { useState, useEffect } from 'react';
import styles from "./Skills.module.css";

const skills = [
  { title: "#COBOL", category: "technical" },
  { title: "#SQL", category: "technical" },
  { title: "#JavaScript", category: "technical" },
  { title: "#React", category: "technical" },
  { title: "#Python", category: "technical" },
  { title: "#HTML", category: "technical" },
  { title: "#CSS", category: "technical" },
  { title: "#VBA", category: "technical" },

  { title: "#Problem-solving", category: "soft" },
  { title: "#Continuous-learning", category: "soft" },
  { title: "#Adaptability", category: "soft" },

  { title: "#Git", category: "tools" },
  { title: "#Docker", category: "tools" },

  { title: "#Japanese", category: "language" },
  { title: "#English", category: "language" },
  { title: "#Estonian", category: "language" },
  { title: "#Chinese", category: "language" },
];

export default function Skills() {

    return (
        <section id = "skills" className={styles.skills}>
         <p className={styles.title}>Skills</p>
          <div className={styles.grid}>
           {skills.map((skill) => (
            <div key={skill.title}
              className={`${styles.card} ${styles[skill.category]}`}
            >
             <h3>{skill.title}</h3>
            </div>
          ))}
         </div>
         </section>
    )

}