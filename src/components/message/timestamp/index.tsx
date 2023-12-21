import React, { useEffect, useState } from 'react'
import Loading from './loading'
import styled from 'styled-components'
import { calculateTimeAgo } from '../../../utils/date-utils'

type Props = {
    loading?: boolean
    date?: Date
    seen?: boolean
    showSeen?: boolean
    color?: string
    loaderColor?: string
    checkmarkColor?: string
}


const LoadingContainer = styled.div<{
    color?: string
}>`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right:4px;
    margin-left:2px;


    ${({ color }) => color ? `color: ${color};` : ''}
`

export const Content = styled.div<{
    color?: string
}>`
text-align:right;
vertical-align:text-top;
font-size:12px;

margin-right:2px;
align-self:flex-start;
line-height:auto;
color: ${({ color }) => color || 'rgb(75 85 99)'};
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`

const Check = styled.div<{
    color?: string
}>`
position:relative;
width:16px;
height:16px;
padding-bottom:4px;
padding-right:4px;
color: ${({ color }) => color || 'rgb(75 85 99)'};
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
user-select: none;

`

export default function Timestamp({
    loading,
    date,
    showSeen,
    seen,
    color,
    loaderColor,
    checkmarkColor
}: Props) {

    const [dateSent, setDateSent] = useState<string | undefined>()

    useEffect(() => {
        function updateDateSent() {
            if (date) {
                setDateSent(calculateTimeAgo(date))
            }
        }

        updateDateSent()

        const intervalId = setInterval(() => updateDateSent(), 60_000)

        return () => clearInterval(intervalId);

    }, [])

    return (
        <Container>

            <Content color={color}>{dateSent}</Content>

            {loading ?
                <LoadingContainer  > <Loading color={loaderColor} /> </LoadingContainer>
                :
                (showSeen ?


                    <Check
                        color={checkmarkColor}>
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