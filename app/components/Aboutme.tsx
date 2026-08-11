'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Aboutme.module.css';

export default function Aboutme() {
 return(
<section id="about" className={styles.aboutme}>
    
  <p className={styles.title}>About me</p>

  <p className={styles.text}>
    <strong>Tere!{'\u00A0'}{'\u00A0'}Ma olen Luna Yamazawa Jaapanist.</strong> <br></br> <br></br>
    I worked on a large-scale financial accounting system in Tokyo, supporting services that affect around <strong >13 million </strong>residents. <br></br> <br></br>
    I had a stable career in Japan, but I chose to leave it behind because I had a strong interest in Estonia — especially its e-government, language, and culture. <br></br> <br></br>
    I wanted to live here, work here, and understand this country through real experience. <br></br> <br></br>
    Now, I’m looking for an opportunity to bring my four years of software development experience to an Estonian company, contribute what I can, and continue growing in a new environment.

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

{/*<p className={styles.title}>Key Strengths</p>
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
</div>*/}
</section>
 )
}