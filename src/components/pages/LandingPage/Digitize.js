import classes from "./Digitize.module.css";
import digitize from "../../../assets/images/digitize.jpg";
import { Fragment } from "react";
import { GiCheckMark } from "react-icons/gi";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import CountUp from "react-countup";

const Digitize = () => {
  const { inView, ref } = useInView();
  const statsAnimation = useAnimation();
  if (inView) {
    statsAnimation.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    });
  }
  return (
    <Fragment>
      <section className={classes.section}>
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1 }}
          animate={statsAnimation}
        >
         { inView && <div>
            <p className=" flex flex-col gap-2">
              <CountUp start={0} end={200} delay={0} duration={3}>
                {({ countUpRef }) => (                   
                    <p ref={countUpRef} />                   
                )}
              </CountUp> 
              {/* <br /> */}
              <span>Projects launched</span>
            </p>
          </div>}
          <hr />
          {inView && <div>
            <p className=" flex flex-col gap-2">
              <CountUp start={0} end={650} delay={0} duration={3}>
                {({countUpRef})=>(
                  <p ref={countUpRef}/>
                )}
              </CountUp>
              {/* 650 <br /> */}
              <span>happy clients</span>
            </p>
          </div>}
          <hr />
          {<div>
            <p className=" flex flex-col gap-2">
              <CountUp start={0} end={3280} delay={0} duration={3} prefix="+ ">
              {({countUpRef})=>(
                <p ref={countUpRef}/>
              )}
              </CountUp>
              {/* +3280 <br /> */}
              <span>user comments </span>
            </p>
          </div>}
        </motion.div>
      </section>
    </Fragment>
  );
};

export default Digitize;
