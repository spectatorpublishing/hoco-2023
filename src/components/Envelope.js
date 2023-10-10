import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const Body = styled.div`
    margin-bottom: 400px;
    padding: 0px;
    
`;

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(180deg);
//   }
// `;

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

`;

const Cover = styled.div`
    position: absolute;

    
`;

const CoverTop = styled.div`
    position: absolute;
    border-left: 400px solid transparent;
    border-right: 400px solid transparent;
    border-bottom: 300px solid transparent;
    border-top: 300px solid #C4C4C9;
    transform-origin: top;
    animation: rotate(180deg) 0.1s linear;
    z-index: 3;

    ${props => {
        if (props.clickedState) {
            
        } else {

        }


    }}
    
`;

const CoverBottomRight = styled.div`
    position: absolute;
    border-left: 400px solid transparent;
    border-right: 400px solid #D9D8D8;
    border-bottom: 300px solid #C4C4C4;
    border-top: 300px solid transparent;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 3;
    
`;

const CoverLeft = styled.div`
    position: absolute;
    border-left: 400px solid #D9D8D8;
    border-right: 400px solid transparent;
    border-bottom: 300px solid transparent;
    border-top: 300px solid transparent;
    border-bottom-right-radius: 10px;
    z-index: 3;
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
    z-index: 2;
    
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
    line-height: 137.3%; /* 24.714px */
`;

const Open = styled.div`
    transform: rotateX(180deg);
    transition: transform 0.4s ease;
    z-index: 1;

    position: relative;
    border-left: 200px solid transparent;
    border-right: 200px solid transparent;
    border-bottom: 150px solid transparent;
    border-top: 150px solid #D9D8D8;
    transform-origin: top;
`;

const Close = styled.div`
    transform: rotateX(0deg);
    transition: transform 0.4s 0.4s ease;
    z-index: 5;
`;

const In = styled.div`
    transform: rotateY(0px);
    transition: transform 0.4s ease;
    z-index: 3;
`;

const OutPartial = styled.div`
transform: rotateY(-100px);
transition: transform 0.4s 0.4s ease;
z-index: 3;
`;





const letter_paragraph = `Lorem ipsum dolor sit amet consectetur. Integer viverra etiam vitae sed. 
Arcu gravida nulla tristique interdum vel. Eget volutpat urna id sed condimentum. Odio adipiscing 
massa ipsum vitae quisque.`;


const Envelope =  ({}) => {
    
    const [clickedState, setClickedState] = useState(false);
    function handleClick(){
        setClickedState(clickedState => !clickedState)

    }
    



    return (
        <Body>
        <EnvelopeWrapper id="envelope" onClick={handleClick}>
            <Cover>
                <CoverTop id="cover top"></CoverTop>
                <CoverLeft id="cover left"></CoverLeft>
                <CoverBottomRight id="cover bottom right"></CoverBottomRight>
                
            </Cover>
            <LetterWrapper id="">
                    <Title>Letter From The Editor ~</Title>
                    <Text>{letter_paragraph}</Text>

            </LetterWrapper>

        </EnvelopeWrapper>
        </Body>


    )

}

export default Envelope;
//code adopted from = "https://medium.com/web-for-you/how-to-make-a-interactive-envelope-9df970614eea"