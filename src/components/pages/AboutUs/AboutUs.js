import classes from "./AboutUs.module.css";
import Driven from "./Driven";
import Values from "./Values";
import Team from "./Team";

const AboutUs = (props) => {
  return (
    <main>
      <Driven />
      <div className={classes.mission}>
        <h2>
          
          It is our mission to remove barriers to understanding your users
          behaviours
        </h2>
        <p>
          Culture is an important part of how we operate. We Stand by six key
          pillars to success. These ensure we're all moving in the same
          direction, and encourage an inclusive, diverse business we continue to
          build
        </p>
      </div>

      <Values/>
      {/* <hr/> */}
      <Team/>


      {/* <hr/> */}
    </main>
  );
};

export default AboutUs;
