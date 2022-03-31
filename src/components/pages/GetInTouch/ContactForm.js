import classes from "./ContactForm.module.css";
import { useRef, useState } from "react";

const ContactForm = () => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    email: true,
    number: true,
    help: true,
  });

  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const helpRef = useRef();
  const websiteRef = useRef()
  const contentRef = useRef()
  const uxRef = useRef()
  const researchRef = useRef()
  const consultingRef = useRef();
  const otherRef = useRef()
  const academyRef = useRef()

  const hasAt = (value) => value.trim().includes("@");
  const hasValue = (value) => value.trim() !== "";

  const enteredName = nameRef.current.value;
  const enteredEmail = emailRef.current.value;
  const enteredNumber = numberRef.current.value;
  const enteredHelp = helpRef.current.value;
  const enteredWebsite = websiteRef.current.value;
  console.log(enteredWebsite)

  const enteredNameIsValid = hasValue(enteredName);
  const enteredNumberIsValid = hasValue(enteredNumber);
  const enteredEmailIsValid = hasAt(enteredEmail);
  const enteredHelpIsValid = hasValue(enteredHelp);

  setFormInputValidity({
    name: enteredNameIsValid,
    email: enteredEmailIsValid,
    number: enteredNumberIsValid,
    help: enteredHelpIsValid,
  });

  const formIsValid =
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredNumberIsValid &&
    enteredHelpIsValid;


    if(!formIsValid)
    {
      return;
    }

    props.onConfirm(
      {
        name:enteredName,
        number:enteredNumber,
        email:enteredEmail,
        help:enteredHelp
      }
    )

  return (
    <div className={classes.container}>
      <h4 className={classes.title}> Level up your brand</h4>
      <p className={classes.reach}>
        You can reach us anytime via <span>motiv8Technologies@gmail.com</span>
      </p>

      <div className={classes.formContainer}>
        <form className={classes.form}>
          <div className={classes.inputContainer}>
            <label>Name</label>
            <input type="text" placeholder="Your name" ref={nameRef} />
          </div>

          <div className={classes.inputContainer}>
            <label>Email</label>
            <input type="email" placeholder="john@gmail.com" ref={emailRef} />
          </div>
          <div className={classes.inputContainer}>
            <label>Phone number</label>
            <input type="tel" placeholder="+234 11 222 33 444" ref={numberRef} />
          </div>

          <div className={classes.inputContainer}>
            <label>How can we help</label>
            <textarea
              type="text-area"
              placeholder="Tell us a little about your project..."
              ref={helpRef}
            />
          </div>

          <div className={classes.services}>
            <h4>Services</h4>
            <div className={classes.servicesContainer}>
              <div className={classes.checkbox}>
                <input type="checkbox" value="website" ref={websiteRef} />
                <label>Website design</label>
              </div>
              <div className={classes.checkbox}>
                <input type="checkbox" value="UX" ref={uxRef} />
                <label>UX design</label>
              </div>
              <div className={classes.checkbox}>
                <input type="checkbox" value="Content" ref={contentRef} />
                <label>Content creation</label>
              </div>
              <div className={classes.checkbox}>
                <input type="checkbox" value="consulting" ref={consultingRef}/>
                <label>Strategy & consulting</label>
              </div>
              <div className={classes.checkbox}>
                <input type="checkbox" value="research" ref={researchRef} />
                <label>User research</label>
              </div>
              <div className={classes.checkbox}>
                <input type="checkbox" value="Academy" ref={academyRef} />
                <label>The Academy</label>
              </div>
              <div className={classes.checkbox}>
                <input type="checkbox" value="Other" ref={otherRef} />
                <label>Other</label>
              </div>
            </div>
          </div>
          <button type="submit">Get started</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
