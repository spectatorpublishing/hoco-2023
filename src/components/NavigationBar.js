import React from 'react';
import styled from 'styled-components';
import filmlong from '../filmlong.svg';
import button from '../button.svg';

//background-image: url(${filmlong});
const NavContainer = styled.nav`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
`;

const NavBox = styled.div`
    display: flex;
    align-items: center;
`;

const StyledLink = styled.a`
    font-family: Special Elite;
    background-image: url(${ button });
    background-size: cover;
    width: 187px;
    height: 127px;
    padding: 40px 40px;
    text-decoration: none; /* Remove underlines */
    color: #333; /* Set the desired text color */
    align-items: center;
    flex:1;
`

const FilmButton = styled.div`
    background-image: url(${ button });
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 187px; /* Set width to auto to allow it to adjust to the image's width */
    height: 127px; /* Set height to 100% to match the image's height */
    display: flex;
    align-items: center;
    justify-content: center;
`

const NavButton = styled.button`
    width: 173px;
    height: 57px;
    margin-bottom: 4px;
    margin-left:2px;
    background-color: #CAC3A8;
    border: none; /* Removes the button border */
    font-family: Special Elite;
    font-size: 22px;
    font-weight: 400;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #EBD791;
    }
`

function NavElement({ path, title }) {
  
  return (
    <FilmButton>
      <NavButton>
        <a 
          href={`/${ path }`}>
            { title }
        </a>
      </NavButton>
    </FilmButton>
  )
}


function NavigationBar() {
  return (
    <>
      <NavContainer>
        <ul style={{ listStyleType: 'none'}}>
          <NavBox>
            <FilmButton/>
            <FilmButton/>
            <FilmButton/>
            <FilmButton/>
            <FilmButton/>
            <NavElement path={ "/" } title={ "Home" }/>
            <NavElement path={ "/university" } title={ "University" }/>
            <NavElement path={ "/city-news" } title={ "City News" }/>
            <NavElement path={ "/sports" } title={ "Sports" }/>
            <NavElement path={ "/a-c" } title={ "A&C" }/>
            <NavElement path={ "/opinion" } title={ "Opinion" }/>
            <FilmButton/>
            <FilmButton/>
            <FilmButton/>
            <FilmButton/>
            <FilmButton/>
          </NavBox>
        </ul>
      </NavContainer>
    </>
  );
}


export default NavigationBar;