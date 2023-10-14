import Polaroids from './Polaroids'
import styled from 'styled-components';

const SectionTitle = styled.h1`
	padding:3rem;
	padding-top:8rem;
    font-size: 3rem;
    font-family: 'Special Elite', cursive;
    font-weight: 400;
`

function Section({
    title,
	articles
}) {
    return (
        <div>
            <SectionTitle> {title} </SectionTitle>
            <Polaroids articles={articles}/>
        </div>
    )
}

export default Section;