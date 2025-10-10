import React from 'react'
import styles from './Home.module.css';
import { MdArrowOutward } from "react-icons/md";
import About from './About';

const Home = () => {
  return (
    <div>
<main >
  <section className={styles.body}>
  <div className={`${styles.hero}`}>
      I develop premium <span >Custom Web</span> <span>Applications</span>
    </div>
    <div>
   <p>High-performance React.js and PHP web applications, crafted with precision and passion.</p>
  </div>
  <button type="button" className={`btn-lg py-2 px-4 ${styles.herobutton}`}>Book a Consultation <MdArrowOutward /></button>
  </section></main>
    </div>
  
  )
}

export default Home
