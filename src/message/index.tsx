import React from 'react'
import User from '../UserType';
import OutgoingMessage from './outgoing-message'
import IncomingMessage from './incoming-message'
import { MediaType } from '../MessageType';


export type Props = {
    date?: Date
    seen?: boolean
    text?: string,
    media?: MediaType,
    loading?: boolean
    themeColor?: string
    type?: "incoming" | "outgoing"
    user?: User
    showAvatar?: boolean
    showHeader?: boolean
    // determines whether its the last message in the group of outgoing or incoming
    last?: boolean
    //determines whether its the only message in the group of outgoing or incoming
    single?: boolean
    clusterFirstMessage?: boolean
    clusterLastMessage?: boolean

};


export default function Message({
    text,
    media,
    date,
    seen,
    themeColor,
    loading,
    type = "outgoing",
    user,
    showAvatar,
    showHeader,
    last,
    single,
    clusterFirstMessage,
    clusterLastMessage
}: Props) {
    return (
        type === "outgoing" ?
            <OutgoingMessage
                themeColor={themeColor}
                loading={loading}
                text={text}
                date={date}
                seen={seen}
                media={media}
                last={last}
                single={single}
                clusterFirstMessage={clusterFirstMessage}
                clusterLastMessage={clusterLastMessage}
            />

            :

            <IncomingMessage
                showAvatar={showAvatar}
                themeColor={themeColor}
                text={text}
                date={date}
                media={media}
                user={user}
                showHeader={showHeader}
                last={last}
                single={single}
            />

    )
}

