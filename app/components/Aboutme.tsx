'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Aboutme.module.css';

export default function Aboutme() {
 return(
<section id="about" className={styles.aboutme}>
    
  <p className={styles.title}>About me</p>

  <p className={styles.text}>
    I'm a software developer from Japan with experience in business system development.
    <br />
    For four years, I worked on enterprise systems.
  </p>
  <p className={styles.title}>Career</p>

<div className={styles.timeline}>

  <div className={styles.item}>
    <p className={styles.year}>2022 - 2026</p>

    <div className={styles.content}>
      <h3>Software Engineer</h3>
      <p>Developed enterprise systems.</p>
    </div>
  </div>

  <div className={styles.item}>
    <p className={styles.year}>2026</p>

    <div className={styles.content}>
      <h3>Moved to Estonia</h3>
      <p>Started my Working Holiday.</p>
    </div>
  </div>

</div>
  <p className={styles.title}>Strongth</p>

  <p className={styles.text}>
   problem solving
  </p>

</section>
 )
}