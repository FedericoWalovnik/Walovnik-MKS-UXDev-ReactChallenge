import { ReactNode } from 'react'
import { StyledContainer } from './CardsContainer.style'

type Props = {
    children: ReactNode
}

const CardsContainer = ({ children }: Props) => {
    return <StyledContainer>{children}</StyledContainer>
}

export { CardsContainer }
