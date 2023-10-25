import { useState } from 'react'
import GlobalStyle from './styles/global'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import { ThemeProvider } from 'styled-components'
import { themeDark, themeLight } from './styles/theme'
import { ModalGraphFollowers } from './components/ModalGraphFollowers/ModalGraphFollowers'
import { GlobalContext } from './state/GlobalContext'

function App() {
      const [isDarkTheme, setIsDarkTheme] = useState(false)
      const [showModal, setShowModal] = useState(false)

    return (
        <>
            <GlobalStyle />
            <GlobalContext.Provider value={{ showModal, setShowModal, isDarkTheme, setIsDarkTheme }}>
                <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
                    <ModalGraphFollowers></ModalGraphFollowers>
                    <DashboardPage></DashboardPage>
                </ThemeProvider>
            </GlobalContext.Provider>
        </>
    )
}

export default App
