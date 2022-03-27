// import { defaults } from 'autoprefixer'
import classes from './SingleNews.module.css'


 const SingleNews = props =>{
    const className = `${classes.category}  ${props.bg}`
    return (
        <div className={classes.news}>
            <div className={className}>{props.category}</div>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
            <div className={classes.newsImage}><img src={props.image}/></div>
        </div>
    )
}


export default SingleNews