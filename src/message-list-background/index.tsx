import React from 'react'
import styled from 'styled-components'

const ScrollBackground = styled.div<{
    roundedCorners?: boolean
}>`
background-color: #f3f4f6;
position: relative;
width: 100%;
height: 100%;
border-radius: ${({ roundedCorners }) => roundedCorners ? '16px' : '0px'};

`

const ScrollBackgroundContainer = styled.div<{
    mobile?: boolean,
}>`
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
    mobileView?: boolean,
    roundedCorners?: boolean
}

export default function MessageListBackground({
    mobileView,
    roundedCorners = true
}: Props) {

    return (
        <ScrollBackgroundContainer mobile={mobileView}>
            <ScrollBackground roundedCorners={roundedCorners} />
        </ScrollBackgroundContainer>
    )
}