import React from 'react'
import styled from 'styled-components'
import { parseMarkdown } from '../../../utils/lightweight-markdown'

type Props = {
    children?: string
    color?: string
    linkColor?: string
    enableMarkdown?: boolean
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

a {
    color: ${({ linkColor }) => linkColor || 'blue'};
    text-decoration: underline;
}

/* Basic markdown styles */
strong {
    font-weight: bold;
}

em {
    font-style: italic;
}

del {
    text-decoration: line-through;
}

code {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.9em;
}

pre {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 0.8em;
    border-radius: 4px;
    overflow-x: auto;
    margin: 0.5em 0;
}

pre code {
    background: none;
    padding: 0;
}

ul, ol {
    margin: 0.5em 0;
    padding-left: 1.5em;
}

li {
    margin: 0.2em 0;
}
`

export default function LightweightTextContent({
    linkColor,
    color,
    enableMarkdown = false,
    children = ""
}: Props) {

    if (enableMarkdown) {
        const htmlContent = parseMarkdown(children, { linkColor });
        
        return (
            <Content
                linkColor={linkColor}
                color={color}
                dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
        );
    }

    // Regular expression to match URLs (fallback for non-markdown mode)
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    return (
        <Content
            linkColor={linkColor}
            color={color}
            dangerouslySetInnerHTML={{ __html: children.replace(urlRegex, '<a href="$&" target="_blank" rel="noopener noreferrer">$&</a>') }} 
        />
    );
}
