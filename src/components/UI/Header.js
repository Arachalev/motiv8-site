import classes from "./Header.module.css";
import { Fragment } from "react";
import Logo from "../../assets/images/motiv8-logo.png";
// import TopSvg from '../../assets/images/Vector2.svg'
import { Link } from "react-router-dom";
import HeaderVector from "../../assets/images/HeaderVector.js";

const Header = (props) => {
  return (
    <Fragment>
      <header >
        <div className={classes.svgContainer}>
          <div >
            <HeaderVector
              
              width="347"
              height="291"
              fill="#F2F6FF"
            />
          </div>
          <div className={classes.svg1} >
            <HeaderVector
              
              width="312"
              height="259"
              fill="#13719698"
            />
          </div>
          <div className={classes.svg} >
            <HeaderVector
              
              width="256"
              height="210"
              fill="#48a4c998"
            />
          </div>
          {/* <HeaderVector   width ="312" height='259' fill="#F2F6FF"/> */}
        </div>
        {/* <svg className={classes.svg} width="347" height="291" viewBox="0 0 347 291" fill="#F2F6FF" xmlns="http://www.w3.org/2000/svg">
<path d="M296.216 219.639C353.024 129.175 345.5 0 345.5 0H-3V287.487C-3 287.487 239.408 310.103 296.216 219.639Z" stroke="none"/>
</svg> */}

        <div>
          <div className={classes.logo}>
            <img alt="logo" src={Logo} />
          </div>
        </div>
        <div className={classes.links}>
          <ul>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="our-services">Our Service</Link>
            </li>
            <li>
              <Link to="the-team">The Team</Link>
            </li>
            <li>
              <Link to="portfolio">Portfolio</Link>
            </li>
            <li className={classes.contact} id={classes.contact}>
              <Link to="contact-us">Get In Touch</Link>
            </li>
          </ul>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
