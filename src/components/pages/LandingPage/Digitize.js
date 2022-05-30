import classes from "./Digitize.module.css";
import digitize from "../../../assets/images/digitize.jpg";
import { Fragment, useEffect } from "react";
import { GiCheckMark } from "react-icons/gi";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, animate } from "framer-motion";
import CountUp from "react-countup";

const Digitize = () => {
  const { inView, ref } = useInView();
  const control = useAnimation();

  useEffect(()=>{
      if(inView)
      {
        control.start("show")
      }
  },[control, inView])

  // if (inView) {
  //   statsAnimation.start({
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       duration: 2,
  //     },
  //   });
  // }

  const container = {
    hidden: { opacity: 0, y:200 },
    show: {
      opacity: 1,
      y:0,
       
      transition: {
        delayChildren: 1,
        duration:1.5,
        repeat:0,
        repeatType:"reverse"
      }
    }
  }

  const childContainer = {
    hidden:{
      opacity:0, y:150
    },
    show:{
      opacity:1,
      y:0,
     
    }
   
  }
  
  return (
    <Fragment>
      <motion.section
        className={classes.section}
        variants={container}
        initial="hidden"        
        animate={control}
        ref={ref}
        
      >
        <div className={classes.digitize}>
          <div className={classes.client}>
            <h4>
              We are here to digitize your business and take you online in an
              elegant way!
            </h4>
            <div className={classes.image}>
              <img src={digitize} alt="smiling-customer" />
            </div>
          </div>
          <div className={classes.standard}>
            <div>
              <h4>
                We are working since 1990 as a digital agency with good services
                providing for our customers, we have an expert team and are all
                ready to give you support 24/7
              </h4>
            </div>
            <div className={classes.services}>
              <span>
                <GiCheckMark />
                <p>Quality services and support all times</p>
              </span>
              <span>
                <GiCheckMark />
                <p>Expert Team Members</p>
              </span>
              <span>
                <GiCheckMark />
                <p>Lifetime online support</p>
              </span>
              <span>
                <GiCheckMark />
                <p>Dedicated business advisor</p>
              </span>
            </div>
          </div>
        </div>
         <motion.div
          className={classes.stats}
          ref={ref}
          variants={childContainer}
          initial="hidden"
          whileInView="show"
          // initial={{ opacity: 0, y: 150 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ repeat:1, delay:2 }}
       
        >
          {inView && (
            <div>
              <div className=" flex flex-col gap-2">
                <CountUp start={0} end={200} delay={0} duration={2} >
                  {({ countUpRef }) => <p ref={countUpRef} />}
                </CountUp>
                {/* <br /> */}
                <span>Projects launched</span>
              </div>
            </div>
          )}
          <hr />
          {inView && (
            <div>
              <div className=" flex flex-col gap-2">
                <CountUp start={0} end={650} delay={0} duration={2}>
                  {({ countUpRef }) => <p ref={countUpRef} />}
                </CountUp>
                {/* 650 <br /> */}
                <span>happy clients</span>
              </div>
            </div>
          )}
          <hr />
          {inView && (
            <div>
              <div className=" flex flex-col gap-2">
                <CountUp
                  start={0}
                  end={3280}
                  delay={0}
                  duration={2}
                  prefix="+ "
                >
                  {({ countUpRef }) => <p ref={countUpRef} />}
                </CountUp>
                {/* +3280 <br /> */}
                <span>Positive Reviews </span>
              </div>
            </div>
          )}
        </motion.div> 
      </motion.section>
    </Fragment>
  );
};

export default Digitize;
