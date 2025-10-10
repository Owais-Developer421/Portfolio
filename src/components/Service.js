import React from 'react'
import { PiBracketsAngleBold } from "react-icons/pi";
import { MdArrowOutward } from "react-icons/md";
import { HiServer } from "react-icons/hi";
import { LuPalette } from "react-icons/lu";
import styles from "./Service.module.css"



const Service = () => {
  return (
    <div>
      <main className={styles.main}>
        <section className=' text-center mt-4'>
          <div className={styles.head}>
            <h1 className='text-uppercase fw-bold'>My <span>Service</span></h1>
            <p className='w-50 mt-2 mx-auto'>I offer a comprehensive range of web development services to help businesses establish a strong online presence. From concept to deployment, I ensure that every project is delivered with the highest quality and attention to detail.</p>
            </div>

            <section className={`d-flex justify-content-center mt-5 ${styles.responsive}`}>
            <div className={styles.service}>
              <PiBracketsAngleBold className={styles.icons}/> 
              <h3>Custom Web Application</h3>
              <p>I craft powerful and fully tailored web applications that bring your ideas to life. From sleek dashboards to dynamic business tools, every app is built with performance, scalability, and user experience in mind</p>
            </div>
            <div className={styles.service}>
              <HiServer className={styles.icons} />
              <h3>Frontend Developer</h3>
              <p>I create fast responsive and visually stunning frontends that deliver a flawless user experience. Every interface is crafted with precision optimized for performance and designed to keep users engaged.</p>
            </div>
            <div className={styles.service}>
              <LuPalette className={styles.icons} />
              <h3>UI/UX Design</h3>
              <p>Intuitive & Polished Design. Creating visually appealing interfaces that focus on a superior user experience, managing the process from initial wireframes to final designs.</p>
            </div>
            </section>

  </section>
            <section>
              <h1 className={`text-uppercase fw-bold text-center ${styles.process}`}>My <span>Process</span></h1>

              <div className={`d-flex justify-content-center ${styles.responsive}`}>
              <div className={styles.card}>
                <h1>01</h1>
                 <h3>Discovery</h3>
                 <p>I start by understanding your business goals, target audience, and project requirements.</p>
              </div>
               <div className={styles.card} >
                <h1>02</h1>
                 <h3>Planning</h3>
                 <p>I create a clear project roadmap with timelines, deliverables, and technical specifications.</p>
              </div>
               <div className={styles.card}>
                <h1>03</h1>
                 <h3>Development</h3>
                 <p>I build your application using modern technologies, best practices, and regular updates.</p>
              </div>
              <div className={styles.card}>
                <h1>04</h1>
                 <h3>Delivery</h3>
                 <p>I deploy your application, provide training, and offer ongoing support and maintenance.</p>
              </div>
              </div>
            </section>
            

            <section className={styles.testimonial}>
              <h1 className='text-uppercase fw-bold text-center mt-5'>Client <span>Testimonials</span></h1>
              <div className={`d-flex justify-content-center ${styles.responsive}`}>
               <div className={styles.client}>
                <div className='d-flex  gap-2 align-items-center'>
                <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Sarah M" className='rounded-circle w-25'/>
                 <h5>Sarah M. — Business Owner</h5>
                 </div>
                 <p>“Working with Owais was super easy and professional. He understood exactly what I wanted and turned my idea into a smooth, modern web app. I couldn’t be happier with the result!”</p>
              </div>
                
                <div className={styles.client}>
                <div className='d-flex  gap-2 align-items-center'>
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Daniel K" className='rounded-circle w-25'/>
                 <h5>Daniel K. — Startup Founder</h5>
                 </div>
                 <p>“Owais did a fantastic job on our frontend. It’s fast, responsive, and looks amazing on every device. He kept me updated throughout and delivered everything right on time.”</p>
              </div>
              </div>


              <div className={`d-flex justify-content-center ${styles.responsive}`}>
               <div className={styles.client}>
                <div className='d-flex  gap-2 align-items-center'>
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Ayesha R" className='rounded-circle w-25'/>
                 <h5>Ayesha R. — Project Manager</h5>
                 </div>
                 <p>“From day one, Owais was clear, organized, and really easy to work with. The final product came out better than we imagined — smooth performance and a clean design.”</p>
              </div>

               <div className={styles.client}>
                <div className='d-flex  gap-2 align-items-center'>
                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Imran S" className='rounded-circle w-25'/>
                 <h5>Imran S. — Marketing Head</h5>
                 </div>
                 <p>“Owais totally upgraded our website! It now feels modern, loads fast, and the user experience is top-notch. He definitely knows his stuff.”</p>
              </div>
              </div>
              <button className={`${styles.allclient} mx-auto`}>View All Testimonials <MdArrowOutward/></button>
            </section>
      </main>
    </div>
  )
}

export default Service
