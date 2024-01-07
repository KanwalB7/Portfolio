import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // Start animation when the top of the element reaches the top of the viewport
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "420%"]);
  const yPlanets = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yStars = useTransform(scrollYProgress, [0, 1], ["0%", "110%"]);
  const blurAndOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px) opacity(1)", "blur(10px) opacity(0.5)"]
  );

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "experiences"
            ? "linear-gradient(180deg ,rgb(44, 44, 44) , rgb(13, 13, 13)"
            : "linear-gradient(180deg , rgb(13, 13, 13), rgb(44, 44, 44)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "experiences" ? "Work Experience" : "Projects"}
      </motion.h1>

      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{ y: yPlanets }}></motion.div>
      <motion.div
        className="stars"
        style={{ filter: blurAndOpacity, y: yStars }}
      ></motion.div>
    </div>
  );
};

export default Parallax;
