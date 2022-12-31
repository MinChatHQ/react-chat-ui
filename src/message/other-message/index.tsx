import React, { useEffect } from 'react'
import styled from 'styled-components'
import User from '../../User'
import { Container as MyMessageContainer, Content, Wrapper as MyMessageWrapper, /*Timestamp,*/ TimestampContainer as MyMessageTimestampContainer, Background } from '../my-message'
import placeholderProfilePNG from './profile.webp'

type Props = {
    children: string,
    user?: User,
    themeColor: string
}

const MessageContainer = styled(MyMessageContainer)`
    margin-top: 8px;
    margin-left: 0px;
    box-sizing: border-box;
`


const Wrapper = styled(MyMessageWrapper)`
justify-content: start;

`

const DPContainer = styled.div`
    width: 32px;
    height: 32px;
    margin-left: 10px;
    box-sizing: border-box;
`
const DisplayPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 9999px;
    box-sizing: border-box;
    border-width: 2px;
    border-color: rgb(255 255 255);
    object-fit: cover;
`



const Name = styled.div`
text-align:left;
vertical-align:text-top;
font-size:14px;
align-self:flex-start;
line-height:auto;
color:#4b5563;
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
font-weight: 500;
`

const TextWrapper = styled.div`
margin-left:12px;
box-sizing: border-box;
`

const TimestampContainer = styled(MyMessageTimestampContainer)`
margin-left: 8px;
margin-bottom: -2px;
margin-right: 0px;
box-sizing: border-box;
`

const OtherMessageBackground = styled(Background)`
    opacity: 0.5;
`



export default function OtherMessage({ children, user, themeColor }: Props) {

    const [avatar, setAvatar] = React.useState<string>(placeholderProfilePNG)

    useEffect(() => {
        if (user?.avatar && user.avatar.trim().length > 0) {
            setAvatar(user.avatar)
        }
    }, [user])


    return (
        <Wrapper
    className='fade-animation'
    >

            <DPContainer>
                <DisplayPicture
                    onError={() => {
                        setAvatar(placeholderProfilePNG)
                    }}
                    src={avatar}
                />
            </DPContainer>

            <TextWrapper>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Name>{user?.name}</Name>


                    <TimestampContainer>
                        {/* <Timestamp >13:01 </Timestamp> */}
                    </TimestampContainer>
                </div>

                <div style={{ display: "flex" }}>
                    <MessageContainer>
                        <OtherMessageBackground bgColor={themeColor} />
                        <Content>{children}</Content>
                    </MessageContainer>
                </div>

            </TextWrapper>
        </Wrapper>
    )
}

