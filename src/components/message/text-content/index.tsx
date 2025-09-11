import React from 'react'
import styled from 'styled-components'
import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'

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

// user-select: none;

a {
    color: ${({ linkColor }) => linkColor || 'blue'};
    text-decoration: underline;
}

/* Markdown element styles */
h1, h2, h3, h4, h5, h6 {
    margin: 0.5em 0;
    font-weight: bold;
    line-height: 1.2;
}

h1 { font-size: 1.5em; }
h2 { font-size: 1.3em; }
h3 { font-size: 1.2em; }
h4 { font-size: 1.1em; }
h5 { font-size: 1.05em; }
h6 { font-size: 1em; }

p {
    margin: 0.5em 0;
    line-height: 1.4;
}

ul, ol {
    margin: 0.5em 0;
    padding-left: 1.5em;
}

li {
    margin: 0.2em 0;
}

blockquote {
    margin: 0.5em 0;
    padding-left: 1em;
    border-left: 3px solid #ccc;
    color: #666;
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

hr {
    border: none;
    border-top: 1px solid #ccc;
    margin: 1em 0;
}

strong {
    font-weight: bold;
}

em {
    font-style: italic;
}

del {
    text-decoration: line-through;
}

table {
    border-collapse: collapse;
    margin: 0.5em 0;
    width: 100%;
}

th, td {
    border: 1px solid #ccc;
    padding: 0.4em 0.6em;
    text-align: left;
}

th {
    background-color: rgba(0, 0, 0, 0.05);
    font-weight: bold;
}

`


export default function TextContent({
    linkColor,
    color,
    enableMarkdown = false,
    children = ""
}: Props) {

    // If markdown is enabled, use ReactMarkdown
    if (enableMarkdown) {
        return (
            <Content linkColor={linkColor} color={color}>
                <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                        // Customize link components to use the linkColor
                        a: ({ href, children, ...props }) => (
                            <a 
                                href={href} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ color: linkColor || 'blue' }}
                                {...props}
                            >
                                {children}
                            </a>
                        ),
                    } as Components}
                >
                    {children}
                </ReactMarkdown>
            </Content>
        );
    }

    // Regular expression to match URLs (fallback for non-markdown mode)
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    return (
        <Content
            linkColor={linkColor}
            color={color}
            dangerouslySetInnerHTML={{ __html: children.replace(urlRegex, '<a href="$&" target="_blank">$&</a>') }} 
        />
    );
}