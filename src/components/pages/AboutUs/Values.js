import classes from "./Values.module.css";
import { CgShapeZigzag } from "react-icons/cg";
import SingleValues from "./SingleValues";
import { GiSmartphone } from "react-icons/gi";
import {RiTeamFill} from "react-icons/ri"
import {AiFillHeart} from "react-icons/ai"
import{BiMessageSquareCheck} from "react-icons/bi"
import {HiLightBulb} from "react-icons/hi"
import {AiFillEye} from "react-icons/ai"
import { useNavigate } from "react-router-dom";

const Values = () => {
  const navigate = useNavigate()
  const clickHandler =(e)=>{
    e.preventDefault()
    navigate("/motiv8/contact_us")


  }
  return (
    <div className={classes.values}>
      <div className={classes.driven}>
        <CgShapeZigzag className="text-6xl text-pink-400" />
        <h4>We're driven by our values</h4>
        <p>
          Culture is an important part of how we operate. We Stand by six key
          pillars to success.
        </p>

        <button onClick={clickHandler}>Contact us</button>
      </div>
      <div className={classes.valuesContainer}>
      <div className={classes.singleValues}>
        <SingleValues
          text="Product"
          icon={<GiSmartphone className="text-blue-500" />}
          className="bg-blue-100"
        />
        
        <SingleValues
          text="Trust & Respect"
          icon={<AiFillHeart className="text-pink-500" />}
          className="bg-pink-100"
        />
          
         <SingleValues
          text="Innovation"
          icon={<HiLightBulb className="text-orange-500" />}
          className="bg-orange-100"
        />
          
        
      </div>
      <div className={classes.singleValues}>
         
        <SingleValues
          text="Team"
          icon={<RiTeamFill className="text-purple-500" />}
          className="bg-purple-100"
        /> 
         
         <SingleValues
          text="Customers"
          icon={<BiMessageSquareCheck className="text-green-500" />}
          className="bg-green-100"
        />
          
         <SingleValues
          text="Transparency"
          icon={<AiFillEye className="text-amber-500" />}
          className="bg-stone-100"
        />
        
      </div>

      </div>
      
     
    </div>
  );
};

export default Values;
