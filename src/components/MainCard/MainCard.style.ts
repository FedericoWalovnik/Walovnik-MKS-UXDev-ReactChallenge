import { styled } from 'styled-components'
import { SocialMediaType } from '../../models'

const StyledCardContainer = styled.div<{ $socialMedia: SocialMediaType }>`
    display: flex;
    padding: 1rem 0;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 230px;
    background-color: ${props => props.theme.cardBackgroundColor};
    border-radius: 7px;

    background: linear-gradient(
                ${props => props.theme.cardBackgroundColor},
                ${props => props.theme.cardBackgroundColor}
            )
            padding-box,
        ${props => props.theme[props.$socialMedia]};
    background-position: top;
    background-size: contain;
    border-top: 5px solid transparent;
    border-bottom: 5px solid ${props => props.theme.cardBackgroundColor};

    cursor: pointer;

    &:hover {
        background: linear-gradient(
                    ${props => props.theme.activeColor},
                    ${props => props.theme.activeColor}
                )
                padding-box,
            ${props => props.theme[props.$socialMedia]};
    }
`

const StyledUserContainer = styled.div`
    display: flex;
`

const StyledUserName = styled.p`
    color: ${props => props.theme.textColor};
    font-weight: 700;
    margin-left: 0.5rem;
`

const StyledFollowersContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledFollowersNumber = styled.p`
    color: ${props => props.theme.darkTextColor};
    font-weight: 700;
    font-size: 3.5rem;
`

const StyledFollowersLabel = styled.p`
    color: ${props => props.theme.textColor};
    font-weight: 400;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
`

export {
    StyledCardContainer,
    StyledUserContainer,
    StyledUserName,
    StyledFollowersContainer,
    StyledFollowersNumber,
    StyledFollowersLabel
}
