import React, { useEffect, useState } from 'react'
import Loading from './loading'
import styled from 'styled-components'

type Props = {
    loading?: boolean
    date?: Date
    seen?: boolean
    showSeen?: boolean

}


const LoadingContainer = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right:4px;
    margin-left:2px;
`

export const Content = styled.div`
text-align:right;
vertical-align:text-top;
font-size:12px;
margin-bottom:4px;
margin-right:2px;
align-self:flex-start;
line-height:auto;
color: rgb(75 85 99);
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`

const Check = styled.img`
align-self:flex-start;
top:2.5px;
position:relative;
width:16px;
height:16px;
padding:0px;
`

const TimestampContainer = styled.div`
margin-right: 4px;
margin-bottom: 4px;
display:flex;
flex-direction:row;
justify-content:flex-end;
align-items:center;
box-sizing: border-box;
position:relative;
`

const Container = styled.div`
display:flex;
width: 100%; 
position: relative;
justify-content: end;
align-items: center;
margin-top: -8px;

`

export default function Timestamp({
    loading,
    date,
    showSeen
}: Props) {

    const [dateSent, setDateSent] = useState<string | undefined>()

    useEffect(() => {

        /**
         * 
         */
        function updateDateSent() {

            if (date) {

                const currentDate = new Date()

                const timeDifference = (new Date(currentDate.toUTCString())).getTime() - (new Date(date.toUTCString())).getTime();
                const minutesAgo = Math.floor(timeDifference / (1000 * 60));
                const hoursAgo = Math.floor(minutesAgo / 60);
                const daysAgo = Math.floor(hoursAgo / 24);


                if (minutesAgo < 1) {
                    setDateSent('just now');
                }
                else if (minutesAgo < 60) {
                    setDateSent(`${minutesAgo}m`);
                } else if (hoursAgo < 24) {
                    setDateSent(`${hoursAgo}h`);
                } else {
                    setDateSent(`${daysAgo}d`);
                }
            }
        }

        updateDateSent()

        setTimeout(() => updateDateSent(), 60_000)

    }, [])

    return (
        <Container>

            <Content>{dateSent}</Content>

            {loading ?
                <LoadingContainer> <Loading /> </LoadingContainer>
                :
                (showSeen ?

                    <TimestampContainer>
                        <Check src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACMSURBVHgB7Yy9DYAgEIUVE2pHcAV7GicxbkFopIJWN3AD3cCGws4VXAMqz0QT/CMhWvKSF47LfV8UhXxO4nPMGKsJIblSajp2yAeGh0MXe38ScM7TrQ64klIOrwKtdWOMmUGSPcFCiO4qj+0PpTRDCI3bjDEuQFa64JvgIkn3vsKPAkvSw9i64JCfsgIYfzJLoAJ44wAAAABJRU5ErkJggg==' />
                    </TimestampContainer>
                    :
                    <div style={{width:"12px"}} />
                )
            }
        </Container>
    )
}