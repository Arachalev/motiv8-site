import classes from "./ContactForm.module.css";

const ContactForm = () => {
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
            <input type="text" placeholder="Your name" />
          </div>

          <div className={classes.inputContainer}>
            <label>Email</label>
            <input type="email" placeholder="john@gmail.com" />
          </div>
          <div className={classes.inputContainer}>
            <label>Phone number</label>
            <input type="tel" placeholder="+234 11 222 33 444" />
          </div>

          <div className={classes.inputContainer}>
            <label>How can we help</label>
            <textarea
              type="text-area"
              placeholder="Tell us a little about your project..."
            />
          </div>

          <div className={classes.services}>
            <h4>Services</h4>
            <div className={classes.servicesContainer}>
              <div className={classes.checkbox}>
                <input type="checkbox" value="website" />
                <label>Website design</label>
              </div>
              <div className={classes.checkbox}>
                <input type="checkbox" value="UX" />
                <label>UX design</label>
              </div>
              <div className={classes.checkbox}>
                <input type="checkbox" value="Content" />
                <label>Content creation</label>
              </div>
              <div className={classes.checkbox}>
                <input type="checkbox" value="consulting" />
                <label>Strategy & consulting</label>
              </div>
              <div className={classes.checkbox}>
                <input type="checkbox" value="research" />
                <label>User research</label>
              </div>
              <div className={classes.checkbox}>
                <input type="checkbox" value="Academy" />
                <label>The Academy</label>
              </div>
              <div className={classes.checkbox}>
                <input type="checkbox" value="Other" />
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
