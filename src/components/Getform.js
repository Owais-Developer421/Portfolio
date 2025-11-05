import React from 'react'
import styles from './Getform.module.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Getform = () => {
    return (
        <div>
            <section className={styles.cent}>
                <div className='text-center mt-5'>
                    <h1 className='text-uppercase fw-bold mb-3'>Let’s <span>Connect</span></h1>
                    <p className={`mx-auto ${styles.para}`}>Tell me about your idea — I’ll help you turn it into a fast, modern, and beautiful web experience.</p>
                </div>

                <div className={styles.center}>
                    <div className={`mb-3 d-flex ${styles.width}`}>
                        <div>
                            <label htmlFor="" className='form-label'>Name</label>
                            <input type="text" placeholder='Enter Your Name ' className='form-control' />
                        </div>
                        <div>
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Enter Your Email"
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className='form-label'>Subject</label>
                        <input type="text" className='form-control' placeholder='Subject' />
                        <label htmlFor="exampleFormControlTextarea1" className="form-label mt-3">
                            Your Message
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            defaultValue={"Your Message"}
                        />
                    </div>
                    <button className={`w-100 py-2 ${styles.formbtn}`}>Send Message</button>
                </div>
            </section>

            <footer>
                <section className={styles.footer}>
                    <div>
                        <div className={styles.footerlogo}>
                          <span>OS</span>  
                        <h3 className='fw-bold pt-2'>Portfolio</h3>
                        </div>
                        <p>@202 All rights reserved</p>
                    </div>
                    <div className={styles.gap}>
                     <FaGithub className=' fs-4'></FaGithub>
                     <FaLinkedin className=' fs-4'/>
                     <FaInstagram className=' fs-4'/>
                    </div>
                </section>
            </footer>
        </div>
        
    )
}

export default Getform
