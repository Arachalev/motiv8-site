import Polygon from "../../UI/Polygon";
import classes from "./MainSection.module.css";
import { AiFillAlipayCircle } from "react-icons/ai";


const MainSection = () => {
  return (
    <section className={classes.main}>
      <div className={classes.landing}>
        <h4> Tapping Into technology to change your business narrative</h4>
        <p>
          No business it too small to use that advantage, all you need is take a
          step using our collaborative engineer-driven team that will get you
          there.
        </p>
      </div>
      <div className={classes.polygon}>
        <span className={classes.p1}>
          <Polygon
            head={`this is the name`}
            text={`Hello my friend`}
            icon={<AiFillAlipayCircle />}
          />
        </span>
        <span className={classes.p2}>
          <Polygon
            head={`this is the name`}
            text={`Hello my friend`}
            icon={<AiFillAlipayCircle />}
          />
        </span>
        <span className={classes.p3}>
          <Polygon
            head={`this is the name`}
            text={`Hello my friend`}
            icon={<AiFillAlipayCircle />}
          />
        </span>
      </div>
    </section>
  );
};


export default MainSection