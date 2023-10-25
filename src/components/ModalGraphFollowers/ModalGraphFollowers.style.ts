import { styled } from 'styled-components'
import { device } from '../../breakpoints'

const StyledCloseButton = styled.p`
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-weight: 700;
    cursor: pointer;
    color: ${props => props.theme.countModal};
`

const StyledContainer = styled.div<{ $visible: boolean }>`
    display: ${props => props.$visible ? 'flex' : 'none' };
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    justify-content: center;
    padding-top: 10vh;
    background-color: rgb(0, 0, 0, 0.5);
`

const StyledModalContainer = styled.div`
    position: relative;
    height: 75vh;
    overflow-y: hidden;
    min-width: 70vw;
    max-width: 90vw;
    border-radius: 15px;
    background-color: ${props => props.theme.backgroundColor};

    @media ${device.sm} {
        overflow-y: scroll;
    }
`

const StyledHeader = styled.div`
    background-color: ${props => props.theme.backgroundPatternColor};
    border-radius: 15px 15px 0 0;
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
`

const StyledTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`

const StyledTitle = styled.div`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
    color: ${props => props.theme.darkTextColor};
`

const StyledUserContainer = styled.div`
    display: flex;
    align-items: center;
`

const StyledInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media ${device.sm} {
        flex-direction: column;
        align-items: start;
    }
`

const StyledUsername = styled.h2`
    color: ${props=> props.theme.textColor};
    font-weight: 700;
    font-size: 0.8rem;
    margin-left: 0.5rem;
`

const StyledIcon = styled.img`
    height: 0.35rem;
    margin-right: 0.5rem;
`

const StyledInfo = styled.div`
    display: flex;
    margin-right: 2rem;
    align-items: center;
`

const StyledInfoCount = styled.div<{ $improved: boolean }>`
    font-size: 2.5rem;
    font-weight: 700;
    color: ${props => (props.$improved ? props.theme.limeGreen : props.theme.countModal)};

    @media ${device.sm} {
        margin-bottom: 1rem;
    }
`

const StyledInfoLabel = styled.div`
    font-size: 1rem;
    font-weight: 400;
    margin-left: 1rem;
    color: ${props => props.theme.textColor };
`

export {
    StyledCloseButton,
    StyledContainer,
    StyledModalContainer,
    StyledHeader,
    StyledTitleContainer,
    StyledTitle,
    StyledInfoContainer,
    StyledUserContainer,
    StyledUsername,
    StyledIcon,
    StyledInfo,
    StyledInfoCount,
    StyledInfoLabel
}
