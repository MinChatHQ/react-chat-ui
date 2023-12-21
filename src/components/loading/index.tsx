import React from 'react';
import styled from 'styled-components';
import './index.css';
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

const InternalDiv = styled.div<{ themeColor?: string }>`
  box-sizing: border-box;
  width: 42px;
  height: 42px;
  margin: 8px;
  position: absolute;
  border: 6px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${({ themeColor }) => themeColor} transparent transparent
    transparent;
  box-sizing: border-box;
`;

export default function Loading({ themeColor }: Props) {

  const color = useColorSet("--loader-color")

  return (
    <Container>
      <div className="lds-ring">
        <InternalDiv themeColor={color || themeColor} />
        <InternalDiv themeColor={color || themeColor} />
        <InternalDiv themeColor={color || themeColor} />
        <InternalDiv themeColor={color || themeColor} />
      </div>
    </Container>
  );
}
