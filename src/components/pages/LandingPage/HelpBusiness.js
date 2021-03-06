import classes from "./HelpBusiness.module.css";
import Card from "./Card";

import { FcInTransit } from "react-icons/fc";
import { FcParallelTasks } from "react-icons/fc";
import { FcProcess } from "react-icons/fc";
import { motion } from "framer-motion";

const HelpBusiness = () => {
  const rotate = (
    <motion.div whileInView={{rotate:360}}   transition={{repeat:4, duration:2.4}}  >
      <FcProcess />
    </motion.div>
  );
  const car = (
    <motion.div initial={{x:-20}}   whileInView={{x:40}} transition={{repeat:4, duration:2}}>
      <FcInTransit/>
    </motion.div>
  )

  return (
    <section className={classes.helpContainer}>
      <div className={classes.help}>
        <h4>How can we help your business? </h4>
        <p>Technology for innovation </p>
      </div>
      <div className={classes.card}>
        <Card
          span={classes.span}
          className={classes.className}
          icon={<FcParallelTasks />}
          head={`Integrating innovation  `}
          text={`Using technology to seamlessly run every aspect of your business`}
        />
        <Card
          span={classes.span}
          className={classes.className}
          icon={car}
          head={`Bringing you your target audience  `}
          text={`Harnessing the conncetivity of the internet to bring your next clients right to you.`}
        />
        <Card
          span={classes.span}
          className={classes.className}
          icon={rotate}
          head={`Making your business future proof `}
          text={`Integrating technology to make your business future proof`}
        />
         
      </div>
    </section>
  );
};

export default HelpBusiness;
