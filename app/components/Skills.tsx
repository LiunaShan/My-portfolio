'use client';
import React, { useState, useEffect } from 'react';
import styles from "./Skills.module.css";

const skills = [
  {
    icon: "🏢",
    title: "Municipal Accounting System",
  },
  {
    icon: "💻",
    title: "Todo Application",
  },
  {
    icon: "🏢",
    title: "Municipal Accounting System2",
  },
  {
    icon: "💻",
    title: "Todo Application3",
  },
    {
    icon: "💻",
    title: "Todo Application4",
  },
    {
    icon: "💻",
    title: "Todo Application5",
  }
];

export default function Skills() {

    return (
        <section className={styles.projects}>
         <p className={styles.title}>Skills</p>
          <div className={styles.grid}>
           {skills.map((skill) => (
            <div className={styles.card} key={skill.title}>
              <div className={styles.icon}>{skill.icon}</div>
               <h3>{skill.title}</h3>
           </div>
          ))}
         </div>
         </section>
    )

}