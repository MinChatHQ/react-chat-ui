import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import MediaContent from '../media-content'
import { getBorderCss } from '../borderController'
import TextContent from '../text-content'
import Timestamp from '../timestamp'
import { type Props } from '..'
import useColorSet from '../../../hooks/useColorSet'
import MinChatUIContext from '../../../contexts/MinChatUIContext'


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div<{ firstMessage?: boolean, lastMessage?: boolean }>`
    display:flex;
    justify-content: end;
    margin-right: 10px;
    margin-top: ${({ firstMessage }) => firstMessage ? "16px" : "2px"};
    position: relative;
    box-sizing: border-box;
    margin-bottom: ${({ lastMessage }) => lastMessage ? "16px" : "2px"};
    z-index: 1;

    animation: ${fadeIn} 0.2s ease-in-out;
`



export const Container = styled.div`
max-width: 272px;
min-width: 80px;
margin-left: 10px;
justify-content: flex-end;
align-items: flex-end;
gap: 10px;
position: relative;
box-sizing: border-box;

@media (min-width: 480px) {
  max-width: 360px;
}

@media (min-width: 768px) {
  max-width: 480px;
}

@media (min-width: 1200px) {
  max-width: 640px;
}
`
export const Background = styled.div<{
    bgColor: string,
    borderCss: string,
}>`
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    background-color:${({ bgColor }) => bgColor};

    ${({ borderCss }) => borderCss};
`






export default function OutgoingMessage({
    text,
    media,
    loading,
    last,
    single,
    clusterFirstMessage,
    clusterLastMessage,
    created_at,
    seen,
    showTimestamp,
    themeColor,
    enableMarkdown
}: Omit<Props, "showHeader" | "showAvatar" | "type">) {

    const { themeColor: contextThemeColor } = useContext(MinChatUIContext)

    const textColor = useColorSet("--outgoing-message-text-color") || '#ffffff'
    const backgroundColor = useColorSet("--outgoing-message-background-color")
    const timestampColor = useColorSet("--outgoing-message-timestamp-color") || '#f3f4f6'
    const checkmarkColor = useColorSet("--outgoing-message-checkmark-color") || '#ffffff'
    const loaderColor = useColorSet("--outgoing-message-loader-color")
    const linkColor = useColorSet("--outgoing-message-link-color")


    return (
        <Wrapper
            data-testid="outgoing-message"
            lastMessage={clusterLastMessage}
            firstMessage={clusterFirstMessage}
            className=''
        >
            <div>


                <Container>
                    <Background
                        borderCss={(() => getBorderCss({
                            type: "outgoing",
                            last,
                            single
                        }))()}
                        bgColor={themeColor || backgroundColor  || contextThemeColor} />

                    {media ? <MediaContent
                        last={last}
                        single={single}
                        messageType='outgoing'
                        {...media} />
                        :
                        <TextContent
                            linkColor={linkColor}
                            color={textColor}
                            enableMarkdown={enableMarkdown}
                        >{text}</TextContent>}

                    {showTimestamp && <div style={{ marginTop: '4px', paddingBottom: '4px' }}>

                        <Timestamp
                            showSeen
                            color={timestampColor}
                            loaderColor={loaderColor}
                            checkmarkColor={checkmarkColor}
                            date={created_at}
                            seen={seen}
                            loading={loading} />
                    </div>

                    }
                </Container>

            </div>
        </Wrapper>
    )
}

