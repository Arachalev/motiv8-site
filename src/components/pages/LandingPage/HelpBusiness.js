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
          head={`Integrating innovation  `}
          text={`Using technology to seamlessly run every aspect of your business`}
        />
        <Card
        span={classes.span}

          className={classes.className}
          icon={<SiElasticsearch />}
          head={`Bringing you your target audience  `}
          text={`Harnessing the conncetivity of the internet to bring your next clients right to you.`}
        />
        <Card
        span={classes.span}

          className={classes.className}
          icon={<SiElasticsearch />}
          head={`Making your business future proof `}
          text={`Integrating technology to make your business future proof`}
        />
      </div>
    </section>
  );
};

export default HelpBusiness;
