import { StyledTitle } from "./OverviewTitle.style"

type Props = {
    title: string
}

const OverviewTitle = ({ title }: Props) => {
    return <StyledTitle tabIndex={0}>{title}</StyledTitle>
}

export { OverviewTitle } 
