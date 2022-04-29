import classes from "./SingleTeam.module.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
// import team1 from "../../../assets/images/team1.jpg"
import { motion } from "framer-motion";

const SingleTeam = (props) => {
  const className = `${classes.singleTeam}  `;
  return (
    <motion.div
      className={className}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
    >
      <img src={props.image} />
      <div className={classes.infoContainer}>
        <h3>{props.name}</h3>
        <h4>{props.position}</h4>
        <p>{props.about}</p>
        <div className={classes.socials}>
          <AiOutlineTwitter />
          <AiOutlineInstagram />
          <AiOutlineGithub />
        </div>
      </div>
    </motion.div>
  );
};

export default SingleTeam;
