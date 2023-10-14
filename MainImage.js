import React from 'react';
import theme from '../theme.js';
import styled from 'styled-components';

const ImageContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageContent = styled.p`
  text-align: center;
  margin-top: 10px;
`;

const MainImageComponent = styled.img`
  max-width: 100%;
  height: auto;
  padding: 1rem;
`;

const MainImage = () => {
  return (
    <ImageContainer>
      <MainImageComponent src="/once-upon-a-time-in-hollywood-margot_qt9_77846r_rgb-h_2019.webp" alt="..." /> 
      <ImageContent>
        caption, wife
      </ImageContent>
    </ImageContainer>
  );
}

export default MainImage;
