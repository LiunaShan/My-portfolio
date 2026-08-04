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

</section>
 )
}