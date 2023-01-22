import React, { useRef } from 'react'
import styled from 'styled-components'
import Loading from '../loading'
import ConversationType from '../ConversationType'
import Conversation from '../conversation'




export interface Props {
  onConversationClick?: (index: number) => void
  conversations?: ConversationType[],
  loading?: boolean
  selectedConversationId?: string
  onScrollToBottom?: () => void
  themeColor?: string
  mobileView?: boolean
  /**
     * the current user on the chat ui
     */
  currentUserId?: string
}

const ScrollContainer = styled.div`
position: relative;
  height: 100%;
  width: 100%;
padding-top: 56px;
box-sizing: border-box;
overflow-y: auto;
max-height: 100vh;
overflow-x: hidden;
background-color: #ffffff;
scrollbar-width: none; /* Firefox */
 -ms-overflow-style: none;  /* Internet Explorer 10+ */
::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
}
  
`

const Container = styled.div`
height: 100%;
  position: relative;
  max-height: 100vh;
overflow: hidden;
`



// const SearchElement = styled.input`
// width:100%;
// height:40px;
// padding:0px;
// position:relative;
// background-color:#e5e7eb;
// border-radius:20px;
// border:1px solid #ecebeb;
// font-size:14px;
// font-family:SF Pro Text;
// line-height:auto;
// padding-left: 16px;
// text-align:left;
// vertical-align:text-top;
// margin-right: 56px;
// &:focus{
//     outline: none;

// }
//  `

const NoChatsTextContainer = styled.div`
  color: rgba(0,0,0,.36);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size:14px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;

`

export default function ConversationList({
  conversations,
  loading = false,
  onConversationClick,
  selectedConversationId,
  onScrollToBottom,
  themeColor = '#6ea9d7',
  currentUserId
}: Props) {

  const scrollContainerRef = useRef<any>()

  return (
    <Container
    >

      <ScrollContainer
        onScroll={() => {
          //detect when scrolled to bottom
          const bottom = scrollContainerRef.current.scrollHeight - scrollContainerRef.current.scrollTop === scrollContainerRef.current.clientHeight;
          if (bottom) {
            onScrollToBottom && onScrollToBottom()
          }
        }}
        ref={scrollContainerRef}>

        {loading ? <Loading themeColor={themeColor} /> :
          <>
            {conversations && conversations.length <= 0 && <NoChatsTextContainer>
              <p>No conversation started...</p>
            </NoChatsTextContainer>
            }

            {(conversations && conversations.map((conversation, index) => <Conversation
              themeColor={themeColor}
              onClick={() => onConversationClick && onConversationClick(index)}
              key={index}
              title={conversation.title}
              lastMessage={conversation.lastMessage}
              avatar={conversation.avatar}
              selected={selectedConversationId === conversation.id}
              currentUserId={currentUserId}
            />
            ))
            }
          </>
        }

      </ScrollContainer>
    </Container>

  )
}