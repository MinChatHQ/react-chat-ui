import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useCheckIsMobile from '../hooks/useCheckIsMobile';
import Loading from '../loading';
import MessageContainer, { Props as MessageContainerProps } from '../message-container';
import ConversationContainer, { Props as ConversationContainerProps } from '../conversation-container';
import "../index.css"


const Container = styled.div`
    height: 100%;
    position: relative;
`

const DesktopContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;

`


const Sidebar = styled.div`
    /* max-width: 384px; */
    padding-top: 16px;
    padding-bottom: 16px;
    width: 35%;
    height: 100%;
    position: relative;
    box-sizing: border-box;

`

const DesktopContent = styled.div`
    height: 100%;
    width: 65%;
    position: relative;
    

`

export interface Props {
    mobileView?: boolean
    inbox: ConversationContainerProps
    selectedConversation?: MessageContainerProps
}

/**
 * 
 * a chat view that automatically switches between desktop view and mobile view
 * @returns 
 */
export default function MainContainer({
    mobileView,
    inbox,
    selectedConversation
}: Props) {

    const [useMobileView, setUseMobileView] = useState<boolean>(true)

    const isMobile = useCheckIsMobile()

    useEffect(() => {
        if (mobileView === true) {
            setUseMobileView(true)
        } else if (mobileView === false) {
            setUseMobileView(false)
        } else {
            setUseMobileView(isMobile)
        }

    }, [isMobile, mobileView])

    return (
        <Container>
            {useMobileView ? (
                selectedConversation ?
                    <MessageContainer
                        {...selectedConversation}
                        mobileView={mobileView}
                    />
                    :
                    <ConversationContainer
                        {...inbox}
                    />
            )
                :
                <DesktopContainer>
                    {inbox.loading ?

                        <Loading
                            themeColor={inbox.themeColor} />

                        :
                        <>
                            <Sidebar>
                                <ConversationContainer
                                    {...inbox}
                                    showHeader={false}
                                />
                            </Sidebar>

                            <DesktopContent>
                                {selectedConversation &&
                                    <MessageContainer
                                        showBack={false}
                                        {...selectedConversation}
                                    />}
                            </DesktopContent>
                        </>}
                </DesktopContainer>
            }
        </Container>
    )
}