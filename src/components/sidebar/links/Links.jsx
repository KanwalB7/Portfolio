import {motion} from "framer-motion";

const variants= {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};


const variants_animation= {
    open: {
        x:0,
        opacity: 1,
    },
    closed: {
        x:50,
        opacity:0,
    },
};
//Since items are coming from up to bottom and going back back to bottom 
const Links = () => {

  const items= ["Home", "Work Experience", "Projects", "Contact"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map(item=>(
        //   `#${item}` Since internally linking to the same section
          <motion.a href={`#${item}`} key={item} variants={variants_animation} whileHover={{scale: 1.3}} whileTap={{scale: 0.7}}>
              {item}
              </motion.a>


      ))}
    </motion.div>
  )
}

export default Links
