import classes from "./Portfolio.module.css";
import Projects from "./Projects"
const Portfolio = (props) => {
  return (
    <div className={classes.portfolio}>
      <div className={classes.intro}>
        <h3>
          At Motiv8 Technologies, we build digital products,  brands and
          experience.
        </h3>

        <h4>A list of our recent projects:</h4>
      </div>
      <hr/>

      <div>
          <Projects/>

      </div>
    </div>
  );
};

export default Portfolio;
