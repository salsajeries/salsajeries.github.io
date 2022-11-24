import './CardScroll.css'
import Card from 'react-bootstrap/Card';


const Container = (props) => {
    return (
        <div>
            <a href={props.url} style={{textDecoration: "none"}}>
                <Card className='project-card'>
                    <Card.Body>
                        <Card.Title style={{fontSize: "2em"}}>{props.title}</Card.Title>
                        <Card.Subtitle style={{fontSize: "1.25em"}} className="mb-2 text-muted">{props.dates}</Card.Subtitle>
                        <Card.Text>{props.details}</Card.Text>
                    </Card.Body>
                </Card>
            </a>
        </div>
    );
};

function CardScroll() {

    const projects = [
        {
            title: "UAH QuietRoom",
            dates: "Aug 2022 - Present",
            url: "#projects",
            details: (
                <ul>
                    <li>Web application that displays dynamic UAH classroom availability for students to find study rooms on campus</li>
                    <li>Uses React.js for front-end and .NET for back-end</li>
                    <li>Uses Google Maps API for locational data on interactive map</li>
                </ul>
            )
        },
        {
            title: "Adventure to the Sun",
            dates: "Oct 2022",
            url: "https://github.com/salsajeries/spaceapps-2022",
            details: (
                <ul>
                    <li>48-hour simulative game that allows the user to play as the Parker Solar Probe on its mission</li>
                    <li>Raw data from the solar probe is used to generate solar particles containing velocity and temperature, which the player must collect for points</li>
                    <li>3D game developed in Godot game engine</li>
                </ul>
            )
        },
        {
            title: "Pomodoro Widget",
            dates: "May 2022 - Jun 2022",
            url: "https://salsajeries.github.io/pomodoro-notion/",
            details: (
                <ul>
                    <li>Web application with built-in timer for Pomodoro study technique, task list, Spotify playlist, and responsive feedback for completion of tasks</li>
                    <li>Uses Bootstrap for GUI features</li>
                </ul>
            )
        },
        {
            title: "SafeStay",
            dates: "Mar 2022",
            url: "https://github.com/salsajeries/GigaHurtzFrontEnd",
            details: (
                <ul>
                    <li>38-hour web application that connects refugees with host families based on user preferences</li>
                    <li>Compatability algorithm based on a point system generates a compatability score for match rankings</li>
                </ul>
            )
        }
    ];

    return (
        <div className='cardScroll'>
            <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
                {projects.map((p) => (
                    <Container
                        title={p.title}
                        dates={p.dates}
                        url={p.url}
                        details={p.details}
                    />
                ))}
            </div>
        </div>
    );
}

export default CardScroll;