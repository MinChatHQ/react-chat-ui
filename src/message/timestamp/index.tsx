import React, { useEffect, useState } from 'react'
import Loading from './loading'
import styled from 'styled-components'
import { calculateTimeAgo } from '../../utils/date-utils'

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
        function updateDateSent() {
            if (date) {
                setDateSent(calculateTimeAgo(date))
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

                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="16px"
                                height="16px"
                                viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path
                                    fill='currentColor'
                                    d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"></path></svg>


                        }
                    </Check>
                    :
                    <PlaceholderCheck />
                )
            }
        </Container>
    )
}