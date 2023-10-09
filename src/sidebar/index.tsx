import React from 'react'
import styled from 'styled-components'

export type Props = {
    children: any
}

const Container = styled.div`
    /* max-width: 384px; */
    padding-top: 16px;
    padding-bottom: 16px;
    width: 35%;
    height: 100%;
    position: relative;
    box-sizing: border-box;

`

export default function Sidebar({ children }: Props) {
    return (
        <Container>{children}</Container>
    )
}