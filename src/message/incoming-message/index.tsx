import React, { useEffect } from 'react'
import styled from 'styled-components'
import User from '../../UserType'
import { Container as MyMessageContainer, Content, Wrapper as MyMessageWrapper, /*Timestamp,*/ TimestampContainer as MyMessageTimestampContainer, Background } from '../outgoing-message'
import placeholderProfilePNG from './profile.webp'

type Props = {
    text?: string,
    image?: string,
    user?: User,
    themeColor?: string
    showAvatar?: boolean
    showHeader?: boolean
    // determines whether its the last message in the group of incoming messages
    last?: boolean
    //determines whether its the only message in the group of incoming messages
    single?: boolean

}

const MessageContainer = styled(MyMessageContainer)`
    margin-left: 0px;
    box-sizing: border-box;
    margin-bottom: 0px;
`


const Wrapper = styled(MyMessageWrapper)`
justify-content: start;
align-items: flex-end;
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
margin-left:8px;
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

const HeaderContainer = styled.div`
 display: flex; 
 align-items: "center";
 margin-top: 16px;
 margin-bottom: 6px;
 `

const ImageContainer = styled.div`
    width: 100%;
    margin: 8px;
    position: relative;
    `

const Image = styled.img`
    width: 100%;
 `


export default function IncomingMessage({
    text,
    image,
    user,
    showAvatar,
    showHeader,
    last,
    single,
    themeColor = '#6ea9d7' }: Props) {

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
                {showAvatar &&

                    <DisplayPicture
                        onError={() => {
                            setAvatar(placeholderProfilePNG)
                        }}
                        src={avatar}
                    />}
            </DPContainer>

            <TextWrapper>
                {showHeader &&
                    <HeaderContainer>
                        <Name>{user?.name}</Name>


                        <TimestampContainer>
                            {/* <Timestamp >13:01 </Timestamp> */}
                        </TimestampContainer>
                    </HeaderContainer>
                }

                <div style={{ display: "flex" }}>
                    <MessageContainer>
                        <OtherMessageBackground
                            borderTopRight
                            borderBottomRight={!last ? true : false}
                            borderBottomLeft={last || single ? true : false}
                            bgColor={themeColor} />

                        {image ?
                            <ImageContainer>
                                <Image src={image} />
                            </ImageContainer>
                            :
                            <Content>{text}</Content>
                        }
                    </MessageContainer>
                </div>

            </TextWrapper>
        </Wrapper>
    )
}

