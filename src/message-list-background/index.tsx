import React from 'react'
import styled from 'styled-components'

const ScrollBackground = styled.div`
background-color: #f3f4f6;
position: relative;
width: 100%;
height: 100%;
border-radius: 16px;

`

const ScrollBackgroundContainer = styled.div<{ mobile?: boolean }>`
position: absolute;
width: 100%;
height: 100%;
z-index: 0;
box-sizing: border-box;
${({ mobile }) => !mobile ? `
padding-right: 12px;
` : ""}

`

type Props = {
    mobileView?: boolean
}

export default function MessageListBackground({ mobileView }: Props) {
    return (
        <ScrollBackgroundContainer mobile={mobileView}>
            <ScrollBackground />
        </ScrollBackgroundContainer>
    )
}