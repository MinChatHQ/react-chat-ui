import React from 'react'
import styled from 'styled-components'
import './index.css'

export type Props = {
    content?: string
    themeColor?: string
}

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    /* this is to compensate for the width of the other message dp and its margin left */
    margin-left: 42px;
    margin-bottom: 16px;
    margin-top: 16px;
`

const Text = styled.div<{ themeColor: string }>`
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
font-size:12px;
line-height:auto;
font-weight: 600;
margin-left: 8px;

color:  ${({ themeColor }) => themeColor};
`

const Dot1 = styled.div<{ themeColor: string }>`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${({ themeColor }) => themeColor};
    animation: loading-animation-move 0.7s ease-in-out infinite;
    margin-right: 4px;

    animation-delay: 0ms;
    
`
const Dot2 = styled(Dot1)`
    animation-delay: 0.2s;
`
const Dot3 = styled(Dot1)`
    animation-delay: 0.4s;
    margin-right: 0;
    `

export default function TypingIndicator({
    content,
    themeColor = '#6ea9d7'
}: Props) {

    return (
        <Container>
            <div className="loading-animation">
                <Dot1 themeColor={themeColor} />
                <Dot2 themeColor={themeColor} />
                <Dot3 themeColor={themeColor} />
            </div>

            <Text themeColor={themeColor}>{content}</Text>
        </Container>
    )
}