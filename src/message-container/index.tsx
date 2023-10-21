import React from 'react'
import styled from 'styled-components'

export type Props = {
    children: React.ReactNode
}

const Container = styled.div`
 position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
`


export default function MessageContainer({
    children
}: Props) {
  return (
    <Container>
        {children}
    </Container>
    )
}