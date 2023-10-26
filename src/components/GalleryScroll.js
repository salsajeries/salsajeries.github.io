import './GalleryScroll.css'
import StyledImage from './StyledImage';



function GalleryScroll(props) {

    const { images, url } = props;

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <div id='slider' style={{ width: "100%", height: '50%', overflowX: "scroll", display: "flex", alignItems: 'center', padding: '20px' }}>
                {images.map((img) => {
                    return (
                        <a href={url}>
                            <StyledImage src={img} height={'25em'} width={'auto'} padding={'30px'}></StyledImage>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

export default GalleryScroll;