import classes from "./SingleTeam.module.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
// import team1 from "../../../assets/images/team1.jpg"

const SingleTeam = (props) => {
    const className = `${classes.singleTeam}  `
  return (
    <div className= {className}>
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
    </div>
  );
};

export default SingleTeam;
