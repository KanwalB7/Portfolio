import "./project.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const titleVariants = {
  initial: { opacity: 0, y: -500 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: 3 } },
};

const Project = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // Start animation when the top of the element reaches the top of the viewport
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["-1000%", "430%"]);

  return (
    <motion.div className="project">
      <motion.div className="title" style={{ y: yText }} transition={{ duration: 1 }}>
        <h1>Projects</h1>
      </motion.div>
      <div className="bg"></div>
      <div className="container">
        <Carousel className="carousel" responsive={responsive} infinite={true} >
          {/* Project3 */}
          <div className="item">
            <div className="image">
              <img src="youtube.png" alt="" />
            </div>
            <div className="heading">
              <h1>ReacTube</h1>
            </div>
            <p>Built a responsive YouTube clone using React.js and Tailwind CSS, aimed at providing a familiar video-sharing platform experience. Used Firebase for handling user authentication and real-time database.</p>
            <div className="button">
              <button class="outlined-dark-button">Github</button>
            </div>
          </div>
          {/* Project2 */}
          <div className="item">
            <div className="image">
              <img src="huffman.png" alt="" />
            </div>
            <div className="heading">
              <h1>File Compressor</h1>
            </div>
            <p>File Compressor is a Java-based application designed to compress and decompress files using the Huffman coding algorithm. Achieved a compression rate of over 40% using Huffman coding algorithm.</p>
            <div className="button">
              <a href="https://github.com/KanwalB7/File-Compressor--Huffman-Coding"><button class="outlined-dark-button">Github </button></a>
            </div>
          </div>
          {/* Project4 */}
          <div className="item">
            <div className="image">
              <img src="portfolio.png" alt="" />
            </div>
            <div className="heading">
              <h1>Portfolio Website</h1>
            </div>
            <p>Built a portfolio website using React.js, Tailwind CSS, and Framer-Motion for animations. Implemented features such as Parallax scrolling, 3-D objects, and improved Web formatting.</p>
            <div className="button">
              <button class="outlined-dark-button">Github </button>
            </div>
          </div>
          {/* Project1 */}
          <div className="item">
            <div className="image">
              <img src="designPattern.jpeg" alt="" />
            </div>
            <div className="heading">
              <h1>Design Pattern</h1>
            </div>
            <p>This project involves implementing various design patterns such as Adapter, Factory, Builder, and so on commonly used in software development.</p>
            <div className="button">
              <a href="https://github.com/KanwalB7/Design-Patterns">
                <button class="outlined-dark-button">Github </button>
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    </motion.div>
  );
};

export default Project;
