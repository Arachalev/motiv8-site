import classes from "./ContactDetails.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";

const ContactDetails = () => {
  return (
    <div className={classes.contactInfo}>
      <div className={classes.welcome}>
        <h3>Get in touch</h3>

        <p>
          We'd love to hear from you. Our friendly team is always here to chat.
        </p>
      </div>
      <div className={classes.contactContainer}>
        <div className={classes.container}>
          <HiOutlineMail className="text-3xl " />
          <div className={classes.details}>
            <h4>Chat with us</h4>
            <p>Our friendly team is here to help</p>
            <p className={classes.info}>motiv8Technologies@gmail.com</p>
          </div>
        </div>
        <div className={classes.container}>
          <IoLocationOutline className="text-3xl " />
          <div className={classes.details}>
            <h4>Office</h4>
            <p>Come say hello at our office HQ.</p>
            <p className={classes.info}>1001 Bosso road, Minna, Niger</p>
          </div>
        </div>
        <div className={classes.container}>
          <BsTelephone className="text-3xl " />
          <div className={classes.details}>
            <h4>Phone</h4>
            <p> Mon-Fri from 8am to 5pm</p>
            <p className={classes.info}>+234 11 222 33 444</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
