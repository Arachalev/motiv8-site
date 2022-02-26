import classes from "./FooterTab.module.css";
import { Link } from "react-router-dom";

const FooterTab = (props) => {
  return (
    <div>
      <h4 className={classes.head}>{props.head}</h4>
      <ul>
        <li>
          <Link to={props.to}>{props.link1}</Link>
        </li>
        <li>
          <Link to={props.to}>{props.link2}</Link>
        </li>
        <li>
          <Link to={props.to}>{props.link3}</Link>
        </li>
        <li>
          <Link to={props.to}>{props.link4}</Link>
        </li>
        <li>
          <Link to={props.to}>{props.link5}</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterTab;
