import React from 'react'
import styled from 'styled-components'
import useColorSet from '../../hooks/useColorSet'

export type Props = {
    showHeader?: boolean
    loading?: boolean
}

const Container = styled.div<{
    backgroundColor?: string,
    dividerColor?: string

}>`
height:56px;
padding:0px;
background-color:${({ backgroundColor }) => backgroundColor || '#ffffff'};

${({ dividerColor }) => dividerColor ?
        `border-bottom: 1px solid ${dividerColor};`
        :
        'box-shadow:0px 1px 0px rgba(0, 0, 0, 0.07999999821186066);'

    }

position:absolute;
top: 0px;
left: 0px;
right: 0px;
z-index: 2;
display: flex;
align-items: center;

`

const ChatTitle = styled.div<{
    color?: string
}>`
text-align:center;
vertical-align:text-top;
font-size:16px;
line-height:auto;
color:${({ color }) => color || '#000000'};
position:absolute;
width: 100%;
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
user-select: none;

`
const HeaderPlaceholder = styled.div`
   background-color: transparent;
     height: 56px;
      position: absolute;
      top: 0px;
left: 0px;
right: 0px;
z-index: 1;
box-sizing: border-box;
`

export default function ConversationHeader({ loading, showHeader = true }: Props) {

    const backgroundColor = useColorSet("--chatlist-header-background-color")
    const textColor = useColorSet("--chatlist-header-text-color")
    const dividerColor = useColorSet("--chatlist-header-divider-color")

    return (
        <>
            {
                loading ?
                    <div />
                    :
                    (!showHeader ?
                        <HeaderPlaceholder />
                        :
                        <Container
                            dividerColor={dividerColor}
                            backgroundColor={backgroundColor}>

                            <ChatTitle
                                color={textColor}
                            >Messages</ChatTitle>

                        </Container>
                    )
            }
        </>
    )
}