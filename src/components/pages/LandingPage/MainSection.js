// import Polygon from "../../UI/Polygon";
import classes from "./MainSection.module.css";
import { useNavigate } from "react-router-dom";
// import { AiFillAlipayCircle } from "react-icons/ai";
import landingLogo from '../../../assets/images/undraw_connection_re_lcud.svg'


const MainSection = () => {
  const navigate = useNavigate()

  const toContactUs = ()=>{
    navigate("/motiv8/contact_us")
  }
  return (
    <section className={classes.main}>
      <div className={classes.landing}>
        <h4> Tapping Into technology to change your business narrative</h4>
        <p>
          No business it too small to use that advantage, all you need is take a
          step using our collaborative engineer-driven team that will get you
          there.
        </p>

         <div className={classes.ctaBtn}>
           <button onClick={toContactUs}>
              Get in touch with us 
             
           </button>

         </div>
      </div>
      <div className={classes.polygon}>
        {/* <span className={classes.p1}>
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
        </span> */}
      </div>
      <div className={classes.landingLogo}>
        <img src={landingLogo} alt='logo'/>

      </div>
    </section>
  );
};


export default MainSection