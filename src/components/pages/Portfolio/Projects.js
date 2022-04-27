import SingleProject from "../Blog/SingleNews";
import classes from "./Projects.module.css";
import news1 from "../../../assets/images/news1.jpg";
import news2 from "../../../assets/images/news2.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const Projects = () => {
  const links = (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: 3 }}
      transition={{ yoyo: Infinity }}
    >
      <IoIosArrowForward />
    </motion.div>
  );
  return (
    <div className={classes.container}>
      <SingleProject
        title=" Aisha Restaurant"
        text="A restaurant app for ordering food from the comfort of your home."
        image={news1}
        linksText="Read More"
        links={links}
      />
      <SingleProject
        title=" Essay Grading Software"
        text="An AI Software used by the Engineering body COREN to automatically grade essays."
        image={news2}
        linksText="Read More"
        links={links}
      />
      <SingleProject
        title=" Aisha Restaurant"
        text="A restaurant app for ordering food from the comfort of your home."
        image={news1}
        linksText="Read More"
        links={links}
      />
      <SingleProject
        title=" Essay Software"
        text="An AI Software used by the Engineering body COREN to automatically grade essays ."
        image={news2}
        linksText="Read More"
        links={links}
      />
    </div>
  );
};

export default Projects;
