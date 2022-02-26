import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import FooterTab from "./FooterTab";
import Logo from "../../assets/images/motiv8-logo.png";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const date = new Date();
  return (
    <footer className={classes.footer}>
        <div className={classes.container}>
        <div className={classes.intro}>
        <div className={classes.head}>
          <div className={classes.logo}>
            <img src={Logo} alt="Logo"></img>
          </div>
          <p>Tapping Technology</p>
        </div>
        
        <p className={classes.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore earum
          et sunt neque, commodi sapiente.
        </p>
        <div className={classes.social}>
            <span><Link to=''><BsTwitter /></Link> </span>
            <span><Link to=''><FaFacebookF  /></Link> </span>
            <span><Link to=''><FaLinkedinIn  /></Link> </span>
         
        </div>
      </div>
      <div className={classes.footerTab}>
      <FooterTab
        head={`Company`}
        link1={`About`}
        link2={`Terms of Use`}
        link3={`Privacy Policy`}
        link4={"How It Works"}
        link5={`Contact Us`} to={`#`}
      />
      <FooterTab
        head={`Get Help`}
        link1={`Support Center`}
        link2={`24h service`}
        link3={`quick chat`}
         to={`#`} 
      />
      <FooterTab
        head={`support`}
        link1={`FAQ`}
        link2={`policy`}
        link3={`business`}
         to={`#`}
      />
      <FooterTab
        head={`contact`}
        link1={`whatsapp`}
        link2={`support 24`}
         to={`#`}
      />
      </div>

        </div>
      <hr/>
      <div className={classes.copyright}>
      <p>Copyright &copy; {date.getFullYear()} </p>
      <p>Designed by Ekong</p>

      </div>
      
     
    </footer>
  );
};

export default Footer;
