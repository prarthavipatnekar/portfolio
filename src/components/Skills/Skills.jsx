import { Container, Card, Carousel } from "react-bootstrap";
import classes from './Skills.module.css';
import PageHeader from '../PageHeader/PageHeader';



const Skills = () => {
    return (
        <section className={classes.Skills}  >
            <Container>
                <Card className={classes.Card}>
                    <Card.Body>
                        <Card.Title>
                            <PageHeader title="Skills" />
                        </Card.Title>
                        <br></br>
                        <Carousel infinite={true} className={classes.Carousel} data-bs-theme="dark">
                            <Carousel.Item>
                                <div className={classes.Slide}>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </div>
                                <div className={classes.Slide}>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div className={classes.Slide}>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </Card.Body>
                </Card>
            </Container>
        </section>
    )
}
export default Skills;

