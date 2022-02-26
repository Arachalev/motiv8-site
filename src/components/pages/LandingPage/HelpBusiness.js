import classes from "./HelpBusiness.module.css";
import Card from "./Card";

import { SiElasticsearch } from "react-icons/si";

const HelpBusiness = () => {
  return (
    <section>
      <div className={classes.help}>
        <h4>How can we help your business? </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <div className={classes.card}>
        <Card
        span={classes.span}

          className={classes.className}
          icon={<SiElasticsearch />}
          head={`Lorem ipsum dolor sit amet   `}
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit.`}
        />
        <Card
        span={classes.span}

          className={classes.className}
          icon={<SiElasticsearch />}
          head={`Lorem ipsum dolor sit amet   `}
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit.`}
        />
        <Card
        span={classes.span}

          className={classes.className}
          icon={<SiElasticsearch />}
          head={`Lorem ipsum dolor sit amet   `}
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit.`}
        />
      </div>
    </section>
  );
};

export default HelpBusiness;
