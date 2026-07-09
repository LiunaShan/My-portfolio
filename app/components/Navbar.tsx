'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
 return(
    <nav className={styles.nav}>
      <div className={styles.container}>
          <a href="/">Luna's Portfolio</a>
        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
 )
}