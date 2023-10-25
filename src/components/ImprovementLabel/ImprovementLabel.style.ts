import { styled } from 'styled-components'

const StyledImprovementContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 0.8rem;
`

const StyledImprovementText = styled.p<{ $improved: boolean }>`
    color: ${props => (props.$improved ? props.theme.limeGreen : props.theme.brightRed)};
    margin-left: 0.3rem;
`

export { StyledImprovementContainer, StyledImprovementText }