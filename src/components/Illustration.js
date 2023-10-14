import React from 'react';
import styled from 'styled-components';
import Illo from "../hoco-image.png"

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
      <CenteredImage src={Illo} alt="" />
    </CenteredContainer>
  );
}

export default CenteredImgComponent;

