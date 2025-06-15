import type { MessageType } from "./MessageType"

export interface ConversationType {
  title: string,
  lastMessage?: MessageType
  unread?: boolean
  isOnline?: boolean
  avatar?: string
  id?: string
}

