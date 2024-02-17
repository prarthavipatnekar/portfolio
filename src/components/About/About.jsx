import classes from './About.module.css';
import Me from './../../assets/myProfile.png'
import PageHeader from '../PageHeader/PageHeader';

const About = () => {
    return (
        <div className={classes.AboutMe}>
            <PageHeader title="About Me" />
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>Hello, I'm Prarthavi!</h2> <br />
                        I am software developer based in South Dakota, USA. My hometown in
                        located in Goa, India.
                   
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Me} src={Me} alt="Prarthavi Patnekar"></img>
                </div>
            </div>
       </div>
    );
  };
  
export default About;