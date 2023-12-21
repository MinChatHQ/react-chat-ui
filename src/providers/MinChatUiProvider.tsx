import React from 'react'
import MinChatUIContext from '../contexts/MinChatUIContext'

type Props = {
    colorSet: {},
    children: any
}

export default function MinChatUiProvider({
    colorSet,
    children
}: Props) {

    return (
        <MinChatUIContext.Provider value={{ colorSet }} >
            {children}
        </MinChatUIContext.Provider>
    )
}