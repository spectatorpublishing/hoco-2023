import myImage from './lights.png'
import styled from 'styled-components';

image_container = styled.div`
    width: 100%;    
`

function TapedPicture() {
    return (
        <div>
            <img
                src={myImage}
            />
        </div>
    )
}

export default TapedPicture;