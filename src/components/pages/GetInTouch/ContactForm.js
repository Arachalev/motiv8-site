import classes from "./ContactForm.module.css";
import { useRef, useState, useEffect } from "react";
import { send } from "emailjs-com";

const ContactForm = () => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    email: true,
    number: true,
    help: true,
  });

  const [toSend, setToSend] = useState({
    from_name: "",
    phone_number: "",
    message: "",
    email_address: "",
  });

  // const handleChange = (e) =>{
  //   setToSend({...toSend, [e.target.name]:e.target.value})
  // }

  const nameRef = useRef(" ");
  const emailRef = useRef(" ");
  const numberRef = useRef(" ");
  const helpRef = useRef(" ");
  const websiteRef = useRef(" ");
  const contentRef = useRef(" ");
  const uxRef = useRef(" ");
  const researchRef = useRef(" ");
  const consultingRef = useRef(" ");
  const otherRef = useRef(" ");
  const academyRef = useRef(" ");

  const hasAt = (value) => value.trim().includes("@");
  // const hasValue = (value) => value.trim() !== "";
  const sixChars = (value) => value.trim().length > 6;

  
    
   

 

  const formHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredNumber = numberRef.current.value;
    const enteredHelp = helpRef.current.value;
    const enteredWebsite = websiteRef.current.value;
    const enteredContent = contentRef.current.value;
    const enteredUx = uxRef.current.value;
    const enteredResearch = researchRef.current.value;
    const enteredConsulting = consultingRef.current.value;
    const enteredOther = otherRef.current.value;
    const enteredAcademy = academyRef.current.value;

    const enteredNameIsValid = sixChars(enteredName);
    const enteredEmailIsValid = hasAt(enteredEmail);
    const enteredNumberIsValid = sixChars(enteredNumber);
    const enteredHelpIsValid = sixChars(enteredHelp);

    setFormInputValidity({
      name: enteredNameIsValid,
      number: enteredNumberIsValid,
      email: enteredEmailIsValid,
      help: enteredHelpIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredNumberIsValid &&
      enteredHelpIsValid;

    if (formIsValid) {
      setToSend(
        {
          from_name: enteredName,
          phone_number:enteredNumber,
          email_address:enteredEmail,
          message:enteredHelp
  
        })

     
    }
    else
    {
      return;
    }
    console.log(formIsValid)

   try {

     
       send(
        "service_w6kybpg",
       "template_gqmfqk8",
       toSend,
       "TKVhFFTlKJq7zg455"
       )
       .then((response)=>{
         console.log("Success", response.status, response.text)
       })
      
     
   } catch (error) {
    // .catch((err)=>{
    //   console.log("failed", err)
    // })
  
      console.log("failed", error)
    
     
   }

   if(toSend.from_name)
   {

     nameRef.current.value = "";
      emailRef.current.value = "";
      numberRef.current.value = "";
      helpRef.current.value = "";
   }
    

    
    
      
 

    console.log(toSend.from_name)


  

   

    
  };

  const nameClass = `${classes.inputContainer} ${
    formInputValidity.name ? " " : classes.invalid
  }`;
  const emailClass = `${classes.inputContainer} ${
    formInputValidity.email ? " " : classes.invalid
  }`;
  const numberClass = `${classes.inputContainer} ${
    formInputValidity.number ? " " : classes.invalid
  }`;
  const helpClass = `${classes.inputContainer} ${
    formInputValidity.help ? " " : classes.invalid
  }`;

  return (
    <div className={classes.container}>
      <h4 className={classes.title}> Level up your brand</h4>
      <p className={classes.reach}>
        You can reach us anytime via <span>motiv8Technologies@gmail.com</span>
      </p>

      <div className={classes.formContainer}>
        <form className={classes.form} onSubmit={formHandler}>
          <div className={nameClass}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              // value={toSend.from_name}
              // onChange={handleChange}
              placeholder="Your name"
              ref={nameRef}
            />
            {!formInputValidity.name && (
              <p>Please your name must exceed 6 characters</p>
            )}
          </div>

          <div className={emailClass}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              // value={toSend.email_address}
              // onChange={handleChange}
              placeholder="john@gmail.com"
              ref={emailRef}
            />
            {!formInputValidity.email && (
              <p>Please your email must contain "@"</p>
            )}
          </div>
          <div className={numberClass}>
            <label htmlFor="tel">Phone number</label>
            <input
              type="tel"
              placeholder="+234 11 222 33 444"
              // value={toSend.phone_number}
              // onChange={handleChange}
              ref={numberRef}
              id="tel"
            />
            {!formInputValidity.number && (
              <p>Please your number must have more than 6 characters</p>
            )}
          </div>

          <div className={helpClass}>
            <label htmlFor="textarea">How can we help</label>
            <textarea
              id="textarea"
              // value={toSend.message}
              // onChange={handleChange}
              type="text-area"
              placeholder="Tell us a little about your project..."
              ref={helpRef}
            />
            {!formInputValidity.help && (
              <p>Please your message must be more than 6 charachters</p>
            )}
          </div>

          <div className={classes.services}>
            <h4>Services</h4>
            <div className={classes.servicesContainer}>
              <div className={classes.checkbox}>
                <input
                  id="website"
                  type="checkbox"
                  value="website"
                  ref={websiteRef}
                />
                <label htmlFor="website">Website design</label>
              </div>
              <div className={classes.checkbox}>
                <input id="ux" type="checkbox" value="UX" ref={uxRef} />
                <label htmlFor="ux">UX design</label>
              </div>
              <div className={classes.checkbox}>
                <input
                  id="content"
                  type="checkbox"
                  value="Content"
                  ref={contentRef}
                />
                <label htmlFor="content">Content creation</label>
              </div>
              <div className={classes.checkbox}>
                <input
                  id="consulting"
                  type="checkbox"
                  value="consulting"
                  ref={consultingRef}
                />
                <label htmlFor="consulting">Strategy & consulting</label>
              </div>
              <div className={classes.checkbox}>
                <input
                  id="research"
                  type="checkbox"
                  value="research"
                  ref={researchRef}
                />
                <label htmlFor="research">User research</label>
              </div>
              <div className={classes.checkbox}>
                <input
                  id="academy"
                  type="checkbox"
                  value="Academy"
                  ref={academyRef}
                />
                <label htmlFor="academy">The Academy</label>
              </div>
              <div className={classes.checkbox}>
                <input
                  id="other"
                  type="checkbox"
                  value="Other"
                  ref={otherRef}
                />
                <label htmlFor="other">Other</label>
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
