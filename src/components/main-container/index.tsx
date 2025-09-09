import React, { } from 'react'
import styled from 'styled-components'
import useColorSet from '../../hooks/useColorSet'


const Container = styled.div<{
    backgroundColor?: string
}>`
    height: 100%;
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: row;
    ${({ backgroundColor }) => backgroundColor ? `background-color: ${backgroundColor};` : ""}
`


export interface Props {
    style?: React.CSSProperties | undefined
    children?: React.ReactNode
}


export default function MainContainer({
    children,
    style
}: Props) {

    const backgroundColor = useColorSet("--container-background-color")

    return (
        <Container
            backgroundColor={backgroundColor}
            style={style}>
            {children}
        </Container>
    )
}