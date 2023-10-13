import styled from 'styled-components';
import { ReactComponent as TestImage } from './test_img.svg';

const TapedPictureContainer = styled.div`
    width: 16.3125rem;
    height: 23.5625rem;
    background: #E1DDDD;
    box-shadow: 13px 18px 24px 0px rgba(0, 0, 0, 0.25);
    padding-top: 2rem;
`;

const Title = styled.div`
    font-family: Kalam;
    margin-top: 1rem;
    font-size: 0.9375rem;
    text-align: left;
    padding-left: 10%;
    padding-right: 10%;
`;

const Author = styled.div`
    font-family: Kalam;
    margin-top: 2rem;
    font-size: 0.8125rem;
    padding-left: 10%;
    padding-right: 10%;
`;

function TapedPicture({ title, author }) {
    return (
        <TapedPictureContainer>
            <TestImage />
            <Title>
                {title}
            </Title>
            <Author>
                {`by ${author}`}
            </Author>
        </TapedPictureContainer>
    );
}

export default TapedPicture;
