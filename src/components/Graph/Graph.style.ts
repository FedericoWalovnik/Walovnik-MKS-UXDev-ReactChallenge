import { styled } from 'styled-components'

const StyledChartContainer = styled.div`
    width: 100%;
    height: 300px;
    padding: 0 3rem;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
`

const StyledLabelDate = styled.div`
    font-weight: 400;
    color: ${props => props.theme.textColor };
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
`

const StyledTooltipContainer = styled.div<{ $color: string }>`
    background-color: ${props => props.theme.backgroundColor};
    border: 1px solid ${props => props.$color};
    color: ${props => props.$color};
    padding: 0.5rem;
`

export { StyledChartContainer, StyledLabelDate, StyledTooltipContainer }
