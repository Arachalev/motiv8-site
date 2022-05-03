import classes from "./ContactForm.module.css";
import { useRef, useState, useEffect } from "react";
import useHook from "../../../hooks/useHook";
 

const ContactForm = (props) => {
 
  const{
    userInput:name,
    hasError:nameHasError,
    enteredInputHandler:nameHandler,
    onBlurHandler:nameBlurHandler,
    reset:resetName
  }=useHook(name=>name.trim()!="");

  const{
    userInput:email,
    hasError:emailHasError,
    enteredInputHandler:emailHandler,
    onBlurHandler:emailBlurHandler,
    reset:reserEmail
  }=useHook(email=>email.trim().includes("@"))

  const{
    userInput:number,
    hasError:numberHasError,
    enteredInputHandler:numberHandler,
    onBlurHandler:numberBlurHandler,
    reset:resetNumber
  }=useHook(number=>number.length >= 6)

  const{
    userInput:help,
    hasError:helpHasError,
    enteredInputHandler:helpHandler,
    onBlurHandler:helpBlurHandler,
    reset:resetHelp
  }=useHook(help=>help.length>=10)

  let formState = emailHasError || nameHasError || numberHasError || helpHasError

  
  const websiteRef = useRef(" ");
  const contentRef = useRef(" ");
  const uxRef = useRef(" ");
  const researchRef = useRef(" ");
  const consultingRef = useRef(" ");
  const otherRef = useRef(" ");
  const academyRef = useRef(" ");
 
 
  const formHandler = (event) => {
    event.preventDefault();
 
    const enteredWebsite = websiteRef.current.value;
    const enteredContent = contentRef.current.value;
    const enteredUx = uxRef.current.value;
    const enteredResearch = researchRef.current.value;
    const enteredConsulting = consultingRef.current.value;
    const enteredOther = otherRef.current.value;
    const enteredAcademy = academyRef.current.value;
 
 
    if(formState){
    return
    }    
    
    formState = true;
    props.confirm(
      {
      from_name: name,
      phone_number: number,
      email_address: email,
      message: help
      }
    )

    reserEmail()
    resetName()
    resetHelp()
    resetNumber()

    formState = false   
    console.log(emailBlurHandler) 
  };

  const nameClass = `${classes.inputContainer} ${
    !nameHasError ? " " : classes.invalid
  }`;
  const emailClass = `${classes.inputContainer} ${
    !emailHasError ? " " : classes.invalid
  }`;
  const numberClass = `${classes.inputContainer} ${
    !numberHasError ? " " : classes.invalid
  }`;
  const helpClass = `${classes.inputContainer} ${
    !helpHasError ? " " : classes.invalid
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
              onChange={nameHandler}
              onBlur={nameBlurHandler}
              value={name}
              placeholder="John Doe"
              // ref={nameRef}
            />
            {nameHasError && (
              <p className = {classes.invalid}>Please your name must exceed 6 characters</p>
            )}
          </div>

          <div className={emailClass}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email" 
              placeholder="john@gmail.com"
              onChange={emailHandler}
              onBlur={emailBlurHandler}
              value={email}
              // ref={emailRef}
            />
            {emailHasError && (
              <p className = {classes.invalid}>Please your email must contain "@"</p>
            )}
          </div>
          <div className={numberClass}>
            <label htmlFor="tel">Phone number</label>
            <input
              type="tel"
              placeholder="+234 11 222 33 444" 
              // ref={numberRef}
              id="tel"
              onChange={numberHandler}
              onBlur={numberBlurHandler}
              value={number}
            />
            {numberHasError && (
              <p className = {classes.invalid}>Please your number must have more than 6 characters</p>
            )}
          </div>

          <div className={helpClass}>
            <label htmlFor="textarea">How can we help</label>
            <textarea
              id="textarea" 
              type="text-area"
              placeholder="Tell us a little about your project..."
              // ref={helpRef}
              onChange={helpHandler}
              onBlur={helpBlurHandler}
              value={help}

            />
            {helpHasError && (
              <p className = {classes.invalid}>Please your message must be more than 6 charachters</p>
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
