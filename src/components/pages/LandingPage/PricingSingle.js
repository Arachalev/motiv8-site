import classes from "./PricingSingle.module.css";
import { GiCheckMark } from "react-icons/gi";

const PricingSingle = (props) => {
  return (
    <div className={classes.pricing}>
      <div className={classes.main}>
        <h4 className={classes.title}>{props.title}</h4>
        <div className={classes.pricingContainer}>
          <span className={classes.price}>{props.price}</span>
          <p className={classes.time}>{props.time}</p>
        </div>
      </div>

      <div>
        <div className={classes.perks}>
          <div className={classes.perksContainer}>
            <GiCheckMark className={classes.icon}/> <p>{props.perks1}</p>
          </div>
          <div className={classes.perksContainer}>
            <GiCheckMark className={classes.icon}/> <p>{props.perks2}</p>
          </div>
          <div className={classes.perksContainer}>
            <GiCheckMark className={classes.icon}/> <p>{props.perks3}</p>
          </div>
        </div>
        <button className={classes.perksButton} >{props.perks4}</button>
        <button className={classes.plan}>Choose Plan</button>
      </div>
    </div>
  );
};

export default PricingSingle;
