import React from 'react';
import styled from 'styled-components';

const TitleText = styled.h1`
  color: #000;
  font-family: Special Elite;
  font-size: 6rem;
  font-style: normal;
  font-weight: 400;
  text-align:left;
;`

const TitleContainer = styled.div`
  margin: 100px; /* Adjust the margin as needed */
`;

function Title() {
  return (
    <header>
      <TitleContainer>
        <TitleText>Homecoming</TitleText>
        <TitleText>2023</TitleText>
      </TitleContainer>
      {/* Add navigation links, buttons, or any other content here */}
    </header>
  );
}

export default Title;