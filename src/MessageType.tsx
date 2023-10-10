import UserType from "./UserType"

 type MessageType = {
    user: UserType
    id?: string
    text?: string
    image?: string
    created_at?: string
    seen?: boolean
    loading?: boolean
  }

  export default MessageType