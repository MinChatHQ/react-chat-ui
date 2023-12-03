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

margin-right:2px;
align-self:flex-start;
line-height:auto;
color: rgb(75 85 99);
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`

const Check = styled.div`
position:relative;
width:16px;
height:16px;
padding-bottom:4px;
padding-right:4px;
color: rgb(75 85 99);
`

const PlaceholderCheck = styled(Check)`
width:8px;
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
    showSeen,
    seen
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


                    <Check>
                        {seen ?


                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="16px"
                                height="16px"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"><path
                                    fillRule="evenodd"
                                    d="m6 16.293 9.646-9.647.708.708-10 10a.5.5 0 0 1-.708 0l-4-4 .708-.708L6 16.293zm6 0 9.646-9.647.707.708-9.999 10a.5.5 0 0 1-.707 0l-1.5-1.5.707-.708L12 16.293z"
                                    clipRule="evenodd"></path></svg>
                            :
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16px"
                                height="16px"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        }
                    </Check>
                    :
                    <PlaceholderCheck />
                )
            }
        </Container>
    )
}