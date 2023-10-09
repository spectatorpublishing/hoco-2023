import React from "react";
import lights from './lights.png'
import TapedPicture from './TapedPicture'
import styled from 'styled-components';

const ImgContainer = styled.img`
    width: 100%;
`

const PicturesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 2rem;
`

function LightsComponent() {
    return (
        <>
            <ImgContainer
                src = { lights }
            />
            <PicturesContainer>
                <TapedPicture title={ "Columbia Policies on Gender Neutral Bathrooms" } author={ "Ramel Nunez" }/>
                <TapedPicture title={ "Columbia Policies on Gender Neutral Bathrooms" } author={ "hey" }/>
                <TapedPicture title={ "hey" } author={ "hey" }/>
            </PicturesContainer>
        </>
    )
}

export default LightsComponent;