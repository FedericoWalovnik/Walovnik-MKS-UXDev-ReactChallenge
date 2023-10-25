import { useContext } from 'react'
import { GlobalContext } from '../../state/GlobalContext'

import { SocialMediaType } from '../../models'
import {
    StyledCardContainer,
    StyledUserContainer,
    StyledUserName,
    StyledFollowersContainer,
    StyledFollowersNumber,
    StyledFollowersLabel
} from './MainCard.style'
import iconFacebook from '../../images/icon-facebook.svg'
import iconTwitter from '../../images/icon-twitter.svg'
import iconInstagram from '../../images/icon-instagram.svg'
import iconYoutube from '../../images/icon-youtube.svg'
import { ImprovementLabel } from '../ImprovementLabel/ImprovementLabel'

type Props = {
    socialMedia: SocialMediaType
    user: string
    title: string
    label: string
    improvement: string
    improved: boolean
}

const MainCard = ({ socialMedia, user, title, label, improvement, improved }: Props) => {
    const { setShowModal } = useContext(GlobalContext)
    
    const icon = () => {
        if (socialMedia === SocialMediaType.facebook) return iconFacebook
        if (socialMedia === SocialMediaType.twitter) return iconTwitter
        if (socialMedia === SocialMediaType.instagram) return iconInstagram
        if (socialMedia === SocialMediaType.youtube) return iconYoutube
    }
    
    return (
        <StyledCardContainer
            $socialMedia={socialMedia}
            onClick={() => setShowModal(true)}
            onKeyDown={event => (event.key === 'Enter' ? setShowModal(true) : '')}
            tabIndex={0}
        >
            <StyledUserContainer>
                <img
                    src={icon()}
                    alt={`${socialMedia}`}
                />
                <StyledUserName tabIndex={0}>{user}</StyledUserName>
            </StyledUserContainer>
            <StyledFollowersContainer>
                <StyledFollowersNumber tabIndex={0}>{title}</StyledFollowersNumber>
                <StyledFollowersLabel tabIndex={0}>{label}</StyledFollowersLabel>
            </StyledFollowersContainer>
            <ImprovementLabel
                improved={improved}
                improvement={improvement}
            ></ImprovementLabel>
        </StyledCardContainer>
    )
}

export { MainCard }
