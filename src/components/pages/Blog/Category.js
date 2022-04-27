import classes from "./Category.module.css";
import SingleCategory from "./SingleCategory";
import { Fragment } from "react";
import { FiAward } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaPaintBrush } from "react-icons/fa";
 




const Category = (props) => {
   
  return (
    <Fragment>
      <div className={classes.container}>
        <h3>Explore by category</h3>
        <hr />
        <div className={classes.category}>
          <SingleCategory
            bg = "bg-blue-200"
            // h4Icon='hover:bg-blue-400'
            icon={<FiAward />}
            title="Business"
            text="Best business news from around the world at your finger tips. Your digital world in one place."
            
          />
           <SingleCategory
            bg = "bg-pink-200"
            icon={<AiOutlineClockCircle />}
            title="Startup"
            text="Best startup news from around the world at your finger tips. Your digital world in one place."
            
          />
           <SingleCategory
            bg = "bg-red-200"
            icon={<FaPaintBrush />}
            title="Design"
            text="Best design news from around the world at your finger tips. Your digital world in one place."
            
          />
        </div>
        <hr/>
      </div>
    </Fragment>
  );
};

export default Category;
