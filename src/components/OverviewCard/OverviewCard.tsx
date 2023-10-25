import { useContext } from 'react'
import { GlobalContext } from '../../state/GlobalContext'

import { SocialMediaType } from '../../models'
import {
    StyledCardContainer,
    StyledLabel,
    StyledCount,
    StyledIcon,
    StyledImprovementContainer
} from './OverviewCard.style'
import { ImprovementLabel } from '../ImprovementLabel/ImprovementLabel'
import iconFacebook from '../../images/icon-facebook.svg'
import iconTwitter from '../../images/icon-twitter.svg'
import iconInstagram from '../../images/icon-instagram.svg'
import iconYoutube from '../../images/icon-youtube.svg'

type Props = {
    socialMedia: SocialMediaType
    label: string
    count: string
    improvement: string
    improved: boolean
}

const OverviewCard = ({ socialMedia, label, count, improvement, improved }: Props) => {
    const { setShowModal } = useContext(GlobalContext)

    const icon = () => {
        if (socialMedia === SocialMediaType.facebook) return iconFacebook
        if (socialMedia === SocialMediaType.twitter) return iconTwitter
        if (socialMedia === SocialMediaType.instagram) return iconInstagram
        if (socialMedia === SocialMediaType.youtube) return iconYoutube
    }

    return (
        <StyledCardContainer
            onClick={() => setShowModal(true)}
            onKeyDown={event => event.key === 'Enter' ? setShowModal(true) : ''}
            tabIndex={0}
        >
            <StyledLabel tabIndex={0}>{label}</StyledLabel>
            <StyledIcon
                src={icon()}
                alt={`icon-${socialMedia}`}
            />
            <StyledCount tabIndex={0}>{count}</StyledCount>
            <StyledImprovementContainer>
                <ImprovementLabel
                    improved={improved}
                    improvement={improvement}
                />
            </StyledImprovementContainer>
        </StyledCardContainer>
    )
}

export { OverviewCard }
