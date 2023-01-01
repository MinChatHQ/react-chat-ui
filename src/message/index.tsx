import React from 'react'
import User from '../UserType';
import MyMessage from './my-message'
import OtherMessage from './other-message'


export type Props = {
    children: string,
    loading?: boolean
    themeColor?: string
    position?: "left" | "right"
    user?: User

};


export default function Message({
    children,
    themeColor,
    loading,
    position = "left",
    user
}: Props) {
    return (
        position === "right" ?
            <MyMessage
                themeColor={themeColor}
                loading={loading}
                children={children}
            />

            : 

            <OtherMessage
            themeColor={themeColor}
            children={children}
            user={user}
            />

    )
}

