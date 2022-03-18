import classes from './SingleValues.module.css'

const SingleValues = (props)=>{
    const className = `${props.className} ${classes.icon}`
    return(
        <div className={classes.values}> 
            <div className={className}><span >{props.icon}</span></div>
            <p >{props.text}</p>
        </div>
    )
}

export default SingleValues