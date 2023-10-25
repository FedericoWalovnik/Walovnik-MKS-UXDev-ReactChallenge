import { styled } from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledTitle= styled.h1`
    color: ${(props) => props.theme.darkTextColor};
    font-size: 2rem;
    margin-bottom: 0.6rem;
`

const StyledSubtitle = styled.h3`
    color: ${props => props.theme.textColor};
    font-size: 1.2rem;
`

export { StyledContainer, StyledTitle, StyledSubtitle }