import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useCheckIsMobile from '../hooks/useCheckIsMobile'
import MessageType from '../MessageType'
import placeholderProfilePNG from './profile.png'

export type Props = {
    title: string,
    lastMessage?: MessageType,
    avatar?: string,
    onClick: () => void,
    selected?: boolean
    themeColor?: string
    /**
     * the current user on the chat ui
     */
    currentUserId?: string

}
const Container = styled.div`
    width:100%;
height:88px;
position:relative;
margin-top: 1px;
cursor: pointer;
display: flex;
align-items: center;
box-sizing: border-box;
`
const ContentContainer = styled.div`
display: flex;
position:relative;
flex-direction: row;
align-items: center;
padding-left:8px;
padding-right:20px;
padding-top:12px;
padding-bottom:12px;
width: 100%;
height: 100%;
box-sizing: border-box;
`

const Background = styled.div<{ themeColor: string, selected?: boolean }>`
position: absolute;
width: 100%;
height: 100%;
background-color: ${({ themeColor, selected }) => selected ? themeColor : "#ffffff"};
opacity: 0.2;
z-index: 1;

&:hover{
${({ selected }) => !selected ? 'opacity: 0.09;' : ''} 
background-color: ${({ themeColor }) => themeColor};
}
`

const Name = styled.div<{ seen?: boolean }>` 
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
text-align:left;
vertical-align:text-top;
font-size:14px;
line-height:auto;
color:#000000;

${({ seen }) => !seen ? `
color: black;
font-weight: 700;
` : ''}

`

const LastMessageUser = styled.div<{ seen?: boolean }>`
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    text-align:left;
vertical-align:text-top;
font-size:12px;
align-self:flex-start;
position:relative;
color:#7a7a7a;
white-space: nowrap;

${({ seen }) => !seen ? `
color: black;
font-weight: 600;
` : ''}

`

const MessageComponent = styled.div<{ width: number, seen?: boolean }>`
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
text-align:left;
vertical-align:text-top;
font-size:12px;
align-self:flex-start;
position:relative;
color:#7a7a7a;
margin-left: 6px;  
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
max-width: ${({ width }) => width}px;
box-sizing: border-box;

${({ seen }) => !seen ? `
color: black;
font-weight: 600;
` : ''}

`

const MessageContainer = styled.div`
display: flex;
align-items: center;
margin-top: 3px;
width: 100%;
box-sizing: border-box;
`

// const TimeSent = styled.div`
// text-align:left;
// vertical-align:text-top;
// font-size:12px;
// font-family:SF Pro Text;
// align-self:flex-start;
// position:relative;
// color:#7a7a7a;
// margin-right: 24px;
// white-space: nowrap;
// `


const MessageContent = styled.div`
      justify-content : space-between;
      display: flex; 
      width: 100%;
     
`
const DisplayPictureContainer = styled.div`
width: 58px;
    height: 58px;
    margin-right: 12px;
    box-sizing: border-box;
`

const DisplayPicture = styled.img`
    width: 58px;
    height: 58px;
    border-radius: 9999px;
    box-sizing: border-box;
    border-width: 2px;
    border-color: rgb(255 255 255);
    object-fit: cover;
`


export default function Conversation({
    title,
    lastMessage,
    onClick,
    avatar,
    selected = false,
    themeColor='#6ea9d7',
    currentUserId
}: Props) {
    const [usedAvatar, setUsedAvatar] = React.useState<string>(placeholderProfilePNG)

    const isMobile = useCheckIsMobile()

    const getMessageWidth = () => {
        if (isMobile) {
            return window.innerWidth - 200 //250
        } else {
            /** 384px */
            return 384 - 150 //250
        }
    }

    const [messageWidth, setMessageWidth] = useState(getMessageWidth())
    themeColor

    useEffect(() => {
        window.addEventListener('resize', () => {
            setMessageWidth(getMessageWidth())
        })
    }, [])



    useEffect(() => {
        if (avatar && avatar.trim().length > 0) {
            setUsedAvatar(avatar)
        }
    }, [avatar])

    return (
        <Container
            onClick={onClick}
            className='fade-animation'
        >
            <Background
                selected={selected}
                themeColor={themeColor} />


            <ContentContainer>
                <div>
                    <DisplayPictureContainer>
                        <DisplayPicture
                            onError={() => {
                                setUsedAvatar(placeholderProfilePNG)
                            }}
                            src={usedAvatar}
                        />
                    </DisplayPictureContainer>
                </div>
                <div style={{ width: "100%" }}>
                    <Name seen={lastMessage?.seen}>{title}</Name>

                    <MessageContainer
                    >
                        <LastMessageUser
                            seen={lastMessage?.seen}
                        >{lastMessage?.user.id === currentUserId ? "You" : lastMessage?.user.name}:</LastMessageUser>

                        <MessageContent>
                            <MessageComponent
                                seen={lastMessage?.seen}
                                width={messageWidth}> {lastMessage?.text}</MessageComponent>
                            {/* <TimeSent>12:35 am</TimeSent> */}
                        </MessageContent>

                    </MessageContainer>
                </div>
            </ContentContainer>
        </Container>

    )
}