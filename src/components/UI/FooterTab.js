import classes from "./FooterTab.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const FooterTab = (props) => {
  const[showLink, setShowLink] = useState(false)     
  const linkHandler =()=>{

    setShowLink(!showLink)
  }
  return (
    <div className=' px-2 lg:px-4 w-fit lg:w-32' >
      <h4 className={classes.head} onClick={linkHandler}>{props.head}</h4>
      <ul className={showLink?" ": " hidden sm:block"} >
        <li >
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
        <li className="mb-4 sm:mb-0">
          <Link to={props.to}>{props.link5}</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterTab;
