import './MechButton.css'
import Card from 'react-bootstrap/Card';

function MechButton(props) {

    const { url, src, alt, width, height } = props;

    return (
        <div>
            <a href={url} style={{textDecoration: "none"}}>
                <Card className='button-card' style={{width: width, height: height}}>
                    <Card.Body style={{display: "flex", justifyContent: 'center'}}>
                        <img src={src} alt={alt} width={width} />
                    </Card.Body>
                </Card>
            </a>
        </div>
    );
}

export default MechButton;