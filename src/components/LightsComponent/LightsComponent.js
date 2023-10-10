import React, { useState, useEffect } from "react";
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

function YourComponent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width when the component mounts or when window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach an event listener for window resize
    window.addEventListener('resize', handleResize);

    console.log(window.innerWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  // Define the threshold width
  const thresholdWidth = 900; // Adjust this value to your desired threshold

  return (
    <>
      {windowWidth > thresholdWidth ? (
        // Content to render when display width is above the threshold
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
<<<<<<< Updated upstream
    )
}

export default LightsComponent;
=======
      ) : (
        // Content to render when display width is below or equal to the threshold
        <>
            <ImgContainer src={lights} alt="Description of lights image" />
            <PicturesContainer>
                <TapedPicture title={"Columbia Policies on Gender Neutral Bathrooms"} author={"Ramel Nunez"} />
                <TapedPicture title={"hey"} author={"hey"} />
            </PicturesContainer>
        </>
      )}
    </>
  );
}

export default YourComponent;
>>>>>>> Stashed changes
