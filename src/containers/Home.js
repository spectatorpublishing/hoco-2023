import React from 'react'
import NavigationBar from '../components/NavigationBar';
import Logo from '../components/Logo';
import Envelope from '../components/Envelope';
import Credits from '../components/Credits'
import Section from '../components/Section'
import Illustration from '../components/Illustration';
import { sections } from '../data/sections';
import styled from 'styled-components';
import MobileNavBar from '../components/MobileNavBar';

const LogoMobile = styled.img`
	width:100%;
	padding-top:1rem;
	@media screen and (min-width: 1024px) {
		display:none;
	}
`

const LetterWrapper = styled.div`
position: relative;
background: #F2F2F2;
width: 100%;
margin-left: auto;
margin-right: auto;
box-sizing: border-box;
padding: 3rem 1rem;
text-align: center;
border-radius:5px;
font-family: 'Kalam', cursive;
z-index: ${props => props.clickedState ? '5' : '3'};
transform: ${props => props.clickedState ? 'translateY(-150px)' : 'translateY(100px)'};
transition: transform 0.5s;
@media screen and (min-width: 1024px) {
	display:none;
	}
`;

const Title = styled.div`
color: black;
font-family: Special Elite;
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin:1rem;
`;

const Text = styled.div`
color: black;
font-family: Enriqueta;
font-size: 1.2rem;
padding:1rem;
font-style: normal;
font-weight: 400;
line-height: 1.5rem;
text-align:left;
`;

const Home = () => {
  return (
	<div style={{ background: 'linear-gradient(#5379af, #577bb0, #5d98c1, #92b5cb, #afc3cc, #c3cdce)'}}>
	 <MobileNavBar/>
	 <LogoMobile src= "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/7EYNANRWM5E3DCJOO5VSTLU6AA.png"/>
	  <LetterWrapper>
	  <Title>Letter From The Editor</Title>
                    <Text>
						Dear readers, 
						<br/>
						<br/>
						Students, parents, alumni, and other Columbia affiliates have flocked to campus for Homecoming, 
						coming together in a moment of school spirit to celebrate the Columbia community. 
						Whether you are the biggest Lions fan out there, or have never stepped foot in Wien Stadium, 
						we hope this edition illuminates the spirit of Homecoming. 
						<br/>
						<br/>
						From the inauguration of 20th University President Minouche Shafik to a dive into the pump-up playlists 
						of Columbia football players, we invite you to take a look at the stories that have shaped the University this year 
						and reflect on the state of community at Columbia.
						<br/>
						<br/>
						Go Lions!
					</Text>
	  </LetterWrapper>
	  <Logo/>
	  <Illustration/>
	  <NavigationBar/>
	  <Envelope/>
      {sections.map((section, index) => (
		<div id={section.url}>
			<Section title = {section.title} articles={section.articles}/>
			
		</div>
        ))}
      <Credits/>
    </div>
  )
}

export default Home
  