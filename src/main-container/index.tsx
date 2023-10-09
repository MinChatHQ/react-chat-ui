import React, {} from 'react'
import styled from 'styled-components'
import "../index.css"


const Container = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: row;
`


export interface Props {
    style?: React.CSSProperties | undefined
    children?: React.ReactNode
}

export default function MainContainer({
    children,
    style
}: Props) {

    return (
        <Container style={style}>
            {children}
        </Container>
    )
}