'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Aboutme.module.css';

export default function Aboutme() {
 return(
<section id="about" className={styles.aboutme}>
    
  <p className={styles.title}>About me</p>

  <p className={styles.text}>
    I'm a software engineer from Japan with four years of experience in enterprise system development.
    <br></br>
    <br></br>I worked on a large-scale financial accounting system used by approximately 20,000 users and supporting services affecting 13 million residents in Tokyo. 
    <br></br>
    <br></br>Now based in Estonia, I'm building an international career while expanding my technical skills and working across different cultures.
    <br></br>
  </p>
  <p className={styles.title}>Background</p>

<div className={styles.timeline}>
  <div className={styles.item}>
    <p className={styles.year}>2018 - 2022</p>

    <div className={styles.content}>
      <h3>Gunma University</h3>
      <p>Bachelor's Degree in Social Informatics</p>
      <p>Developed interest in how tech connects people's life</p>
    </div>
  </div>

  <div className={styles.item}>
    <p className={styles.year}>2019</p>

    <div className={styles.content}>
      <h3>Exchange Program</h3>
      <p>National Taipei University of Education</p>
      <p>Gained a broader perspective through international experiences.</p>
    </div>
  </div>

    <div className={styles.item}>
    <p className={styles.year}>2022 - 2026</p>

    <div className={styles.content}>
      <h3>Software Engineer</h3>
      <p>Participated in various phases of the SDLC,</p>
      <p>including development, testing, and maintenance.</p>
    </div>
  </div>

  <div className={styles.item}>
    <p className={styles.year}>2026</p>

    <div className={styles.content}>
      <h3>Moved to Estonia</h3>
      <p>Building an international career</p>
      <p>Learning Estonian culture and language</p>
    </div>
  </div>
</div>

<p className={styles.title}>Key Strengths</p>
<div className={styles.strengths}>

  <div className={styles.strength}>
    <h3>Problem-solving</h3>
    <p>Stay calm under pressure and find practical solutions.</p>
  </div>

  <div className={styles.strength}>
    <h3>Continuous Learning</h3>
    <p>Continuously learn new skills and adapt them to real-world situations.</p>
  </div>

  <div className={styles.strength}>
    <h3>Adaptability</h3>
    <p>Adapt quickly to new environments, tools, and ways of working.</p>
  </div>
</div>
</section>
 )
}