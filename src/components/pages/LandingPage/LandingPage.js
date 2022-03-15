import classes from "./LandingPage.module.css";
import { Fragment } from "react";
import MainSection from "./MainSection";
import HelpBusiness from "./HelpBusiness";
import Reference from "./Reference";
import Digitize from "./Digitize";
import Services from "./Services";
import Testimony from "./Testimony";
import Pricing from "./Pricing";

const LandingPage = (props) => {
  return (
    <div >
      <div className={classes.landing}>
        <MainSection />
      </div>
      <div>
        <Reference/>
      <HelpBusiness/>
      <Digitize/>
      <Services/>
      <Testimony/>
      <Pricing/>


      </div>

    </div>
  );
};

export default LandingPage;
