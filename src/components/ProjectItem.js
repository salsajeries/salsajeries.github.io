import { Github, Website } from '../assets/images';
import GalleryScroll from './GalleryScroll';
import './ProjectItem.css'
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';


function ProjectItem(props) {

    const { project, images } = props;

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
            <br></br>
            {images.length !== 0 ? (
                <h5><i>Scroll or swipe in the gallery to view more screenshots.</i></h5>
            ) : (
                <></>
            )}
            {images.length !== 0 ? (
                project.url !== '' ? (
                    <GalleryScroll images={images} url={project.url}></GalleryScroll>
                ) : (
                    <GalleryScroll images={images} url={project.github}></GalleryScroll>
                )
            ) : (
                <></>
            )}
        </div>
    );
}

export default ProjectItem;