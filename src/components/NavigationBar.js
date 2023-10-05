import React from 'react';
import styled from 'styled-components';

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
    <nav>
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
    </nav>
  );
}

export default NavigationBar;