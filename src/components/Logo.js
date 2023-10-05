import speclogo from '../speclogo.svg';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  display: flex;              /* Use flexbox for layout */
  flex-direction: column;     /* Stack children vertically */
  align-items: flex-end;      /* Align children to the right */
  margin-right: 20px; 
  margin-top: 30px;
  
`

const LogoImg = styled.img`
    max-width: 18%;             /* Limit the maximum width of the image */
    height: auto;               /* Maintain aspect ratio when resizing */
`



// float: right;         /* Align the image to the right */
//   max-width: 20%;      /* Limit the maximum width of the image */
//   height: auto;         /* Maintain aspect ratio when resizing */
//   margin-right: 20px;
function Logo() {
    return (
        <LogoWrapper>
            <LogoImg src={speclogo} alt="logo"></LogoImg>
        </LogoWrapper>
    );
  }
  
  export default Logo;