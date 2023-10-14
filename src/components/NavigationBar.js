import React from 'react';
import styled from 'styled-components';
import button from '../button.svg';
import { HashLink } from 'react-router-hash-link';
import { sections } from '../data/sections';

const NavContainer = styled.nav`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
	margin-top:-5rem;
	@media screen and (max-width: 1024px) {
		display:none;
	}
`;

const NavBox = styled.div`
    display: flex;
    align-items: center;
`;

const FilmButton = styled.div`
    background-image: url(${ button });
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 160px; /* Set width to auto to allow it to adjust to the image's width */
    height:85px; /* Set height to 100% to match the image's height */
    display: flex;
    align-items: center;
    justify-content: center;
	backdrop-filter: blur(10px);
`

const NavButton = styled.button`
    width: 150px;
    height: 50px;
	z-index:-1;
    margin-bottom: 4px;
    margin-left:2px;
    background-color: black;
    border: none; /* Removes the button border */
    font-family: Special Elite;
    font-size: 1.35rem;
    cursor: pointer;
	color:white;
	opacity:0.85;
    transition: background-color 0.3s;

    &:hover {
        font-weight:700;
		opacity:0.9;
		font-size: 1.35rem;
		color: #F2F2F2;
		background-color: black;
    }
`

function NavElement({ url, title }) {
  return (
    <FilmButton>
      <HashLink smooth to={`#${url}`} style={{textDecoration:'none'}}>
		<NavButton>{title}</NavButton>
	  </HashLink>
    </FilmButton>
  ) 
}


function NavigationBar() {
  return (
    <div style = {{position:'sticky', top:0, zIndex:'100'}}>
      <NavContainer>
        <ul style={{ listStyleType: 'none'}}>
          <NavBox>
            <FilmButton/>
            <FilmButton/>
            <FilmButton/>
            <FilmButton/>
            <FilmButton/>
            {sections.map((section, index) => (
				<NavElement url={section.url} title={section.title}/> 
        	))}
            <FilmButton/>
            <FilmButton/>
            <FilmButton/>
            <FilmButton/>
            <FilmButton/>
          </NavBox>
        </ul>
      </NavContainer>
    </div>
  );
}


export default NavigationBar;