import classes from "./AboutUs.module.css";
import Driven from "./Driven";
import Values from "./Values";
import Team from "./Team";
import { motion } from "framer-motion";

const AboutUs = (props) => {
  return (
    <main>
      <Driven />
      <motion.div
        className={classes.mission}
        initial={{ y: 200, x: 200, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        transition={{duration:1}}
      >
        <h2>
          It is our mission to remove barriers to understanding your users
          behaviours
        </h2>
        <p>
          Culture is an important part of how we operate. We Stand by six key
          pillars to success. These ensure we're all moving in the same
          direction, and encourage an inclusive, diverse business we continue to
          build
        </p>
      </motion.div>

      <Values />
      {/* <hr/> */}
      <Team id="the_team" />

      {/* <hr/> */}
    </main>
  );
};

export default AboutUs;
