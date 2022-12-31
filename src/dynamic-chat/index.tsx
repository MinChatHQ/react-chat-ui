import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useCheckIsMobile from '../hooks/useCheckIsMobile';
import Chat from '../message-list';
import ChatList from '../chatlist';
import DesktopChatlist, { DesktopChatlistProps } from '../desktop-chatlist'



const Container = styled.div`
    height: 100%;
    position: relative;
`

interface DynamicChatlistProps extends DesktopChatlistProps {
    onBack: () => void

}

/**
 * 
 * a chat view that automatically switches between desktop view and mobile view
 * @returns 
 */
export default function DynamicChat(props: DynamicChatlistProps) {

    const [useMobileView, setUseMobileView] = useState<boolean>(true)

    const isMobile = useCheckIsMobile()

    useEffect(() => {
        if (props.mobileView === true) {
            setUseMobileView(true)
        } else if (props.mobileView === false) {
            setUseMobileView(false)
        } else {
            setUseMobileView(isMobile)
        }

    }, [isMobile, props.mobileView])

    return (
        <Container>
            {useMobileView ? (
                props.selectedChat ?
                    <Chat
                    mobileView={props.mobileView}
                        {...props.selectedChat}
                        onBack={props.onBack}
                    />
                    :
                    <ChatList
                    mobileView={props.mobileView}
                        {...props.inbox}
                        loading={props.loading}
                    />


            )
                :
                <DesktopChatlist
                    {...props}
                />
            }
        </Container>
    )
}