import classes from "./Contact.module.css";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
 

const Contact = () => {
  return (
    <motion.div className={classes.contact} initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration:1.5}} >
           
      <div className={classes.contactInfo}>
        <ContactDetails />
        <ContactForm />
      </div>
    </motion.div>
  );
};

export default Contact;
