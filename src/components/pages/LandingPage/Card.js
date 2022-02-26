import classes from './Card.module.css'


const Card =(props)=>{

    const className = `${props.className} ${classes.card}`
    return(
         
            <div className={className}>
                <span className={props.span}>{props.icon}</span> 
                 <h4 className={classes.head}>{props.head}</h4>
                 <p className={classes.text}>{props.text}</p>
                 <div className={ classes.childClass}>{props.children}</div>
            </div>

         
    )
}


export default Card