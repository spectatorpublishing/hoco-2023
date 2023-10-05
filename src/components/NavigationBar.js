import React from 'react';
import styled from 'styled-components';
import filmlong from '../filmlong.svg';


const NavContainer = styled.nav`
    background-image: url(${filmlong});
    background-size: 100%;
    width:100%;
    background-repeat: repeat-x;
    background-position: left center, right center;
    display: flex;
    justify-content:center;
    align-items: center;
    height: 150px; /* make sure image is not cut off */
`;

const NavBox = styled.div`
    display: inline-flex;
    padding: 8px 0px;
    justify-content: flex-end;
    align-items: center;
`;

const StyledLink = styled.a`
    font-family: Special Elite;
    text-decoration: none; /* Remove underlines */
    color: #333; /* Set the desired text color */
    margin-right: 10px;
    margin-left:10px;
`


function NavigationBar() {
  return (
    <NavContainer>
      <ul style={{ listStyleType: 'none', padding: 0}}>
        <NavBox>
        <li><StyledLink href="/">Home</StyledLink></li>
        <li><StyledLink href="/university">University</StyledLink></li>
        <li>< StyledLink href="/city-news">City News</StyledLink></li>
        <li><StyledLink href="/sports">Sports</StyledLink></li>
        <li><StyledLink href="/a-c">A&C</StyledLink></li>
        <li><StyledLink href="/opinion">Opinion</StyledLink></li>
        <li><StyledLink href="/spectrum">Spectrum</StyledLink></li>
        </NavBox>
      </ul>
    </NavContainer>
  );
}

export default NavigationBar;