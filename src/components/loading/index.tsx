import React from 'react';
import styled, { keyframes } from 'styled-components';
import useColorSet from '../../hooks/useColorSet';

type Props = {
  themeColor?: string;
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const InternalDiv = styled.div<{ themeColor?: string }>`
  box-sizing: border-box;
  width: 42px;
  height: 42px;
  margin: 8px;
  position: absolute;
  border: 2px solid #fff;
  border-radius: 50%;
  animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${({ themeColor }) => themeColor} transparent transparent transparent;
`;

const LdsRing = styled.div`
  display: inline-block;
  width: 48px;
  height: 48px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${InternalDiv}:nth-child(1) {
    animation-delay: -0.45s;
  }

  ${InternalDiv}:nth-child(2) {
    animation-delay: -0.3s;
  }

  ${InternalDiv}:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export default function Loading({ themeColor }: Props) {
  const color = useColorSet('--loader-color');

  return (
    <Container>
      <LdsRing>
        <InternalDiv themeColor={color || themeColor} />
        <InternalDiv themeColor={color || themeColor} />
        <InternalDiv themeColor={color || themeColor} />
        <InternalDiv themeColor={color || themeColor} />
      </LdsRing>
    </Container>
  );
}