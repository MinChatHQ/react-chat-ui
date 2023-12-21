import React from 'react'
import styled from 'styled-components'

type Props = {
    children?: string
    color?: string
    linkColor?: string
}

export const Content = styled.div<{
    color?: string
    linkColor?: string
}>`
text-align:left;
vertical-align:text-top;
font-size:14px;
align-self:flex-start;
line-height:auto;
color:${({ color }) => color || '#000000'};
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
padding-left:16px;
padding-right:16px;
padding-top:8px;
padding-bottom:8px;
position: relative;
box-sizing: border-box;
word-wrap: break-word;
width: 100%;

user-select: none;

a {
    color: ${({ linkColor }) => linkColor || 'blue'};
}

`


export default function TextContent({
    linkColor,
    color,
    children = ""
}: Props) {

    // Regular expression to match URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    // Check if the text contains a URL
    const containsLink = urlRegex.test(children);

    // If a link is found, replace the text with an anchor tag
    const renderText = containsLink ? (
        <Content
            linkColor={linkColor}
            color={color}
            dangerouslySetInnerHTML={{ __html: children.replace(urlRegex, '<a href="$&" target="_blank">$&</a>') }} />
    ) : (
        <Content
            color={color}
        >{children}</Content>
    );

    return (renderText)
}