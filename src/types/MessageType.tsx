import {type UserType} from "./UserType"

export interface MediaType {
  type: "image" | "video" | "file" | "gif"
  url: string
  size?: string
  name?: string
}

export  interface MessageType  {
  user: UserType
  id?: string
  text?: string
  media?: MediaType
  createdAt?: Date
  seen?: boolean
  loading?: boolean
}

