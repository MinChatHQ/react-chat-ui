import React, {  } from 'react'
import styled from 'styled-components'
import "./index.css"

type Props = {
    themeColor?: string
}


const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    ;
`


const InternalDiv = styled.div<{ themeColor?: string }>`
 box-sizing: border-box;
    display: block;
    position: absolute;
    width: 42px;
    height: 42px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ themeColor }) => themeColor} transparent transparent transparent;
    box-sizing: border-box;

`


export default function Loading({
    themeColor ='#6ea9d7'
}: Props) {


    return (
        <Container>
                <div className="lds-ring fade-animation-slow">
                    <InternalDiv themeColor={themeColor} />
                    <InternalDiv themeColor={themeColor} />
                    <InternalDiv themeColor={themeColor} />
                    <InternalDiv themeColor={themeColor} />
                </div>
        </Container >
    )
}