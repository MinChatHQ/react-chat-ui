import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useCheckIsMobile from '../hooks/useCheckIsMobile'

export type Props = {
    onSendMessage?: (text: string) => void
    themeColor?: string
    mobileView?: boolean
    onStartTyping?: () => void,
    onEndTyping?: () => void,
    // showAttachButton?: boolean,
    onAttachClick?: () => void,
}

const Container = styled.form<{ mobile?: boolean }>`
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

const InputBackground = styled.div<{ bgColor?: string }>`
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

const AttachmentContainer = styled.div`
left: 0px;
position: relative;
    padding-left:16px;
    padding-right:16px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
height:100%;
z-index: 12;
opacity:1;
box-sizing: border-box;
`


export default function MessageInput({
    onSendMessage,
    themeColor = '#6ea9d7',
    mobileView,
    onStartTyping,
    onEndTyping,
    // showAttachButton = true,
    onAttachClick
}: Props) {
    const [typing, setTyping] = useState(false);


    useEffect(() => {
        //call the function when typing starts or ends but should not call it on every render and should only be called when the value of typing changes
        if (typing) {
            onStartTyping && onStartTyping()
        } else {
            onEndTyping && onEndTyping()
        }
    }, [typing])

    let timeout: NodeJS.Timeout;

    const [text, setText] = useState("")


    const mobile = useCheckIsMobile()

    const handleSubmit = () => {
        if (text.trim().length > 0) {
            setTyping(false)
            onSendMessage && onSendMessage(text.trim())
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
            {/* {showAttachButton && ( */}
            <AttachmentContainer
                        onClick={onAttachClick}
                    >

                        <svg
                            fill={themeColor}
                            width="24"
                            height="24"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg">

                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                            <g id="SVGRepo_iconCarrier"> <title>paperclip</title> <path d="M29.131 15.262c-0.226-0.227-0.54-0.368-0.886-0.368-0.344 0-0.656 0.139-0.882 0.364l-11.003 10.959c-1.163 1.312-2.853 2.134-4.735 2.134-1.812 0-3.446-0.763-4.598-1.985l-0.003-0.003c-1.236-1.157-2.006-2.799-2.006-4.62 0-1.872 0.813-3.553 2.105-4.711l0.006-0.005 12.001-12c0.769-0.857 1.879-1.394 3.116-1.394s2.348 0.537 3.113 1.391l0.003 0.004c0.858 0.768 1.395 1.879 1.395 3.115s-0.536 2.345-1.389 3.109l-0.004 0.003-11.081 10.996c-1.463 1.438-2.912 1.273-3.698 0.473s-0.926-2.252 0.544-3.695l8.001-8.002c0.228-0.226 0.369-0.54 0.369-0.886 0-0.69-0.56-1.25-1.25-1.25-0.347 0-0.66 0.141-0.887 0.369l-7.992 7.993c-1.141 0.917-1.865 2.313-1.865 3.877 0 1.291 0.493 2.467 1.301 3.35l-0.003-0.004c0.887 0.841 2.089 1.357 3.411 1.357 1.537 0 2.91-0.698 3.821-1.795l0.007-0.008 11.090-11.004c1.307-1.226 2.121-2.963 2.121-4.891 0-0.111-0.003-0.222-0.008-0.332l0.001 0.016c-0.131-1.796-0.914-3.388-2.112-4.558l-0.001-0.001c-1.172-1.199-2.764-1.983-4.537-2.114l-0.023-0.001c-0.089-0.004-0.194-0.007-0.299-0.007-1.933 0-3.676 0.814-4.906 2.118l-0.003 0.003-12.002 12.002c-1.751 1.615-2.845 3.922-2.845 6.483 0 2.514 1.053 4.781 2.741 6.386l0.004 0.004c1.635 1.654 3.894 2.688 6.394 2.721l0.006 0c2.554-0.041 4.845-1.135 6.463-2.866l0.005-0.005 11-10.955c0.227-0.226 0.367-0.539 0.367-0.885 0-0.345-0.14-0.657-0.365-0.883l0 0z" /> </g>

                        </svg>

                    </AttachmentContainer>

                {/* )} */}

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
                    onKeyDown={() => {
                        clearTimeout(timeout);
                        setTyping(true);
                    }}
                    onKeyUp={() => {
                        timeout = setTimeout(() => {
                            setTyping(false);
                        }, 2_000);
                    }}
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