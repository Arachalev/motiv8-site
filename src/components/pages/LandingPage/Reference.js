import classes from "./Reference.module.css";
import { AiFillGoogleSquare } from "react-icons/ai";
import { FaAirbnb } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";
import { SiUber } from "react-icons/si";
import { AiOutlineAmazon } from "react-icons/ai";






const Reference = () => {
  return (
    <div className={classes.reference}>
      <p>
        Over <span>20K</span> businesses growing with Motiv8
      </p>
      <div className={classes.icons}>
        <span><AiFillGoogleSquare/></span>
        <span><FaAirbnb/></span>
        <span><FaStripe/></span>
        <span><SiUber/></span>
        <span><AiOutlineAmazon/></span>

      </div>
    </div>
  );
};

export default Reference;
