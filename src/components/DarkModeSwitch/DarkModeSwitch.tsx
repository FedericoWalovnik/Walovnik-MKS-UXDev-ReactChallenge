import { useContext } from 'react'
import { GlobalContext } from '../../state/GlobalContext'

import { StyledSwitchContainer, StyledTitle, StyledLabel, StyledInput, StyledSpan } from './DarkModeSwitch.styles'

const DarkModeSwitch = () => {
    const { isDarkTheme, setIsDarkTheme } = useContext(GlobalContext)

    const onToggle = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    return (
        <StyledSwitchContainer
            tabIndex={0}
            onKeyDown={event => (event.key === 'Enter' ? onToggle() : '')}
        >
            <StyledTitle>Dark Mode</StyledTitle>
            <StyledLabel className="toggle-switch">
                <StyledInput
                    type="checkbox"
                    checked={isDarkTheme}
                    onChange={onToggle}
                />
                <StyledSpan className="switch" />
            </StyledLabel>
        </StyledSwitchContainer>
    )
}
export { DarkModeSwitch }
