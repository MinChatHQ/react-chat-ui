import React from 'react'
import MinChatUIContext from '../contexts/MinChatUIContext'

type Props = {
    colorSet?: {},
    theme?: string
    children: any
}

export default function MinChatUiProvider({
    colorSet,
    children,
    theme
}: Props) {

    return (
        <MinChatUIContext.Provider value={{ colorSet, themeColor: theme || '#6ea9d7' }} >
            {children}
        </MinChatUIContext.Provider>
    )
}