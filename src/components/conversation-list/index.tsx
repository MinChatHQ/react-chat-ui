import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import Loading from '../loading';
import type { ConversationType } from '../../types/ConversationType';
import Conversation from '../conversation';
import useColorSet from '../../hooks/useColorSet';
import MinChatUIContext from '../../contexts/MinChatUIContext';
import ConversationHeader from '../conversation-header';

export interface Props {
  onConversationClick?: (index: number) => void;
  conversations?: ConversationType[];
  loading?: boolean;
  selectedConversationId?: string;
  onScrollToBottom?: () => void;
  themeColor?: string;
  mobileView?: boolean;
  /**
   * the current user on the chat ui
   */
  currentUserId?: string;
  renderCustomConversationitem?: (conversation: ConversationType, index: number) => React.ReactNode
  customLoaderComponent?: React.ReactNode
  customEmptyConversationsComponent?: React.ReactNode

  header?: {
    showHeader?: boolean
    customHeaderComponent?: React.ReactNode
    title?: string
    showAddButton?: boolean
    onAddClicked?: () => void
    showSearchBar?: boolean
    searchValue?: string
    onSearchChange?: (value: string) => void
  }

}

const ScrollContainer = styled.div<{
  loading?: boolean,
  backgroundColor?: string
}>`
position: relative;
  height: 100%;
  width: 100%;
padding-top: ${({ loading }) => loading ? '0px' : '0px'};
box-sizing: border-box;
overflow-y: auto;
max-height: 100dvh;
overflow-x: hidden;
background-color: ${({ backgroundColor }) => backgroundColor || '#ffffff'};
scrollbar-width: none; /* Firefox */
 -ms-overflow-style: none;  /* Internet Explorer 10+ */
::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
  }
`;

const Container = styled.div`
  height: 100%;
  position: relative;
  max-height: 100dvh;
  overflow: hidden;
`;

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

const NoChatsTextContainer = styled.div<{
  color?: string
}>`
  color: ${({ color }) => color || 'rgba(0, 0, 0, 0.36)'};
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;


const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
position: relative;
`

export default function ConversationList({
  conversations,
  loading,
  onConversationClick,
  selectedConversationId,
  onScrollToBottom,
  currentUserId,
  renderCustomConversationitem,
  customLoaderComponent,
  customEmptyConversationsComponent,
  header
}: Props) {
  const scrollContainerRef = useRef<any>(undefined);

  const backgroundColor = useColorSet("--chatlist-background-color")
  const noConversation = useColorSet("--no-conversation-text-color")

  const { themeColor } = useContext(MinChatUIContext)


  return (
    <Container>
      <ScrollContainer
        backgroundColor={backgroundColor}
        loading={loading}
        onScroll={() => {
          //detect when scrolled to bottom
          const bottom =
            scrollContainerRef.current.scrollHeight -
            scrollContainerRef.current.scrollTop ===
            scrollContainerRef.current.clientHeight;
          if (bottom) {
            onScrollToBottom && onScrollToBottom();
          }
        }}
        ref={scrollContainerRef}
      >
        {loading ?
          <LoadingContainer>
            {customLoaderComponent ?
              customLoaderComponent :
              <Loading themeColor={themeColor} />}
          </LoadingContainer> : (
            <>
              {header?.customHeaderComponent ? header?.customHeaderComponent : <ConversationHeader
                showHeader={header?.showHeader}
                title={header?.title}
                showAddButton={header?.showAddButton}
                onAddClicked={header?.onAddClicked}
                showSearchBar={header?.showSearchBar}
                searchValue={header?.searchValue}
                onSearchChange={header?.onSearchChange}
                loading={loading}
              />}

              {conversations && conversations.length <= 0 && (
                customEmptyConversationsComponent ?
                  customEmptyConversationsComponent :
                  <NoChatsTextContainer color={noConversation}>
                    <p>No conversation started...</p>
                  </NoChatsTextContainer>
              )}

              {conversations &&
                conversations.map((conversation, index) => (
                  (renderCustomConversationitem && renderCustomConversationitem(conversation, index)) ?
                    renderCustomConversationitem(conversation, index)
                    :
                    <Conversation
                      onClick={() => onConversationClick && onConversationClick(index)}
                      key={index}
                      title={conversation.title}
                      lastMessage={conversation.lastMessage}
                      avatar={conversation.avatar}
                      isOnline={conversation.isOnline}
                      selected={selectedConversationId === conversation.id}
                      currentUserId={currentUserId}
                      unread={conversation.unread}
                    />
                ))}
            </>
          )}
      </ScrollContainer>
    </Container>
  );
}
