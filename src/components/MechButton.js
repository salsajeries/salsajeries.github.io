import './MechButton.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MechButton(props) {
    return (
        <div>
            <a href={props.url} style={{textDecoration: "none"}}>
                <Card className='button-card'>
                    <Card.Body style={{display: "flex"}}>
                        <Row style={{width: "fit-content"}}>
                            <Col sm={4}><img src={props.src} alt={props.alt} /></Col>
                            <Col xs={8}><Card.Text>{props.alt}</Card.Text></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </a>
        </div>
    );
}

export default MechButton;