import classes from './Driven.module.css'
import driven1 from '../../../assets/images/driven1.png'
import driven2 from '../../../assets/images/driven2.png'
import driven3 from '../../../assets/images/driven3.png'
import driven4 from '../../../assets/images/driven4.png'
import { motion } from 'framer-motion'


const Driven = (props) => {
  return (
    <div>
      <main>
        <div className={classes.driven}>
            <motion.div className={classes.driven1} initial={{scale:0, opacity:0.8}} animate={{scale:1, opacity:1, transition:{duration:2 }}}><img  src={driven1} alt='Team Image'/></motion.div>
            <div  className={classes.driven2}> <img  src={driven2} alt='Team Image'/></div>

          <div className={classes.drivenText}>
            <h2> We're a results driven team</h2>
            <p>
              With Motiv8 Technologies, you harness technology to globalise and
              drive success for your business
            </p>
          </div>
          <div className={classes.driven3}><img  src={driven3} alt='Team Image'/></div>
          <div className={classes.driven4}><img  src={driven4} alt='Team Image'/></div>

        </div>
      </main>
    </div>
  );
};

export default Driven;
