import { useContext, useEffect, useRef, KeyboardEvent } from 'react'
import { GlobalContext } from '../../state/GlobalContext'
import {
    StyledCloseButton,
    StyledContainer,
    StyledModalContainer,
    StyledHeader,
    StyledTitleContainer,
    StyledTitle,
    StyledUserContainer,
    StyledInfoContainer,
    StyledUsername,
    StyledIcon,
    StyledInfo,
    StyledInfoCount,
    StyledInfoLabel
} from './ModalGraphFollowers.style'
import iconFacebook from '../../images/icon-facebook.svg'
import iconUp from '../../images/icon-up.svg'

import { Graph } from '../Graph/Graph'

const ModalGraphFollowers = () => {
    const { showModal, setShowModal } = useContext(GlobalContext)
    const modalContainer = useRef(null)

     useEffect(() => {
         const close = (e: KeyboardEvent) => {
             if (e.keyCode === 27) {
                setShowModal(false)
             }
         }
         window.addEventListener('keydown', close)
         return () => window.removeEventListener('keydown', close)
     }, [])

    return (
        <StyledContainer
            $visible={showModal}
            onClick={() => setShowModal(false)}
        >
            <StyledModalContainer onClick={event => event.stopPropagation()}>
                <StyledCloseButton
                    onClick={() => setShowModal(false)}
                    ref={modalContainer}
                >
                    x
                </StyledCloseButton>
                <StyledHeader>
                    <StyledTitleContainer>
                        <StyledTitle tabIndex={1}>Facebook followers</StyledTitle>
                        <StyledUserContainer>
                            <img
                                src={iconFacebook}
                                alt="icon-facebook"
                            />
                            <StyledUsername tabIndex={0}>@nathanf</StyledUsername>
                        </StyledUserContainer>
                    </StyledTitleContainer>
                    <StyledInfoContainer>
                        <StyledInfo>
                            <StyledInfoCount
                                tabIndex={0}
                                $improved={false}
                            >
                                1987
                            </StyledInfoCount>
                            <StyledInfoLabel tabIndex={0}>
                                Total <br />
                                followers
                            </StyledInfoLabel>
                        </StyledInfo>
                        <StyledInfo>
                            <StyledIcon
                                src={iconUp}
                                alt="icon-up"
                            />
                            <StyledInfoCount
                                tabIndex={0}
                                $improved={true}
                            >
                                81
                            </StyledInfoCount>
                            <StyledInfoLabel tabIndex={0}>
                                New followers in
                                <br /> the past 10 days
                            </StyledInfoLabel>
                        </StyledInfo>
                        <StyledInfo>
                            <StyledIcon
                                src={iconUp}
                                alt="icon-up"
                            />
                            <StyledInfoCount
                                tabIndex={0}
                                $improved={true}
                            >
                                12
                            </StyledInfoCount>
                            <StyledInfoLabel tabIndex={0}>
                                New followers <br /> TODAY
                            </StyledInfoLabel>
                        </StyledInfo>
                    </StyledInfoContainer>
                </StyledHeader>
                <Graph></Graph>
            </StyledModalContainer>
        </StyledContainer>
    )
}

export { ModalGraphFollowers }

