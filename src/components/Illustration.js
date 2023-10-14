import React from 'react';
import styled from 'styled-components';
const CenteredContainer = styled.div`
@media screen and (max-width: 1024px) {
		display:none;
	}   
`;

const CenteredImage = styled.img`	
	width:100%;
`;


function CenteredImgComponent() {
  return (
    <CenteredContainer>
      <CenteredImage src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/KPQFKBZXHFHH3NCI4TIPY4M6YA.png" alt="" />
    </CenteredContainer>
  );
}

export default CenteredImgComponent;

