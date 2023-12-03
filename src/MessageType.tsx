import UserType from "./UserType"

export interface MediaType {
  type: "image" | "video" | "file" | "gif"
  url: string
  size?: string
  name?: string
}

type MessageType = {
  user: UserType
  id?: string
  text?: string
  media?: MediaType
  created_at?: string
  seen?: boolean
  loading?: boolean
  date?: Date
}

export default MessageType