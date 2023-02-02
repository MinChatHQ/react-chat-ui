import React from 'react'
import styled from 'styled-components'
import Loading from './loading'

type Props = {
    text?: string,
    image?: string,
    loading?: boolean
    themeColor?: string
    // determines whether its the last message in the group of outgoing messages
    last?: boolean
    //determines whether its the only message in the group of outgoing messages
    single?: boolean
    clusterFirstMessage?: boolean
    clusterLastMessage?: boolean

}

export const Wrapper = styled.div<{ firstMessage?: boolean, lastMessage?: boolean }>`
    display:flex;
    justify-content: end;
    margin-right: 10px;
    margin-top: ${({ firstMessage }) => firstMessage ? "16px" : "6px"};
    position: relative;
    box-sizing: border-box;
    margin-bottom: ${({ lastMessage }) => lastMessage ? "16px" : "6px"};
`



export const Container = styled.div`
max-width:272px;
margin-left: 10px;
display:flex;
flex-direction:row;
justify-content:flex-end;
align-items:flex-end;
gap:10px;
position:relative;
box-sizing: border-box;

`
export const Background = styled.div<{
    bgColor: string,
    borderTopRight?: boolean,
    borderTopLeft?: boolean,
    borderBottomLeft?: boolean,
    borderBottomRight?: boolean,
}>`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color:${({ bgColor }) => bgColor};

    border-top-left-radius: ${({ borderTopLeft }) => borderTopLeft ? "8px" : "2px"};
    border-top-right-radius: ${({ borderTopRight }) => borderTopRight ? "8px" : "2px"};
    border-bottom-left-radius: ${({ borderBottomLeft }) => borderBottomLeft ? "8px" : "2px"};
    border-bottom-right-radius: ${({ borderBottomRight }) => borderBottomRight ? "8px" : "2px"};


`

export const Content = styled.div`
text-align:left;
vertical-align:text-top;
font-size:14px;
align-self:flex-start;
line-height:auto;
color:#000000;
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
padding-left:16px;
padding-right:16px;
padding-top:8px;
padding-bottom:8px;
position: relative;
box-sizing: border-box;

`

// const Check = styled.img`
// align-self:flex-start;
// top:2.5px;
// position:absolute;
// width:16px;
// height:16px;
// padding:0px;
// `

export const TimestampContainer = styled.div`
margin-right: 4px;
margin-bottom: 4px;
display:flex;
flex-direction:row;
justify-content:flex-end;
align-items:center;
box-sizing: border-box;
position:relative;
`

export const Timestamp = styled.div`
text-align:right;
vertical-align:text-top;
font-size:12px;
align-self:flex-start;
line-height:auto;
color:#7a7a7a;
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`


const LoadingContainer = styled.div`
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
`

const ImageContainer = styled.div`
    width: 100%;
    margin: 8px;
    position: relative;
    `

const Image = styled.img`
    width: 100%;
 `

export default function MyMessage({
    text,
    image,
    themeColor = '#6ea9d7',
    loading,
    last,
    single,
    clusterFirstMessage,
    clusterLastMessage
}: Props) {
    return (
        <Wrapper
            lastMessage={clusterLastMessage}
            firstMessage={clusterFirstMessage}
            className='fade-animation'
        >
            <div>
                {/* <TimestampContainer>
                {/* <Check src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACMSURBVHgB7Yy9DYAgEIUVE2pHcAV7GicxbkFopIJWN3AD3cCGws4VXAMqz0QT/CMhWvKSF47LfV8UhXxO4nPMGKsJIblSajp2yAeGh0MXe38ScM7TrQ64klIOrwKtdWOMmUGSPcFCiO4qj+0PpTRDCI3bjDEuQFa64JvgIkn3vsKPAkvSw9i64JCfsgIYfzJLoAJ44wAAAABJRU5ErkJggg==' /> 
                <Timestamp>time</Timestamp>
            </TimestampContainer> */}

                <Container>
                    <Background
                        borderTopLeft
                        borderBottomLeft
                        borderBottomRight={last ? true : false}
                        borderTopRight={!last && single ? true : false}
                        bgColor={themeColor} />

                    {image ?
                        <ImageContainer>
                            <Image src={image} />
                        </ImageContainer>
                        :
                        <Content>{text}</Content>
                    }


                    {loading && <LoadingContainer> <Loading /> </LoadingContainer>}

                </Container>

            </div>
        </Wrapper>
    )
}

