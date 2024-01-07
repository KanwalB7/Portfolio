import "./experiences.scss";
import timelineElements from "./timelineElements";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

//Refer to external package for vertical timeline component
//https://www.npmjs.com/package/react-vertical-timeline-component


const containerVariants = {
  initial: { opacity: 0, y: -500 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: 2 } },
};

const titleVariants = {
  initial: { opacity: 0, y: -500 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: 2 } },
};




const Experiences = () => {

  const ref= useRef()

  const {scrollYProgress}= useScroll({
      target:ref,
      offset:["start start", "end start"],    //start animation when the top of the element reaches the top of the view port
  });

  const yText= useTransform(scrollYProgress, [0,1], ["-200%", "500%"] ); //Mapping to the specified range; //Can control animation spedd by changing the mapping value og 500%

  
  
  return (
    <div className='experiences'>

      <motion.div className="contatiner">

        <motion.div className="title"
        style={{y:yText}}
        transition={{duration:1}}
        >
          
          <h1>Work Experiences</h1>

        </motion.div>

      <div className="container">
        <VerticalTimeline>
          {
          
            timelineElements.map(element => {
              return (
                <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"  >

                  <h3 className="vertical-timeline-element-title">
                       {element.title}
                  </h3>

                   <h5 className="vertical-timeline-element-subtitle">
                       {element.location}
                  </h5>

                  <p id="description">
                     {element.description}
                  </p>
                
                </VerticalTimelineElement>
              )
            
            })
          }

        </VerticalTimeline>
      </div>
          
    </motion.div>

  </div>
  )
}

export default Experiences
