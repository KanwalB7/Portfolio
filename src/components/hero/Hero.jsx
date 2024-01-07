import React, { useState, useEffect, useRef } from "react";
import "./hero.scss";
import { motion } from "framer-motion";
import Typed from 'typed.js';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  // Loop Animation
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    }
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",    // Since we may have a very long string
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const images = ['hi.png', 'hero.png'];
    const preloadImages = () => {
      images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };
    preloadImages();
  }, []);

  useEffect(() => {
    // Initialize Typed.js
    const options = {
      strings: ["a CS Student", "a Programmer", "a Developer", "a Geek"],
      typeSpeed: 50,
      loop: true, // Loop through the strings
      showCursor: false, // Hide the cursor
    };

    const typed = new Typed('#element', options);

    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, []); // Run only on component mount and unmount

  return (
    <div className="hero">
      <motion.div className="bg">
        <div className="wrapper">
          <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            {/* All the children would have the same animation */}
            <motion.h2 variants={textVariants}>Rahul Kanwal
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}>
                <motion.span className="blink"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 3.7, repeat: Infinity }}>
                  <motion.img src="hi.png" alt=""
                    animate={{
                      opacity: isHovered ? [1, 0, 1] : 1,
                      rotate: isHovered ? 360 : 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "linear",
                    }}
                    whileHover={{
                      opacity: 0,
                      transition: {
                        duration: 2,
                      },
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  />
                </motion.span>
              </motion.span>
              <h1 className="typedElement">I am <motion.span id="element" variants={textVariants}></motion.span></h1>
            </motion.h2>
            <div className="scroll-down">
              {/* <a href="#experiences"><motion.img variants={textVariants} animate="scrollButton" src="/scroll-down.png" alt="" /></a> */}
            </div>
          </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
          Software Developer CS Student Leader Community Service
        </motion.div>
        <div className="imageContainer">
          <img className="Rahul" src="hero.png" alt="" />
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
