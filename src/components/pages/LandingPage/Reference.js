import classes from "./Reference.module.css";
import { AiFillGoogleSquare } from "react-icons/ai";
import { FaAirbnb } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";
import { SiUber } from "react-icons/si";
import { AiOutlineAmazon } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";

const Reference = () => {
  const { inView, entry, ref } = useInView();
  // const animationControl = useAnimation();
   

   
  // console.log(inView);

 
  // const animationControl = useAnimation()
  // if(inView){
  //   animationControl.start({
  //     opacity:1,
  //     transition:{
  //       delay:0.5
  //     }
  //   })
  // }
  return (
   <motion.div
      className={classes.reference}
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}      
      transition={{  duration: 0.5 }}
    >
      { <p>
        Over <span>20K</span> businesses growing with Motiv8
      </p>}
      <div className={classes.icons}>
        <span>
          <AiFillGoogleSquare />
        </span>
        <span>
          <FaAirbnb />
        </span>
        <span>
          <FaStripe />
        </span>
        <span>
          <SiUber />
        </span>
        <span>
          <AiOutlineAmazon />
        </span>
      </div>
    </motion.div>
  );
};

export default Reference;
