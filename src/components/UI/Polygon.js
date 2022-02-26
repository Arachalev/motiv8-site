import classes from "./Polygon.module.css";

const Polygon = (props) => {
  return (
    <svg className={classes.svg}
      width="261"
      height="250"
      viewBox="0 0 300 287"
      fill="#ffffff"
      xmlns="http://www.w3.org/2000/svg"
    >

      <path
        d="M126.928 5.62245C137.522 -0.924788 150.847 -1.15678 161.661 5.01775L282.858 74.2129C293.457 80.2646 300 91.5338 300 103.739V202.773C300 216.529 291.71 228.93 278.999 234.189L157.648 284.401C149.01 287.975 139.281 287.835 130.75 284.013L20.2169 234.504C7.98695 229.026 0.115479 216.875 0.115479 203.474V102.956C0.115479 91.1724 6.21666 80.2291 16.2402 74.034L126.928 5.62245Z"
        stroke="none"
      />
      
      <foreignObject x="8mm" y="2cm" width="100cm" height="10cm" className={classes.foreignObject}>
        <div className={classes.icon}>{props.icon}</div>
        <div className={classes.text}>
          <h4 xmlns="http://www.w3.org/1999/xhtml">{props.head}</h4>
          <p>{props.text}</p>
        </div>
      </foreignObject>
    </svg>
  );
};

export default Polygon;
