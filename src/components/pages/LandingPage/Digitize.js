import classes from "./Digitize.module.css";
import digitize from "../../../assets/images/digitize.jpg";
import { Fragment } from "react";
import { GiCheckMark } from "react-icons/gi";

const Digitize = () => {
  return (
    <Fragment>
      <section className={classes.section}>
        <div className={classes.digitize}>
          <div className={classes.client}>
            <h4>
              We are here to digitize your business and take you online in an
              elegant way!
            </h4>
            <div className={classes.image}>
              <img src={digitize} alt="smiling-customer" />
            </div>
          </div>
          <div className={classes.standard}>
            <div>
              <h4>
                We are working since 1990 as a digital agency with good services
                providing for our customers, we have an expert team and are all
                ready to give you support 24/7
              </h4>
            </div>
            <div className={classes.services}>
              <span>
                <GiCheckMark />
                <p>Quality services and support all times</p>
              </span>
              <span>
                <GiCheckMark />
                <p>Expert Team Members</p>
              </span>
              <span>
                <GiCheckMark />
                <p>Lifetime online support</p>
              </span>
              <span>
                <GiCheckMark />
                <p>Dedicated business advisor</p>
              </span>
            </div>
          </div>
        </div>
        <div className={classes.stats}>
            <div><p>280 <br/><span>Projects launched</span></p></div>
            <hr/>
            <div><p>650 <br/><span>happy clients</span></p></div>
            <hr/>
            <div><p>+3280 <br/><span>user comments  </span></p></div>




        </div>
      </section>
    </Fragment>
  );
};

export default Digitize;
