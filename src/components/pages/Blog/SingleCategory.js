import classes from "./SingleCategory.module.css";

const SingleCategory = (props) => {
    const className = `${props.bg} ${classes.container}`
  return (
    <div className={className}>
      <div className={classes.icon}>{props.icon}</div>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default SingleCategory;
