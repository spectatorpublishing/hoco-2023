import LightsComponent from './LightsComponent'
import styled from 'styled-components';

const SectionTitle = styled.h1`
    font-size: 2.8125rem;
    font-family: 'Special Elite', cursive;
    font-weight: 400;
`

function NewsSection({
    title
}) {
    return (
        <>
            <SectionTitle>
                { title }
            </SectionTitle>
            <LightsComponent/>
            <br/>
            <br/>
            <br/>
        </>
    )
}

export default NewsSection;