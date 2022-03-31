import classes from "./Services.module.css";
import Card from "./Card";
import { SiAdobexd } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";

const Services = () => {
  let navigate = useNavigate();
  const toServices = ()=>{
    navigate("/motiv8/our_services")
  }
  return (
    <div className={classes.services}>
      <div className={classes.future}>
        <h4>A glimpse into our Academy</h4>
        <p>
          Upskilling you with modern technologies to keep you ahead in your proffession
        </p>
        <button onClick={toServices}>Get started</button>
      </div>
      <div className={classes.container}>
        <Card
          span={classes.span}
          className={classes.className}
          icon={<SiAdobexd />}
          head={`UI/UX Design`}
          text={
          `
              Build clean and appealing user interfaces for modern technoogies.
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
          head={`Web Development`}
          text={
          `
            Build modern responsive websites with the latest technology stack
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
          head={`Networking`}
          text={
          `
              Understand the basics of networking in this digital era.
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
          head={`Graphics Designing`}
          text={
          `
              Get to be confident with Adobe suite
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
          head={`Photography`}
          text={
          `
             Master the lens and create stunning images!
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
          head={`Digital Marketing`}
          text={
          `
              Get the right tools to be a digital marketer
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
