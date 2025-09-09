import React from 'react'
import styled, { keyframes } from 'styled-components'

type Props = {
  color?: string
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Ring = styled.div`
  display: inline-block;
  position: relative;
  width: 12px;
  height: 12px;
`

const Segment = styled.div<{ color?: string; delay?: number }>`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 8px;
  height: 8px;

  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  border: 2px solid ${({ color }) => color || '#fff'};
  border-radius: 50%;
  animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${({ color }) => color || '#fff'} transparent transparent transparent;
  animation-delay: ${({ delay = 0 }) => `${delay}s`};
`

export default function Loading({ color }: Props) {
  return (
    <Container>
      <Ring>
        <Segment color={color} delay={-0.45} />
        <Segment color={color} delay={-0.3} />
        <Segment color={color} delay={-0.15} />
        <Segment color={color} delay={0} />
      </Ring>
    </Container>
  )
}