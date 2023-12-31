import React, { useState } from "react";
import styled from 'styled-components';

const Body = styled.div`
    margin-bottom: 400px;
    padding: 0px;
	@media screen and (max-width: 1024px) {
		display:none;
	}
`;

const EnvelopeWrapper = styled.div`
    position: relative;
    width: 800px;
    height: 600px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    top: 300px;  // Adjusted from 200px to 300px to push it 100px further down
    background-color: #D9D8D8;
    z-index: 0;
    cursor: pointer;
    perspective: 1500px;
`;


const Cover = styled.div`
    position: absolute;
`;

const CoverTop = styled.div`
    position: absolute;
    top: -600px;
    border-left: 400px solid transparent;
    border-right: 400px solid transparent;
    border-bottom: 300px solid transparent;
    border-top: 300px solid #C4C4C9;
    transform-origin: center;
    transform: rotateX(-180deg);  // It will always stay in this state
    z-index: 1;
`;


const CoverBottomRight = styled.div`
    position: absolute;
    border-left: 400px solid transparent;
    border-right: 400px solid #D9D8D8;
    border-bottom: 300px solid #C4C4C4;
    border-top: 300px solid transparent;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: ${props => props.clickedState ? '3' : '4'};
`;

const CoverLeft = styled.div`
    position: absolute;
    border-left: 400px solid #D9D8D8;
    border-right: 400px solid transparent;
    border-bottom: 300px solid transparent;
    border-top: 300px solid transparent;
    border-bottom-right-radius: 10px;
    z-index: ${props => props.clickedState ? '3' : '4'};
`;

const LetterWrapper = styled.div`
    position: relative;
    background: #F2F2F2;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px;
    text-align: center;
    font-family: 'Kalam', cursive;
    z-index: ${props => props.clickedState ? '5' : '3'};
    transform: ${props => props.clickedState ? 'translateY(-150px)' : 'translateY(100px)'};
    transition: transform 0.5s;
`;

const Title = styled.div`
    color: var(--Main-brown, #665B56);
    text-shadow: 0px 0.1814446896314621px 0px #000;
    font-family: Special Elite;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
	margin:1rem;
`;

const Text = styled.div`
    color: var(--Main-brown, #665B56);
    text-shadow: 0px 0.1814446896314621px 0px #000;
    font-family: Enriqueta;
    font-size: 1.2rem;
	padding:1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
	text-align:left;
`;

const Envelope = () => {
    const [clickedState, setClickedState] = useState(false);
    const [zIndex, setZIndex] = useState(1); // new state for zIndex

    function handleClick() {
        if (!clickedState) {
            setClickedState(true);
            setTimeout(() => {
                setZIndex(5); // After 500ms, bring the letter forward
            }, 500);
        } else {
            setZIndex(1);
            setClickedState(false);
        }
    }

    return (
        <Body>
            <EnvelopeWrapper id="envelope" onClick={handleClick}>
                <Cover>
                    <CoverTop clickedState={clickedState}></CoverTop>
                    <CoverLeft clickedState={clickedState}></CoverLeft>
                    <CoverBottomRight clickedState={clickedState}></CoverBottomRight>
                </Cover>
                <LetterWrapper clickedState={clickedState} style={{zIndex: zIndex}}>
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
						and reflect on the state of community at Columbia. Go Lions!
						<br/>
						<br/>
						<b>Irie Sentner, Editor in Chief</b>
						<br/>
					</Text>
                </LetterWrapper>
            </EnvelopeWrapper>
        </Body>
    )
}


export default Envelope;
