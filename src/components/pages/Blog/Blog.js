import classes from "./Blog.module.css";
import landingBlog from "../../../assets/images/blog1.svg";
import { Fragment } from "react";
import Category from "./Category";
import News from "./News";
import { motion } from "framer-motion";

const Blog = (props) => {
  return (
    <Fragment>
      <div className={classes.blog}>

        <div className={classes.header}>
          <motion.div
            className={classes.news}
            initial={{ x: -800 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.5,
              duration: 1,
            }}
          >
            
            <h4>
              Discover our <br /> <span>digital world</span>
            </h4>
            <p>
              The best news and content from the verified sources. 
            </p>
          </motion.div>
          <div className={classes.landing}>
            {/* <img src={landingBlog} /> */}
            <h4>Your digital world in one place</h4>

          </div>
          <h3>Read your stories!</h3>
        </div>
      </div>
      {/* <Category /> */}
      <News />
    </Fragment>
  );
};

export default Blog;
