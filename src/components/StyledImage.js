import './StyledImage.css'

function StyledImage(props) {

    const { src, alt, width, height, padding } = props;

    return (
        <div style={{ padding: padding }}>
            <img 
                src={src}
                alt={alt}
                className='styled-img'
                style={{ font: 'white', height: height, width: width }}
            />
        </div>
    );
}

export default StyledImage;