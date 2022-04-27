import classes from "./SingleCategory.module.css";

const SingleCategory = (props) => {
  const className = `${props.bg} ${classes.container}`;

  function bgMaker(enteredBg) {
    let bgArray = enteredBg.split("-");
    let bgPrime = bgArray[2];
    let newBg = bgPrime * 2;
    bgArray.pop();
    bgArray.push(String(newBg));
    let h4Bg = bgArray.join("-");
    return h4Bg;
  }

  const h4Bg = bgMaker(props.bg);
  const titleClass = `${h4Bg}`;
  return (
    <div className={className}>
      <div className={classes.icon}>{props.icon}</div>
      <h4 className={titleClass}>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default SingleCategory;
