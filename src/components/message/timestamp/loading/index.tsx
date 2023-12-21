import React from 'react'
import styled from 'styled-components'
import "./index.css"

type Props = {
    color?: string
}


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center
    ;
`

const InnerContainer = styled.div<{
    color?: string
}>`
box-sizing: border-box;
display: block;
position: absolute;
width: 8px;
height: 8px;

position: absolute;
left: 0;
right: 0;
margin-left: auto;
margin-right: auto;
margin-top: auto;
margin-bottom: auto;
top: 0;
bottom: 0;

/* margin: 6px; */
border: 2px solid ${({ color }) => color || '#fff'};
border-radius: 50%;
animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
border-color:  ${({ color }) => color || '#fff'} transparent transparent transparent;
`

export default function Loading({ color }: Props) {

    return (
        <Container className='fade-animation-slow'>
            <div className="message-lds-ring">
                <InnerContainer color={color} />
                <div />
                <div />
                <div />
            </div>

        </Container >
    )
}