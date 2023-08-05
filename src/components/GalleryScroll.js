import './GalleryScroll.css'
import StyledImage from './StyledImage';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



function GalleryScroll(props) {

    const { images } = props;

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <div id='slider' style={{ width: "100%", height: '50%', overflowX: "scroll", display: "flex", alignItems: 'center', padding: '20px' }}>
                {images.map((img) => {
                    return (
                        <StyledImage src={img} height={'50vh'} width={'auto'} padding={'30px'}></StyledImage>
                    );
                })}
            </div>
        </div>
    );
}

export default GalleryScroll;