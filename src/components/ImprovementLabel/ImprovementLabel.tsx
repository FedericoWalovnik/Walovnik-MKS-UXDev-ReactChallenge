import {
    StyledImprovementContainer,
    StyledImprovementText
} from './ImprovementLabel.style'
import iconUp from '../../images/icon-up.svg'
import iconDown from '../../images/icon-down.svg'

type Props = {
    improvement: string
    improved: boolean
}

const ImprovementLabel = ({ improvement, improved }: Props) => {
    return (
        <StyledImprovementContainer>
            <img
                src={improved ? iconUp : iconDown}
                alt="icon"
            />
            <StyledImprovementText
                tabIndex={0}
                $improved={improved}
            >
                {improvement}
            </StyledImprovementText>
        </StyledImprovementContainer>
    )
}

export { ImprovementLabel }
