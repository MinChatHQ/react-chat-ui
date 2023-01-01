import React from 'react'
import styled from "styled-components"
import useCheckIsMobile from '../hooks/useCheckIsMobile'

export type Props = {
    onBack?: () => void
    children?: string
    showBack?: boolean
    mobileView?: boolean
}


const Container = styled.div < { mobile?: boolean }>`
background-color:#f3f4f6;
border-top-left-radius: 16px;
border-top-right-radius: 16px;

${({ mobile }) => !mobile ? `

margin-right: 12px;

` :
        `
`
    }
height:56px;
padding:0px;
box-shadow:0px 1px 0px rgba(0, 0, 0, 0.07999999821186066);
position:absolute;
top: 0px;
left: 0px;
right: 0px;
z-index: 10;
display: flex;
align-items: center;
z-index: 10;
box-sizing: border-box;

`

const ChatTitle = styled.div`
text-align:center;
vertical-align:text-top;
font-size:16px;
line-height:auto;
color:#000000;
position:absolute;
width: 100%;
font-weight: 500;
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

`

const BackContainer = styled.div`
cursor: pointer;
height: 100%;
padding-left: 8px;
padding-right: 8px;
display: flex;
align-items: center;
justify-content: center;
width: 38px;
z-index: 12;
box-sizing: border-box;

`

const BackIcon = styled.svg`
padding:0px;
cursor: pointer;
box-sizing: border-box;

`
export default function MessageHeader({ onBack, children, showBack = true, mobileView }: Props) {
    const mobile = useCheckIsMobile()
    return (
        <Container
            mobile={mobile || mobileView}>

            {showBack && <BackContainer
                onClick={onBack}
            >
                <BackIcon
                    className='fade-animation'
                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.694 18.6943C15.102 18.2867 15.102 17.6259 14.694 17.2184L9.4699 12L14.694 6.78165C15.102 6.37408 15.102 5.71326 14.694 5.30568C14.2859 4.89811 13.6244 4.8981 13.2164 5.30568L7.30602 11.2096C7.08861 11.4267 6.98704 11.7158 7.00132 12.0002C6.98713 12.2844 7.0887 12.5733 7.30603 12.7904L13.2164 18.6943C13.6244 19.1019 14.2859 19.1019 14.694 18.6943Z" fill="black" />
                </BackIcon>
            </BackContainer>
            }

            <ChatTitle className='fade-animation'>{children}</ChatTitle>
            {/* <div id='subheader' class='subheader'>
                Seen 1 hour ago</div> */}

            {/* <div id='avatar/9/online👆' class='avatar/9/online👆'>
                <img id='online2' class='online2' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACHSURBVHgBjZDhDUAwFITvdQIbYAMj1CSMYANsYANs0hFsgA1swD3qn2gveWlf70tzOYFXtjYWgpbXgpNwHE7MWz5M6ssN7U3Lxw5fEnRbOvTCn2ouI/50ojSEKoTESIaHRViFgkcEmCi4RIDOMGgfxFiTYU/uF6anXcq7+5q0AYsn9+Ihp/4FtaknQrWVO5cAAAAASUVORK5CYII=' />
            </div> */}
        </Container>

    )
}