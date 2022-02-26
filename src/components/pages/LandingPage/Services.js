import classes from "./Services.module.css";
import Card from "./Card";
import { SiAdobexd } from "react-icons/si";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className={classes.services}>
      <div className={classes.future}>
        <h4>Future of support with a new shape</h4>
        <p>
          Discuss your goals, determine your success metrics, identity problems
        </p>
        <button>Get started</button>
      </div>
      <div className={classes.container}>
        <Card
          span={classes.span}
          className={classes.className}
          icon={<SiAdobexd />}
          head={`UI/UX Design`}
          text={
          `
              We provide quality & unique   services
            `
          }
        >
          <p className={classes.link}>
            <Link to={`#`}>Learn More</Link>
          </p>
        </Card>
        <Card
          span={classes.span}
          className={classes.className}
          icon={<SiAdobexd />}
          head={`UI/UX Design`}
          text={
          `
              We provide quality & unique   services
            `
          }
        >
          <p className={classes.link}>
            <Link to={`#`}>Learn More</Link>
          </p>
        </Card>
        <Card
          span={classes.span}
          className={classes.className}
          icon={<SiAdobexd />}
          head={`UI/UX Design`}
          text={
          `
              We provide quality & unique   services
            `
          }
        >
          <p className={classes.link}>
            <Link to={`#`}>Learn More</Link>
          </p>
        </Card>
        <Card
          span={classes.span}
          className={classes.className}
          icon={<SiAdobexd />}
          head={`UI/UX Design`}
          text={
          `
              We provide quality & unique   services
            `
          }
        >
          <p className={classes.link}>
            <Link to={`#`}>Learn More</Link>
          </p>
        </Card>
        <Card
          span={classes.span}
          className={classes.className}
          icon={<SiAdobexd />}
          head={`UI/UX Design`}
          text={
          `
              We provide quality & unique  services
            `
          }
        >
          <p className={classes.link}>
            <Link to={`#`}>Learn More</Link>
          </p>
        </Card>
        <Card
          span={classes.span}
          className={classes.className}
          icon={<SiAdobexd />}
          head={`UI/UX Design`}
          text={
          `
              We provide quality & unique   services
            `
          }
        >
          <p className={classes.link}>
            <Link to={`#`}>Learn More</Link>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Services;
