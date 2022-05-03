import classes from "./Contact.module.css";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { send } from "emailjs-com";
 import { useNavigate } from "react-router-dom";
 import { useState, Fragment } from "react";

const Contact = () => {


  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting]=useState(false)


  const navigate = useNavigate();


  const submitFormHandler = async(toSend)=>{
    setIsSubmitting(true)
    console.log("inside the submithandler function")
    const response = await send( "service_w6kybpg",
    "template_gqmfqk8",
    toSend,
    "TKVhFFTlKJq7zg455")

    if(response.status === 200)
    {
      console.log("Sucessfully sent the data to the backend")
       
    }    
    
    setIsSubmitting(false)
    setHasSubmitted(true)
  }


  const homeHandler = ()=>{
    navigate("/motiv8/home")
  }

  const isSubmittingContact = (
    <div className={classes.backDrop}>
      <p>Sending contact details....</p>
    </div>
  )
  
  const didSubmitContact=(
    <div className={classes.backDrop}>
      <p>Successfully sent !! You will be contacted soon.</p>
      <button onClick={homeHandler}>Return to home</button>
    </div>
  )

  const contactContent = (
    <motion.div className={classes.contact} initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration:1.5}} >
           
      <div className={classes.contactInfo}>
        <ContactDetails  />
        <ContactForm confirm = {submitFormHandler} />
      </div>
      {/* {isSubmitting && isSubmittingContact} */}
      {/* {!isSubmitting && hasSubmitted && didSubmitContact} */}
    </motion.div>
  )



 






  return (
    <Fragment>

      {!isSubmitting && !hasSubmitted && contactContent}
      {isSubmitting && isSubmittingContact}
      {!isSubmitting && hasSubmitted && didSubmitContact}
      {/* {contactContent} */}

      
    
    </Fragment>

    
  );
};

export default Contact;
