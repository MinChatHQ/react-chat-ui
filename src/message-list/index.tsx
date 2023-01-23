import React, { useEffect, useRef, useState } from 'react'
import Message from '../message'
import styled from 'styled-components'
import useCheckIsMobile from '../hooks/useCheckIsMobile'
import Loading from '../loading'
import useDetectScrollPosition from '../hooks/useDetectScrollPosition'
import MessageType from '../MessageType'
import TypingIndicator from '../typing-indicator'

export type ChatProps = {
    themeColor?: string
    messages?: MessageType[]
    currentUserId?: string
    loading?: boolean
    // this is true when the message a message is still being sent so show some form of loader on the last message
    sendMessageLoading?: boolean
    onScrollToTop?: () => void
    mobileView?: boolean
    showTypingIndicator?: boolean
    typingIndicatorContent?: string
}



const Container = styled.div`
height: 100%;
/* display: flex;
flex-direction: column; */
position: relative;
max-height: 100vh;
overflow-y: hidden;
/* background-color: #ffffff; */
padding-left: 0px;
border-radius: 16px;
padding-right: 12px; 
`

const InnerContainer = styled.div`
height: 100%;
`


const ScrollBackground = styled.div`
background-color: #f3f4f6;
position: relative;
width: 100%;
height: 100%;
border-radius: 16px;

`

const ScrollBackgroundContainer = styled.div<{ mobile: boolean }>`
position: absolute;
width: 100%;
height: 100%;
box-sizing: border-box;
${({ mobile }) => !mobile ? `
padding-right: 12px;
` : ""}

`

const ScrollContainer = styled.div`
overflow-y: auto;
position: relative;
height: 100%;
width: 100%;
max-height: 100vh;
box-sizing: border-box;
display: flex;
flex-direction: column;
scrollbar-width: none; /* Firefox */
 -ms-overflow-style: none;  /* Internet Explorer 10+ */
::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
}
`

const Buffer = styled.div`
    height: 60px;
    width: 100%;
    position: relative;
`

const NoMessagesTextContainer = styled.div`
  color: rgba(0,0,0,.36);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size:14px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

`

export default function MessageList({
    messages,
    currentUserId,
    loading = false,
    sendMessageLoading = false,
    onScrollToTop,
    themeColor = '#6ea9d7',
    mobileView,
    typingIndicatorContent,
    showTypingIndicator
}: ChatProps) {

    /** keeps track of whether messages was previously empty or whether it has already scrolled */
    const [messagesWasEmpty, setMessagesWasEmpty] = useState(true)


    const bottomBufferRef = useRef<any>()
    const scrollContainerRef = useRef<any>()

    const isMobile = useCheckIsMobile()

    const { detectBottom, detectTop } = useDetectScrollPosition(scrollContainerRef)


    useEffect(() => {
        //detecting when the scroll view is first rendered and messages have rendered then you can scroll to the bottom
        if (bottomBufferRef.current && scrollContainerRef.current && !messagesWasEmpty) {
            scrollToBottom()
        }

    }, [messagesWasEmpty, bottomBufferRef.current, scrollContainerRef.current])


    useEffect(() => {
        if (!messages) {
            setMessagesWasEmpty(true)
        }

        if (messages) {
            if (messagesWasEmpty) {
                //if the messages object was previously empty then scroll to bottom
                // this is for when the first page of messages arrives
                //if a user has instead scrolled to the top and the next page of messages arrives then don't scroll to bottom

                setMessagesWasEmpty(false)
            }

            //todo this is just a quick fix, the ideal behavior we would want is when new messages are added, it doesnt 
            //scroll to the bottom and neither does it scroll to the top it remains right where it is
            scrollToBottom()

            //TODO when closer to the bottom of the scroll bar and a new message arrives then scroll to bottom
            if (detectBottom()) {
                scrollToBottom()
            }

        }
    }, [messages])


    useEffect(() => {
        //TODO when closer to the bottom of the scroll bar and a new message arrives then scroll to bottom
        if (detectBottom()) {
            scrollToBottom()
        }
    }, [showTypingIndicator])
    

    const scrollToBottom = async () => {
        if (bottomBufferRef.current && scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const scrollPoint = bottomBufferRef.current

            const parentRect = container.getBoundingClientRect()
            const childRect = scrollPoint.getBoundingClientRect()

            // Scroll by offset relative to parent
            const scrollOffset = childRect.top + container.scrollTop - parentRect.top;

            if (container.scrollBy) {
                container.scrollBy({ top: scrollOffset, behavior: "auto" });
            } else {
                container.scrollTop = scrollOffset;
            }
        }
    }



    return (
        <Container
        >

            <ScrollBackgroundContainer mobile={mobileView || isMobile}>
                <ScrollBackground />
            </ScrollBackgroundContainer>


            <InnerContainer>

                {loading ?
                    <Loading themeColor={themeColor} />
                    :
                    <>

                        <ScrollContainer
                            onScroll={() => {
                                //detect when scrolled to top
                                if (detectTop()) {
                                    onScrollToTop && onScrollToTop()
                                }
                            }}
                            ref={scrollContainerRef}>

                            {/* top buffer */}
                            <div>
                                <Buffer />
                            </div>

                            {(messages && messages.length <= 0) && <NoMessagesTextContainer>
                                <p>No messages yet...</p>
                            </NoMessagesTextContainer>
                            }
                            {messages && scrollContainerRef.current && bottomBufferRef.current && messages.map(({ user, text }, index) => {
                                if (user.id == (currentUserId && currentUserId.toLowerCase())) {

                                    // my message
                                    return <Message key={index}
                                        position="right"
                                        themeColor={themeColor}
                                        // the last message should show loading if sendMessage loading is true
                                        loading={(index === messages.length - 1) && sendMessageLoading}
                                    >{text}</Message>

                                } else {

                                    // other message
                                    return <Message
                                        position='left'
                                        themeColor={themeColor}
                                        key={index}
                                        user={user}
                                    >{text}</Message>
                                }
                            })}

                            {showTypingIndicator && <TypingIndicator
                                content={typingIndicatorContent}
                                themeColor={themeColor} />
                            }

                            {/* bottom buffer */}
                            <div>
                                <Buffer ref={bottomBufferRef} />
                            </div>
                        </ScrollContainer>
                    </>

                }
            </InnerContainer>

        </Container>
    )
}