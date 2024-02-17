import { Container, Row, Col, Card } from "react-bootstrap";
import classes from './Projects.module.css';
import PageHeader from '../PageHeader/PageHeader';

const data = [
    { title: 'Title 1', content: 'Content 1', buttonText: 'Button 1' },
    { title: 'Title 2', content: 'Content 2', buttonText: 'Button 2' },
    { title: 'Title 3', content: 'Content 3', buttonText: 'Button 3' },
    { title: 'Title 1', content: 'Content 1', buttonText: 'Button 1' },
    { title: 'Title 2', content: 'Content 2', buttonText: 'Button 2' },
    { title: 'Title 3', content: 'Content 3', buttonText: 'Button 3' },
];

const CardComponent = ({ title, content, buttonText }) => (
    <Card className={classes.Card}>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{content}</Card.Text>
            <Card.Footer className={classes.CardButton}>
                <button >View Project</button>
            </Card.Footer>
            
        </Card.Body>
    </Card>
);

const Projects = () => {
    return (
        <section className={classes.Projects}>
            <Container>
                <Row >
                    <PageHeader title="Projects" color="#efebfa" />
                </Row>
                <Row>
                    {data.map((item, index) => (
                        <Col key={index} xl={4}>
                            <CardComponent {...item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}
export default Projects;

