import React, { useState } from "react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import Hello from "./hello.json";
import Lottie from "lottie-react";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />

      <div className="wrapper">
        {/* Change coming from right to left */}
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="blink"
            whileHover={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Lottie className="lottie" animationData={Hello}></Lottie>
          </motion.span>
        </motion.span>

        <motion.div
          className="social"
          initial={{ opacity: 0, scale: 0.37 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <a href="https://www.linkedin.com/in/rahulkanwal/">
            <img src="/LinkedIn.png" alt="" />
          </a>
          <a href="https://github.com/KanwalB7/">
            <img className="Github" src="/Github.png" alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
