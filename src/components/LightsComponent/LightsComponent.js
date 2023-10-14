import React from "react";
// import { ReactComponent as TestImage } from './test_img.svg';
import TapedPicture from './TapedPicture';
import styled from 'styled-components';
import lights from './lights.svg'
// import MidLights from "./MidLights";

const PicturesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 2rem;

    // Target the middle TapedPicture component
    & > :nth-child(2) {
        transform: translateY(-40px); // Adjust the value to your preference
    }
`

const LightsImg = styled.img`
    width: 100%;
    z-index: 10000;
    position: relative
`


function LightsComponent() {
    return (
        <>
            <LightsImg src={ lights }/>
            <PicturesContainer>
                <TapedPicture title={"Columbia Policies on Gender Neutral Bathrooms"} author={"Ramel Nunez"} />
                <TapedPicture title={"Columbia Policies on Gender Neutral Bathrooms"} author={"hey"} />
                <TapedPicture title={"hey"} author={"hey"} />
            </PicturesContainer>
        </>
    );
}

export default LightsComponent;

