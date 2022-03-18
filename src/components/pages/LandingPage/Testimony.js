import { useEffect, useCallback } from "react";
import classes from "./Testimony.module.css";
import TestimonySingle from "./TestimonySingle";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

import amazon from "../../../assets/images/amazon.svg";
import domino from "../../../assets/images/domino.svg";
import google from "../../../assets/images/google.svg";
// import kfc from "../../../assets/images/kfc.svg";
import mcdonalds from "../../../assets/images/mcdonalds.svg";
import netflix from "../../../assets/images/netflix.svg";
// import payoneer from "../../../assets/images/payoneer.svg";
// import paypal from "../../../assets/images/paypal.svg";
// import stripe from "../../../assets/images/stripe.svg";
import test1 from "../../../assets/images/test1.jpg";
import test2 from "../../../assets/images/test2.jpg";
import test3 from "../../../assets/images/test3.jpg";

const Testimony = () => {
  let slideIndex = 2;
  const slideShow = useCallback( (n) => {
    let testimony = document.getElementsByClassName("home");

    if (n > testimony.length) {
      slideIndex = 2;
    }
    if (n < 2) {
      slideIndex = testimony.length;
    }

    for (let i = 0; i < testimony.length; i++) {
      testimony[i].classList.add("hidden");
    }
    testimony[slideIndex - 1].classList.remove("hidden");
    testimony[slideIndex - 2].classList.remove("hidden");
  },[slideIndex]);

  const plusSlides = () => {
    slideShow((slideIndex += 1));
  };
  const prevSlides = () => {
    slideShow((slideIndex -= 1));
  };

  useEffect(() => {
    slideShow(slideIndex);
  }, [slideShow, slideIndex]);

  return (
    <div className={classes.testimony}>
      <div className={classes.intro}>
        <h4>What our happy clients say</h4>
        <p>Things that makes it the best place to start trading</p>
      </div>
      <div className={classes.testimonies}>
        <TestimonySingle
          icon={amazon}
          text={`111 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae voluptatem quis distinctio iusto temporibus quam.`}
          image={test1}
          name={`Jane Cooper`}
          title={`Co-Founder Amazon`}
        />
        <TestimonySingle
          icon={domino}
          text={` 222 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae voluptatem quis distinctio iusto temporibus quam.`}
          image={test2}
          name={`Jane Cooper`}
          title={`Co-Founder Amazon`}
        />
        <TestimonySingle
          icon={netflix}
          text={`333 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae voluptatem quis distinctio iusto temporibus quam.`}
          image={test3}
          name={`Jane Cooper`}
          title={`Co-Founder Amazon`}
        />
        <TestimonySingle
          icon={google}
          text={`444 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae voluptatem quis distinctio iusto temporibus quam.`}
          image={test3}
          name={`Jane Cooper`}
          title={`Co-Founder Amazon`}
        />
        <TestimonySingle
          icon={mcdonalds}
          text={`555 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae voluptatem quis distinctio iusto temporibus quam.`}
          image={test3}
          name={`Jane Cooper`}
          title={`Co-Founder Amazon`}
        />
      </div>
      <div className=" flex flex-row justify-center gap-4 ">
        <GrPrevious onClick={prevSlides} />
        <GrNext onClick={plusSlides} />
      </div>
    </div>
  );
};

export default Testimony;
