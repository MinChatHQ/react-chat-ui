import React from 'react'
import MessageList from '../message-list'
import MessageInput from '../message-input'
import MessageHeader from '../message-header'
import MessageType from '../MessageType'
import styled from 'styled-components'
import useCheckIsMobile from '../hooks/useCheckIsMobile'

export type Props = {
  onBack?: () => void
  showBack?: boolean
  header?: string
  mobileView?: boolean
  onSendMessage?: (text: string) => void
  themeColor?: string
  onScrollToTop?: () => void
  sendMessageLoading?: boolean
  loading?: boolean
  currentUserId?: string
  messages?: MessageType[]
  showTypingIndicator?: boolean
  typingIndicatorContent?: string
  onStartTyping?: () => void,
  onEndTyping?: () => void,
  onAttachClick?: () => void,

}

const Container = styled.div<{ mobile: boolean }>`
height: 100%;
position: relative;
max-height: 100vh;
padding-left: 0px;
${({ mobile }) => mobile ? `
padding-right: 0px;
` : ""}
border-radius: 16px;
`

export default function MessageContainer(props: Props) {
  const isMobile = useCheckIsMobile()

  return (
    <Container
      mobile={props.mobileView || isMobile}>
      {!props.loading &&
        <MessageHeader
          {...props} >{props.header}</MessageHeader>
      }
      <MessageList
        {...props}

      />

      {!props.loading &&
        <MessageInput
          {...props}
        />
      }
    </Container>
  )
}