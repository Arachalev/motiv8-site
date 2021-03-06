import classes from "./TestimonySingle.module.css";
import { RiDoubleQuotesR } from "react-icons/ri";

const TestimonySingle = (props) => {
  // let home = document.getElementsByClassName("home");
  // console.log(home.length)
  return (
    <div className={`${classes.card} home  `}>
      <img className={classes.icon} src={props.icon} />
      <p>{props.text}</p>

      <div className={classes.details}>
        <div className={classes.images}>
          <img src={props.image} alt="clients" />
        </div>
        <div>
          <p>{props.name}</p>
          <span className={classes.title}>{props.title}</span>
        </div>
        <span className={classes.quote}>
          <RiDoubleQuotesR />
        </span>
      </div>
    </div>
  );
};

export default TestimonySingle;
