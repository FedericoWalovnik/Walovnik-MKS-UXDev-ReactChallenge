import { styled } from 'styled-components'
import { device } from '../../breakpoints'

const StyledSwitchContainer = styled.div`
    display: flex;
    align-items: center;

    @media ${device.md} {
        margin-top: 1rem;
    }
`

const StyledTitle = styled.p`
    font-weight: 700;
    margin-right: 1rem;
    color: ${props => props.theme.textColor};
    font-size: 0.9rem;
`

const StyledLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
`

const StyledSpan = styled.span`
    position: absolute;
    cursor: pointer;
    background: ${props => props.theme.toggle};
    border-radius: 25px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    &:hover {
        background: ${props => props.theme.toggleGradient};
    }

    &::before {
        position: absolute;
        content: '';
        right: 2px;
        top: 2px;
        width: 21px;
        height: 21px;
        background-color: ${props => props.theme.backgroundColor};
        border-radius: 50%;
        transition: transform 0.3s ease;
    }
`

const StyledInput = styled.input`
    display: none;

    &:checked + ${StyledSpan}::before {
        transform: translateX(-25px);
        background-color: #333;
    }

    &:checked + ${StyledSpan} {
        background-color: transparent;
        background: ${props => props.theme.toggle};

        &:hover {
            background: ${props => props.theme.toggleGradient};
        }
    }
`

export {
    StyledSwitchContainer,
    StyledTitle,
    StyledLabel,
    StyledInput,
    StyledSpan
}