import React from 'react'
import styled from 'styled-components'
import Chat, { ChatProps } from '../chat'
import ChatList, { ChatlistProps } from '../chatlist'
import Loading from '../loading'

export interface DesktopChatlistProps {
    // props for the queried chat list items, goes to the chatlist component 
    inbox: ChatlistProps,
    selectedChat?: ChatProps,
    loading?: boolean
    mobileView?: boolean
}

const Container = styled.div`
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

const MainContent = styled.div`
    height: 100%;
    width: 65%;
    position: relative;
    

`


export default function DesktopChatlist({
    selectedChat,
    inbox,
    loading = false
}: DesktopChatlistProps) {


    return (
        <Container>
            {loading ?

                <Loading
                    themeColor={inbox.themeColor} />

                :
                <>
                    <Sidebar>
                        <ChatList
                            {...inbox}
                            showHeader={false}
                            onChatClick={inbox.onChatClick}
                        />
                    </Sidebar>

                    <MainContent>
                        {selectedChat &&
                            <Chat
                                {...selectedChat}
                                showBack={false}
                            />}
                    </MainContent>
                </>}
        </Container>
    )
}