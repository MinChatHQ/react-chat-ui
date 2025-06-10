import type { MessageType } from "./MessageType"

export interface ConversationType {
  title: string,
  lastMessage?: MessageType
  unread?: boolean
  avatar?: string
  id?: string
}

