import { StyledContainer, StyledTitle, StyledSubtitle } from "./MainTitle.style"

type Props = {
    title: string
    followers: string
}

const MainTitle = ({ title, followers }: Props) => {
    return (
        <StyledContainer>
            <StyledTitle tabIndex={0}>{title}</StyledTitle>
            <StyledSubtitle tabIndex={0}>Total Followers: {followers}</StyledSubtitle>
        </StyledContainer>
    )
}

export { MainTitle } 
