// import Polygon from "../../UI/Polygon";
import classes from "./MainSection.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import Typed from "typed.js"
import { motion } from "framer-motion";
// import { AiFillAlipayCircle } from "react-icons/ai";
import landingLogo from '../../../assets/images/undraw_connection_re_lcud.svg'


const MainSection = () => {
  const navigate = useNavigate()
  const el = useRef(null)
  useEffect(()=>{
    const typed = new Typed(el.current,{
      strings:[ "boost sales", "improve learning","change your business narrative"],
      startDelay:300,
      typeSpeed:100,
      backSpeed:100,
      backDelay:150,
      smartBackspace:true,
      loop:true,
      showCursor:false
    })
    //Destroying

    return ()=>{
      typed.destroy()
    }
  },[])

  const toContactUs = ()=>{
    navigate("/motiv8/contact_us")
  }
  return (
    <section className={classes.main}>
      <div className={classes.landing}>
        <h4> Tapping into technology to  <span ref={el}>innovate.. </span></h4>
        {/**/}
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