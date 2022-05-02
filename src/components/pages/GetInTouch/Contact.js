import classes from "./Contact.module.css";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { send } from "emailjs-com";
 import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const submitFormHandler = async(toSend)=>{
    console.log("inside the submithandler function")
    const response = await send( "service_w6kybpg",
    "template_gqmfqk8",
    toSend,
    "TKVhFFTlKJq7zg455")

    if(response.status === 200)
    {
      console.log("Sucessfully sent the data to the backend")
      navigate("/motiv8/home")
    }     
  }
  return (
    <motion.div className={classes.contact} initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration:1.5}} >
           
      <div className={classes.contactInfo}>
        <ContactDetails  />
        <ContactForm confirm = {submitFormHandler} />
      </div>
    </motion.div>
  );
};

export default Contact;
