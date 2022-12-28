import React, { useState } from 'react'
import styled from 'styled-components'
import useCheckIsMobile from '../../hooks/useCheckIsMobile'

type Props = {
    onSendMessage: (text: string) => void
    themeColor: string
    mobileView: boolean

}

const Container = styled.form<{ mobile: boolean }>`
height:56px;
background-color:#f3f4f6;
${({ mobile }) => mobile ? `
    
`:
        ` 
margin-right: 12px;
 `}

border-bottom-right-radius: 16px;
border-bottom-left-radius: 16px;
padding-left: 12px;
box-shadow:0px -1px 0px rgba(0, 0, 0, 0.07999999821186066);
position: absolute;
bottom: 0px;
left:0px;
right: 0px;
display: flex;
align-items: center;
z-index: 10;
box-sizing: border-box;



`

const InputContainer = styled.div`
/* height:40px; */
width: 100%;
margin-right: 56px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
box-sizing: border-box;
`

const InputBackground = styled.div<{ bgColor: string }>`
opacity: 0.4;
height: 100%;
width: 100%;
border-radius:0.7rem;
position: absolute;
background-color: ${({ bgColor }) => bgColor};
border:1px solid #ecebeb;

`

const InputElement = styled.input`
width:100%;
/* height: 100%; */
padding:0px;
border: none;
position:relative;
font-size:14px;

color: rgba(0,0,0,.87);
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
line-height:auto;
padding-left: 16px;
background-color: transparent;
text-align:center;
vertical-align:text-top;
opacity: 1;
padding-top: 1em;
    padding-right: 1em;
    padding-bottom: 1em;
    padding-left: 1em;
    box-sizing: border-box;


&:focus{
    outline: none;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgba(0,0,0,.36);
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: rgba(0,0,0,.36);
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: rgba(0,0,0,.36);
}
 `


const ArrowContainer = styled.div<{ showCursor: boolean }>`
right: 0px;
position: absolute;
    padding-left:24px;
    padding-right:24px;
    cursor: ${({ showCursor }) => showCursor ? 'pointer' : 'default'};
    display: flex;
    justify-content: center;
    align-items: center;
height:100%;
z-index: 12;
opacity: ${({ showCursor }) => showCursor ? '1' : '0.4'};
box-sizing: border-box;

`


export default function Input({
    onSendMessage,
    themeColor,
    mobileView
}: Props) {

    const [text, setText] = useState("")


    const mobile = useCheckIsMobile()

    const handleSubmit = () => {
        if (text.trim().length > 0) {
            onSendMessage(text.trim())
            setText("")

        }
    }
    return (
        <Container
            className='fade-animation'
            mobile={mobile || mobileView}
            onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
            }}
        >

            <InputContainer
            >
                <InputBackground
                    bgColor={themeColor}
                />

                <InputElement
                    type={'text'}
                    onChange={(event) => setText(event.target.value)}
                    value={text}
                    placeholder='Send a message...'
                />
            </InputContainer>



            <ArrowContainer
                showCursor={text.trim().length > 0}
                onClick={handleSubmit}
            >

                <svg
                    fill={themeColor}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 512 512" >
                    <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                </svg>

            </ArrowContainer>
        </Container >
    )
}