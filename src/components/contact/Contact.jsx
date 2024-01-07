import "./contact.scss";
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {

  //Loading only in view inorder to avoid lag in initial loading
  const [splineRef, splineInView] = useInView({ triggerOnce: true });
  const [loadSpline, setLoadSpline] = useState(false);

  useEffect(() => {
    const delaySplineLoading = setTimeout(() => {
      setLoadSpline(true);
    }, 1000);

    return () => {
      clearTimeout(delaySplineLoading);
    };
  }, []);

  return (
    <div className="contact" ref={splineRef}>
      <div className="container">
        <div className="text">
          <div className="heading">
            <motion.h1 variants={variants} initial="initial" animate={splineInView ? "animate" : "initial"}>
              Let's Work Together
            </motion.h1>
          </div>

          <div className="contacts">
            <div className="item">
              <h2>Mail</h2>
              <a href="mailto:rahulkanwal410@gmail.com">
                <span>rahulkanwal410@gmail.com</span>
              </a>
            </div>

            <div className="item">
              <h2>Address</h2>
              <span>Winnipeg, Manitoba</span>
            </div>

            <div className="item">
              <h2>Phone Number</h2>
              <span>+1 (431) 275-4645</span>
            </div>
          </div>

          <div className="links">
            <ul>
              <li data-text="Home">
                <a href="#Home">Home</a>
              </li>
              <li data-text="Work Experience">
                <a href="#Work Experience">Work Experience</a>
              </li>
              <li data-text="Projects">
                <a href="#Projects">Projects</a>
              </li>
              <li data-text="Contact">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="globe">
          {splineInView && loadSpline && <Spline scene="https://prod.spline.design/7soNkB8En56TbYSU/scene.splinecode" />}
        </div>
      </div>
    </div>
  );
};

export default Contact;
