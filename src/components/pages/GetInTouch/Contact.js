import classes from "./Contact.module.css";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className={classes.contact}>
      <div className={classes.contactInfo}>
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
