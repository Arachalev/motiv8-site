import classes from './Button.module.css'


const Button = props=>{

    const className = `${classes.button} ${props.className}`
return(
    <button className={className} >{props.childre}</button>
)
}
export default Button