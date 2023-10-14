import React from "react";
import TapedPicture from './TapedPicture';
import styled from 'styled-components';

const PicturesContainer = styled.div`
    display: flex;
	flex-wrap:wrap;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 2rem;

    
	@media screen and (min-width: 1024px) {
		& > :nth-child(2) {
        transform: translateY(-60px); // Adjust the value to your preference
    	}
	}
`

function Polaroids({articles}) {
    return (
        <>
            <PicturesContainer>
				{articles.map((article, index)=>{
					return(
					<TapedPicture 
					link = {article.article_link}
					title = {article.article_title} 
					author = {article.article_authors} 
					image = {article.image_url}/>
					)
				})}
            </PicturesContainer>
        </>
    );
}

export default Polaroids;

