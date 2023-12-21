import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Container as MyMessageContainer, Wrapper as MyMessageWrapper, Background } from '../outgoing-message'
import placeholderProfilePNG from './profile.webp'
import MediaContent from '../media-content'
import { getBorderCss } from '../borderController'
import TextContent from '../text-content'
import { Props } from '..'
import Timestamp from '../timestamp'
import useColorSet from '../../../hooks/useColorSet'
import MinChatUIContext from '../../../contexts/MinChatUIContext'


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
    user-select: none;

`
const DisplayPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 9999px;
    box-sizing: border-box;
    border-width: 2px;
    border-color: rgb(255 255 255);
    object-fit: cover;
    position: relative;
    z-index: 1;
`



const Name = styled.div<{
    color?: string
}>`
text-align:left;
vertical-align:text-top;
font-size:14px;
align-self:flex-start;
line-height:auto;
color:${({ color }) => color || "#4b5563"};
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
font-weight: 500;
user-select: none;

`

const TextWrapper = styled.div`
margin-left:8px;
box-sizing: border-box;
`


const IncomingMessageBackground = styled(Background) <{
    backgroundColor?: string
}>`
    ${({ backgroundColor }) => !backgroundColor ? "opacity: 0.5;" : ""}
`

const HeaderContainer = styled.div`
 display: flex; 
 align-items: "center";
 margin-top: 16px;
 margin-bottom: 6px;
 `



export default function IncomingMessage({
    text,
    media,
    user,
    showAvatar,
    showHeader,
    last,
    single,
    created_at,
}: Omit<Props, "type" | "clusterFirstMessage" | "clusterLastMessage" | "seen">) {

    const { themeColor } = useContext(MinChatUIContext)

    const [avatar, setAvatar] = React.useState<string>(placeholderProfilePNG)

    useEffect(() => {
        if (user?.avatar && user.avatar.trim().length > 0) {
            setAvatar(user.avatar)
        }
    }, [user])


    const textColor = useColorSet("--incoming-message-text-color")
    const nameTextColor = useColorSet("--incoming-message-name-text-color")
    const linkColor = useColorSet("--incoming-message-link-color")

    const backgroundColor = useColorSet("--incoming-message-background-color")
    const timestampColor = useColorSet("--incoming-message-timestamp-color")

    return (
        <Wrapper
            data-testid="incoming-message"
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
                        <Name color={nameTextColor}>{user?.name}</Name>
                    </HeaderContainer>
                }

                <div style={{ display: "flex" }}>
                    <MessageContainer>
                        <IncomingMessageBackground
                            borderCss={(() => getBorderCss({
                                type: "incoming",
                                last,
                                single
                            }))()}
                            backgroundColor={backgroundColor}
                            bgColor={backgroundColor || themeColor} />

                        {media ? <MediaContent
                            last={last}
                            single={single}
                            messageType='incoming'
                            {...media} />
                            :
                            <TextContent
                                linkColor={linkColor}
                                color={textColor}>{text}</TextContent>}

                        <Timestamp
                            color={timestampColor}
                            date={created_at}
                        />
                    </MessageContainer>
                </div>

            </TextWrapper>
        </Wrapper>
    )
}

