import React from 'react'
import styled from 'styled-components'
import "./index.css"

type Props = {}


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center
    ;
`


export default function Loading({ }: Props) {

    return (
        <Container className='fade-animation-slow'>
            <div className="message-lds-ring"><div></div><div></div><div></div><div></div></div>
            
        </Container >
    )
}