import React from 'react';
import styled from 'styled-components';
import rect from './../rect.PNG';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;  
  align-items: center;     

`;

const CenteredImage = styled.img`
margin-top: -5%;
  width: 90%;
  height: 100%;
  object-fit: cover;
`;


function CenteredImgComponent() {
  return (
    <CenteredContainer>
      <CenteredImage src={rect} alt="Description" />
    </CenteredContainer>
  );
}

export default CenteredImgComponent;

