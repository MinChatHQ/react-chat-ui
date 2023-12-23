import MessageType from "./MessageType"

type ConversationType = {
    title: string,
    lastMessage?: MessageType
    unread?:boolean
    avatar?: string
    id?: string
  }

  export default ConversationType