import classes from "./Testimony.module.css";
import TestimonySingle from "./TestimonySingle";
import amazon from "../../../assets/images/amazon.svg";
import domino from "../../../assets/images/domino.svg";
import google from "../../../assets/images/google.svg";
import kfc from "../../../assets/images/kfc.svg";
import mcdonalds from "../../../assets/images/mcdonalds.svg";
import netflix from "../../../assets/images/netflix.svg";
import payoneer from "../../../assets/images/payoneer.svg";
import paypal from "../../../assets/images/paypal.svg";
import stripe from "../../../assets/images/stripe.svg";
import test1 from '../../../assets/images/test1.jpg'
import test2 from '../../../assets/images/test2.jpg'
import test3 from '../../../assets/images/test3.jpg'


const Testimony = () => {
  return (
    <div className={classes.testimony}>
      <div className={classes.intro}>
        <h4 >What our happy clients say</h4>
        <p>Things that makes it the best place to start trading</p>
      </div>
      <div className={classes.testimonies}>
        <TestimonySingle
          icon={amazon}
          text={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae voluptatem quis distinctio iusto temporibus quam.`}
          image={test1}
          name={`Jane Cooper`}
          title={`Co-Founder Amazon`}
        />
        <TestimonySingle
          icon={domino}
          text={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae voluptatem quis distinctio iusto temporibus quam.`}
          image={test2}
          name={`Jane Cooper`}
          title={`Co-Founder Amazon`}
        />
        <TestimonySingle
          icon={netflix}
          text={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae voluptatem quis distinctio iusto temporibus quam.`}
          image={test3}
          name={`Jane Cooper`}
          title={`Co-Founder Amazon`}
        />
      </div>
    </div>
  );
};

export default Testimony;
