import styled from 'styled-components';
import tape from "./tape.svg"

const TapedPictureContainer = styled.div`
    width: 21rem;
    height: 30rem;
    background: #E1DDDD;
    box-shadow: 13px 18px 24px 0px rgba(0, 0, 0, 0.25);
    padding-top: 2rem;
	margin:0rem 2rem;
	@media screen and (max-width: 1024px) {
		margin-bottom:4rem;
	}
`;

const Title = styled.div`
    font-family: Kalam;
    padding:1rem;
	margin: 0 0.8rem;
	margin-top:0.5rem;
    font-size: 1.05rem;
    text-align: center;
`;

const Author = styled.div`
    font-family: Kalam;
    font-size: 1rem;
	text-align:center;
	padding:0.25rem 1rem;
`;

const Tape = styled.img`
	width:12rem;
    transform: translateY(-70px);
`

const Image = styled.img`
	display:block;
	margin:auto;
	margin-top:-4rem;
	width:16rem;
	height:15rem;
	object-fit:cover;
`

function TapedPicture({ link, title, author, image }) {
    return (
		<a href={link} style={{textDecoration:"none", color:"black"}}>
        <TapedPictureContainer>
            <Tape src={tape}/>
			<Image src={image}/>
			<Title>{title}</Title>
            <Author>
                {`BY: ${author}`}
            </Author>
        </TapedPictureContainer>
		</a>
    );
}

export default TapedPicture;
