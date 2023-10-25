import { styled } from 'styled-components'

const StyledCardContainer = styled.div`
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: 130px;
    background-color: ${props => props.theme.cardBackgroundColor};
    border-radius: 7px;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.activeColor};
    }

    &:focus {
        background-color: ${props => props.theme.activeColor};
    }
`

const StyledLabel = styled.div`
    color: ${props => props.theme.textColor};
    font-size: 0.8rem;
    align-self: flex-start;
    font-weight: 700;
`

const StyledCount = styled.p`
    color: ${props => props.theme.darkTextColor};
    font-size: 2.2rem;
    align-self: flex-end;
    font-weight: 700;
`

const StyledIcon = styled.img`
    justify-self: end;
`

const StyledImprovementContainer = styled.div`
    justify-self: end;
    align-self: flex-end;
`


export { StyledCardContainer, StyledLabel, StyledCount, StyledIcon, StyledImprovementContainer }
