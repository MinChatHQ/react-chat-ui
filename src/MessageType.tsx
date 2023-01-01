import UserType from "./UserType"

 type MessageType = {
    user: UserType
    id?: string
    text: string
    created_at?: string
    seen?: boolean
  }

  export default MessageType