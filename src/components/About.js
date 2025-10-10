import React from 'react';
import styles from './About.module.css';
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <div>
      <main>
        <section className={styles.section}>
          <h1 className={styles.heading}>About <span>Me</span></h1>

          <div className={`container ${styles.about}`}>
  <div className="row align-items-center g-0">
    {/* Image Column */}
    <div className="col-12 col-md-6 text-center">
      <img
        className={styles.profileimg}
        src="/owais.png"
        alt="error"
      />
    </div>

    {/* Text Column */}
    <div className={`col-12 col-md-4 mt-4 mt-md-0 ${styles.right}`}>
      <p>
        I am Muhammad Owais, a passionate full-stack developer specializing in
        building exceptional digital experiences. With a focus on React.js and
        Next.js, I create high-performance web applications that combine
        beautiful design with powerful functionality.
      </p>
      <p>
        My approach combines technical expertise with creative problem-solving
        to deliver solutions that not only meet but exceed client expectations.
        I believe in clean code, responsive design, and user-centric
        development.
      </p>

      <h4 className="mt-5 text-dark">My Experties</h4>
      <div className={styles.experties}>
        <button className={styles.btn}>React.Js</button>
        <button className={styles.btn}>Bootstrap</button>
        <button className={styles.btn}>PHP</button>
        <button className={styles.btn}>MYSQL</button>
        <button className={styles.btn}>Laravel</button>
        <button className={styles.btn}>UI/UX Designer</button>
      </div>
      <button className={`mt-5 ${styles.more}`}>
        Learn More <MdArrowOutward />
      </button>
    </div>
  </div>
</div>
        </section>
      </main>
    </div>
  )
}

export default About
