import classes from "./LandingPage.module.css";
import Header from "../../UI/Header";
import { Fragment } from "react";
import MainSection from "./MainSection";
import HelpBusiness from "./HelpBusiness";
import Reference from "./Reference";
import Digitize from "./Digitize";
import Services from "./Services";
import Testimony from "./Testimony";
import Pricing from "./Pricing";
import Footer from "../../UI/Footer";

const LandingPage = (props) => {
  return (
    <div >
      <div className={classes.landing}>
        <Header />
        <MainSection />
      </div>
      <div>
        <Reference/>
      <HelpBusiness/>
      <Digitize/>
      <Services/>
      <Testimony/>
      <Pricing/>
      <Footer/>


      </div>

    </div>
  );
};

export default LandingPage;
