import { delay, motion } from 'framer-motion'

const Test = () => {

    //For complex animations can use states and variants

    const [open, setOpen]= useState(false)

    const variants= {
        visible:{opacity:1, x:1000, transition: 2},
        hidden: {opacity:0},
    }

    return (
        <div className="course">
            {/* <motion.div className="box" 
            // intital={{opacity:0.5, scale:0.5}} 
            // // // animate={{ opacity: 1 ,scale:1, x:200 , y:500}} 
            // transition={{ duration: 2 }}
            // whileInView={{opacity:1, scale:2}} drag
            //Similary can execute with tap, hover as well
            //Can have a drag property which will hold the object while dragging
            variants={variants}
            // transition={{duration:2}}
            animate={open ? "visible" : "hidden"}
            >
            </motion.div>
            <button onClick={()=> setOpen(prev=> !prev)}>Click</button> */}
        </div>
    )
}

export default Test
