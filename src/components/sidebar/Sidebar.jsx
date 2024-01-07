import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef();

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  // Handle in case the user clicks anywhere outside the menu
  const closeMenu = () => {
    setOpen(false);
  };

  const handleOutsideClick = (event) => {
    // Check if the clicked element is outside the sidebar and toggle button
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      !event.target.classList.contains("toggle-button")
    ) {
      closeMenu();
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener("click", handleOutsideClick);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"} ref={sidebarRef}>
      {/* The child will automatically choose the animation from the parent by using variants */}
      <motion.div className="circle" variants={variants}>
        {/* Links */}
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
