import React from 'react';
import styled from 'styled-components';
import filmlong from '../filmlong.svg';
import single from '../single.png';

//background-image: url(${filmlong});
const NavContainer = styled.nav`
    background-size: 100%;
    background-size: auto 100%;
    width:100%;
    display: flex;
    justify-content:center;
    align-items: center;
    padding-top: 30px;
`;

const NavBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

const StyledLink = styled.a`
    font-family: Special Elite;
    background-image: url(${single});
    background-size:cover;
    padding: 40px 40px;
    text-decoration: none; /* Remove underlines */
    color: #333; /* Set the desired text color */
    align-items: center;
    flex:1;
`


function NavigationBar() {
  return (
    <NavContainer>
      <ul style={{ listStyleType: 'none'}}>
        <NavBox>
        <li><StyledLink></StyledLink></li>
        <li><StyledLink></StyledLink></li>
        <li><StyledLink></StyledLink></li>
        <li><StyledLink></StyledLink></li>
        <li><StyledLink href="/">Home</StyledLink></li>
        <li><StyledLink href="/university">Uni</StyledLink></li>
        <li>< StyledLink href="/city-news">City</StyledLink></li>
        <li><StyledLink href="/sports">Sports</StyledLink></li>
        <li><StyledLink href="/a-c">A&C</StyledLink></li>
        <li><StyledLink href="/opinion">Opinion</StyledLink></li>
        <li><StyledLink href="/spectrum">Spectrum</StyledLink></li>
        <li><StyledLink></StyledLink></li>
        <li><StyledLink></StyledLink></li>
        <li><StyledLink></StyledLink></li>
        <li><StyledLink></StyledLink></li>
        </NavBox>
      </ul>
    </NavContainer>
  );
}

export default NavigationBar;