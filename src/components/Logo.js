import speclogo from '../speclogo.svg';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  display: flex;              /* Use flexbox for layout */
  flex-direction: column;     /* Stack children vertically */
  align-items: center;      /* Align children to the right */
  padding-top:2rem;
  
 &:hover{
	cursor:pointer;
 } 
 @media screen and (max-width: 1024px) {
		display:none;
	}
`

const LogoImg = styled.img`
    max-width: 18rem;             /* Limit the maximum width of the image */
    height: auto;               /* Maintain aspect ratio when resizing */
`

function Logo() {
    return (
        <LogoWrapper>
            <a href="https://www.columbiaspectator.com/"/>
				<LogoImg src="https://spec-imagehosting.s3.amazonaws.com/CDSwhitemasthead.png" alt="logo"/>
			<a/>
		</LogoWrapper>
    );
  }
  
  export default Logo;