import SingleProject from "../Blog/SingleNews";
import classes from "./Projects.module.css";
import news1 from "../../../assets/images/news1.jpg";
import news2 from "../../../assets/images/news2.jpg";

const Projects = (props) => {
  return (
    <div className={classes.container}>
      <SingleProject
        title=" Aisha Restaurant"
        text="A restaurant app for ordering food "
        image={news1}
      />
       <SingleProject
        title=" Essay Software"
        text="A restaurant app for ordering food "
        image={news2}
      />
      <SingleProject
        title=" Aisha Restaurant"
        text="A restaurant app for ordering food "
        image={news1}
      />
       <SingleProject
        title=" Essay Software"
        text="A restaurant app for ordering food "
        image={news2}
      />
    </div>
  );
};

export default Projects;
