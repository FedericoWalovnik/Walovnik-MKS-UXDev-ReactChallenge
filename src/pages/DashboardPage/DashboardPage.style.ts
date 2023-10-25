import { styled } from 'styled-components'
import { device } from '../../breakpoints'

const StyledContainerPage = styled.div`
    width: 100vw;
    min-height: 100vh;
    z-index: 0;
    position: relative;
    background-color: ${props => props.theme.backgroundColor};

    & *:focus {
        border: 1px solid ${props => props.theme.facebook};
    }
`

const StyledContainerContent = styled.div`
    padding: 0 10rem;

    @media ${device.md} {
        padding: 0 8rem;
    }

    @media ${device.sm} {
        padding: 0 3rem;
    }
`

const StyledHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 0 3rem 0;

    @media ${device.md} {
        flex-direction: column;
    }
`

const StyledBackgroundPattern = styled.div`
    background-color: ${props => props.theme.backgroundPatternColor};
    position: absolute;
    top: 0;
    width: 100vw;
    height: 30%;
    z-index: -5;
`

export { StyledContainerPage, StyledContainerContent, StyledHeaderContainer, StyledBackgroundPattern }
