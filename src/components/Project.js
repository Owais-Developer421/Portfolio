import React from 'react'
import { PiBracketsAngleBold } from "react-icons/pi";
import { IoLogoFigma } from "react-icons/io5";
import styles from './Project.module.css';
import { FaReact } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import FigmaIcon from './Figmaicon';
import Figmaicon from './Figmaicon';




const Project = () => {
  return (
    <div>
      <main>
        <section>
          <div className={styles.project}>
            <h1 className='fw-bold text-uppercase'>My <span>Projects</span></h1>
            <p>Explore my latest work. Each project represents a unique challenge and solution.</p>
          </div>

          <section className={`d-flex gap-4 mt-5 ${styles.cardsection}`}>
            <div className={styles.card01} style={{ width: "22rem", padding: "0" }}>
              <img src="/nexus..jpg" className={styles.image} alt="..." />
              <div className="card-body mx-3 mt-2">
                <PiBracketsAngleBold style={{ color: "#6F2DA8" }} /> <button className={`${styles.cardbtn} py-0 px-3 rounded-pill`}> Frontend</button>
                <h5 className="card-title mt-2">Nexus Aquaruim</h5>
                <p className="card-text mt-3">Nexus Aquarium is a modern, multi-page web project developed with React.js and Bootstrap, designed to showcase the beauty of aquatic life.</p>
                <div className={`d-flex gap-4 `}>
                  <p>React.js</p>
                  <p>Bootstrap</p>
                  <p>MYSQL</p>
                </div>
              </div>
            </div>

            <div className={styles.card01} style={{ width: "22rem", padding: "0"  }}>
              <img src="/covid.portfolio.png" className={styles.image} alt="..." />
              <div className="card-body mx-3 mt-2">
                <PiBracketsAngleBold style={{ color: "#6F2DA8" }} /> <button className={`${styles.cardbtn} py-0 px-3 rounded-pill`}> Fullstack</button>
                <h5 className="card-title mt-2">Covid Care + Admin Dashboard</h5>
                <p className="card-text mt-3">CovidCare Admin System is a full-stack web application built with PHP, MySQL, and Bootstrap to manage COVID testing and vaccination data.</p>
                <div className={`d-flex gap-4 `}>
                  <p>PHP</p>
                  <p>Bootstrap</p>
                  <p>MYSQL</p>
                </div>
              </div>
            </div>

            <div className={styles.card01} style={{ width: "22rem", padding: "0"}}>
              <img src="/sotify.jpg" className={styles.image} alt="..." />
              <div className="card-body mx-3 mt-2">
                <PiBracketsAngleBold style={{ color: "#6F2DA8" }} /> <button className={`${styles.cardbtn} py-0 px-3 rounded-pill`}> Frontend</button>
                <h5 className="card-title mt-2">Spotify Clone</h5>
                <p className="card-text mt-3">Spotify Clone — A sleek music streaming interface built with HTML, CSS, and JavaScript, replicating Spotify’s clean and modern design</p>
                <div className={`d-flex gap-4 `}>
                  <p>HTML </p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
          </section>

        </section>

        <section className={styles.technology}>
          <div>
            <h4 className='pt-4'>Technology I Work With</h4>
            <div className={styles.icons}>
              <div>
                <Figmaicon />
                <p>Figma</p>
              </div>
              <div>
                <SiVercel className={styles.vercel} />
                <p>Vercel</p>
              </div>
              <div>
                <FaReact className={styles.react} />
                <p>React.js</p>
              </div>
              <div>
                <SiBootstrap className={styles.bootstrap} />
                <p>Bootstrap</p>
              </div>
              <div>
                <SiPhp className={styles.php} />
                <p>PHP</p>
              </div>
              <div>
                <SiMysql className={styles.mysql} />
                <p>MySQL</p>
              </div>
              <div>
                <SiLaravel className={styles.laravel} />
                <p>Laravel</p>
              </div>

            </div>
          </div>

        </section>
      </main>
    </div>
  )
}

export default Project
