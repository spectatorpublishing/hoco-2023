import React, { useState } from "react";
import styled from 'styled-components';

const Body = styled.div`
    margin-bottom: 400px;
    padding: 0px;
`;

const EnvelopeWrapper = styled.div`
    position: relative;
    width: 800px;
    height: 600px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    top: 200px;
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
`;

const Text = styled.div`
    color: var(--Main-brown, #665B56);
    text-shadow: 0px 0.1814446896314621px 0px #000;
    font-family: Enriqueta;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 137.3%;
`;

const letter_paragraph = `Lorem ipsum dolor sit amet consectetur. Integer viverra etiam vitae sed. 
Arcu gravida nulla tristique interdum vel. Eget volutpat urna id sed condimentum. Odio adipiscing 
massa ipsum vitae quisque.Lorem ipsum dolor sit amet consectetur. Integer viverra etiam vitae sed. 
Arcu gravida nulla tristique interdum vel. Eget volutpat urna id sed condimentum. Odio adipiscing 
massa ipsum vitae quisque.Lorem ipsum dolor sit amet consectetur. Integer viverra etiam vitae sed. 
Arcu gravida nulla tristique interdum vel. Eget volutpat urna id sed condimentum. Odio adipiscing 
massa ipsum vitae quisque.Lorem ipsum dolor sit amet consectetur. Integer viverra etiam vitae sed. 
Arcu gravida nulla tristique interdum vel. Eget volutpat urna id sed condimentum. Odio adipiscing 
massa ipsum vitae quisque.Lorem ipsum dolor sit amet consectetur. Integer viverra etiam vitae sed. 
Arcu gravida nulla tristique interdum vel. Eget volutpat urna id sed condimentum. Odio adipiscing 
massa ipsum vitae quisque.Lorem ipsum dolor sit amet consectetur. Integer viverra etiam vitae sed. 
Arcu gravida nulla tristique interdum vel. Eget volutpat urna id sed condimentum. Odio adipiscing 
massa ipsum vitae quisque.`;

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
                    <Title>~Letter From The Editor ~</Title>
                    <Text>{letter_paragraph}</Text>
                </LetterWrapper>
            </EnvelopeWrapper>
        </Body>
    )
}


export default Envelope;
