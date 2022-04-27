import classes from "./Team.module.css";
import SingleTeam from "./SingleTeam";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import team1 from "../../../assets/images/team1.jpg";
import team2 from "../../../assets/images/team2.jpg";
import team3 from "../../../assets/images/team3.jpg";
import team4 from "../../../assets/images/team4.jpg";
import team5 from "../../../assets/images/team5.jpg";
import team6 from "../../../assets/images/team6.jpg";

 

const Team = (props) => {
  const location = useLocation()
  useEffect(()=>{
    
    if(location.hash){
      let elem = document.getElementById(location.hash.slice(1))
      if(elem)
      {
        elem.scrollIntoView({behavior:"smooth"})
      }
      else{
        window.scrollTo({top:0, left:0, behavior:"smooth"})
      }
    }
    console.log(location)
  },[location])

  return (
    <div className={classes.team}>
      <div className={classes.intro} id={props.id}>
      <h4>Meet our team</h4>
      <p>
        Our philosophy is simple - hire a team of diverse, passionate people and
        foster a culture <br/> that empowers you to do your best work.{" "}
      </p>


      </div>
      
      <div className={classes.mates}>
        <SingleTeam
          image={team1}
          name="Sayo Akindule"
          position="Team Leader"
          about="Lead engineering team at Figma, Pitch and Protocol Labs"
        />
         <SingleTeam
          image={team2}
          name="Sayo Akindule"
          position="Team Leader"
          about="Lead engineering team at Figma, Pitch and Protocol Labs"
        />
         <SingleTeam
          image={team3}
          name="Sayo Akindule"
          position="Team Leader"
          about="Lead engineering team at Figma, Pitch and Protocol Labs"
        />
         <SingleTeam
          image={team4}
          name="Sayo Akindule"
          position="Team Leader"
          about="Lead engineering team at Figma, Pitch and Protocol Labs"
        />
         <SingleTeam
          image={team5}
          name="Sayo Akindule"
          position="Team Leader"
          about="Lead engineering team at Figma, Pitch and Protocol Labs"
        />
         <SingleTeam
          image={team6}
          name="Sayo Akindule"
          position="Team Leader"
          about="Lead engineering team at Figma, Pitch and Protocol Labs"
        />
      </div>
    </div>
  );
};

export default Team;
