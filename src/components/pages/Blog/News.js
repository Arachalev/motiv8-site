import classes from "./News.module.css";
import SingleNews from "./SingleNews";
import news1 from "../../../assets/images/news1.jpg";
import news2 from "../../../assets/images/news2.jpg";
// import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import{IoIosArrowForward} from "react-icons/io"


const News = (props) => {
  //Using redux store to populate the blog items
  // const blogNews = useSelector((state) => state.cart.items);
  // {
  //   blogNews.map((items) => (
  //     <SingleNews
  //       key={items.id}
  //       category={items.category}
  //       bg={items.bg}
  //       title={items.title}
  //       image={items.image}
  //     />
  //   ));  
  // }

  const links = <motion.div 
    initial={{x:0}}
    animate={{x:2}}
    transition={{yoyo:Infinity}}
  >
    <IoIosArrowForward/>
  </motion.div>
  return (
    <div className={classes.news}>
      <SingleNews
        category="Design"
        bg="bg-blue-100 text-blue-400"
        title=" 5 Powerful Habits of Successful Designers "
        text={`They are all iconic designers and the proponents of the design philosophy "Maximum meaning", "Minimalistic design".`}
        image={news1}
        links={links}
        linksText="Read More"
      />
      <SingleNews
        category="Technology"
        bg="bg-lime-100 text-lime-400"
        title=" 5 Powerful Habits of Successful Designers "
        text={`They are all iconic designers and the proponents of the design philosophy "Maximum meaning", "Minimalistic design".`}
        image={news2}
        links={links}
        linksText="Read More"
      />
      <SingleNews
        category="Technology"
        bg="bg-lime-100 text-lime-400"
        title=" 5 Powerful Habits of Successful Designers "
        text={`They are all iconic designers and the proponents of the design philosophy "Maximum meaning", "Minimalistic design".`}
        image={news2}
        links={links}
        linksText="Read More"
      />
      <SingleNews
        category="Technology"
        bg="bg-lime-100 text-lime-400"
        title=" 5 Powerful Habits of Successful Designers "
        text={`They are all iconic designers and the proponents of the design philosophy "Maximum meaning", "Minimalistic design".`}
        image={news2}
        links={links}
        linksText="Read More"
      />
    </div>
  );
};

export default News;
