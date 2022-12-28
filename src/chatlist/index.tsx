import React, { useRef } from 'react'
import Header from './header'
import Item from './item'
import styled from 'styled-components'
import Loading from '../loading'

export type User = {
  id: string,
  name?: string,
  avatar?: string
}

export type Message = {
  user: User
  id?: string
  text: string
  created_at?: string
  seen?: boolean
}

type ChatlistItem = {
  title: string,
  lastMessage?: Message
  avatar?: string
  id?: string
}
export type ChatlistProps = {
  onChatClick: (index: number) => void
  chats?: ChatlistItem[],
  loading?: boolean
  showHeader?: boolean
  selectedChatId?: string
  paginate: () => void
  themeColor: string
  mobileView?: boolean
  /**
     * the current user on the chat ui
     */
  currentUser: User
}

const ScrollContainer = styled.div`
position: relative;
  height: 100%;
  width: 100%;
background-color:#fcfcfc;
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

const HeaderPlaceholder = styled.div`
   background-color: #ffffff;
     height: 56px;
      position: absolute;
      top: 0px;
left: 0px;
right: 0px;
z-index: 10;
box-sizing: border-box;
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

export default function ChatList({
  showHeader = true,
  chats,
  loading = false,
  onChatClick,
  selectedChatId,
  paginate,
  themeColor,
  currentUser
}: ChatlistProps) {

  const scrollContainerRef = useRef<any>()

  return (
    <Container
    >
      {showHeader ? <Header /> : <HeaderPlaceholder />}

      <ScrollContainer
        onScroll={() => {
          //detect when scrolled to bottom
          const bottom = scrollContainerRef.current.scrollHeight - scrollContainerRef.current.scrollTop === scrollContainerRef.current.clientHeight;
          if (bottom) {
            paginate && paginate()
          }
        }}
        ref={scrollContainerRef}>

        {loading ? <Loading themeColor={themeColor} /> :
          <>
            {chats && chats.length <= 0 && <NoChatsTextContainer>
              <p>No conversation started...</p>
            </NoChatsTextContainer>
            }

            {(chats && chats.map((chat, index) => <Item
              themeColor={themeColor}
              onClick={() => onChatClick(index)}
              key={index}
              name={chat.title}
              lastMessage={chat.lastMessage}
              avatar={chat.avatar}
              selected={selectedChatId === chat.id}
              currentUser={currentUser}
            />
            ))
            }
          </>
        }

      </ScrollContainer>
    </Container>

  )
}