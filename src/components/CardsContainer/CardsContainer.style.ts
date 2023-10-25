import { styled } from 'styled-components'

const StyledContainer = styled.div`
    display: grid;
    flex-direction: column;
    grid-template-rows: auto;
    grid-template-columns: repeat(auto-fill, [col-start] minmax(15rem, 1fr) [col-end]);
    gap: 2rem;
    padding-bottom: 2rem;
`

export { StyledContainer }
