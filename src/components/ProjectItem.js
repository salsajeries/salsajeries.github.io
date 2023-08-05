import { Github, Website } from '../assets/images';
import GalleryScroll from './GalleryScroll';
import './ProjectItem.css'
import MechButton from './MechButton';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';


function ProjectItem(props) {

    const { project, images} = props;

    return (
        <div className='project-item'>
            <h1>{project.title}</h1>
            <h4>{project.dates}</h4>
            <h5>
                <ul>
                    {project.details.map((item) => {
                        return (
                            <li style={{ padding: '5px' }}>{item}</li>
                        );
                    })}
                </ul>
            </h5>
            <div style={{display: 'flex'}}>
                <a href={project.github} style={{textDecoration: "none", paddingLeft: '20px'}}>
                    <Chip avatar={<Avatar src={Github} />} label={"Github"} sx={{backgroundColor: '#C6AC8F'}} />
                </a>
                {project.url !== "" ? (
                    <a href={project.url} style={{textDecoration: "none", paddingLeft: '20px'}}>
                        <Chip avatar={<Avatar src={Website} />} label={"Website"} sx={{backgroundColor: '#C6AC8F'}} />
                    </a>
                ) : (
                    <></>
                )}
            </div>
            {images.size !== 0 ? (
                <GalleryScroll images={images}></GalleryScroll>
            ) : (
                <></>
            )}
        </div>
    );
}

export default ProjectItem;