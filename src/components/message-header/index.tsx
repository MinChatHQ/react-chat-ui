import React, { useEffect, useState } from 'react'
import styled, { keyframes } from "styled-components"
import { calculateLastSeen } from '../../utils/date-utils'
import useColorSet from '../../hooks/useColorSet'
import placeholderProfilePNG from '../../assets/profile.svg';

export type Props = {
    onBack?: () => void
    children?: React.ReactNode
    showBack?: boolean
    mobileView?: boolean
    lastActive?: Date
    avatar?: string;
    colorSet?: {
        backgroundColor?: string
        textColor?: string
        lastActiveColor?: string
        backColor?: string
    }
}


const Container = styled.div<{ mobile?: boolean }>`
    position: relative;
    width: 100%;
    height: 64px;
    display: flex;
    box-sizing: border-box;

    ${({ mobile }) => !mobile ? `
    padding-right: 10px;
    ` :
        ``}
`
const InnerContainer = styled.div<{
    backgroundColor?: string
    mobileView?: boolean
}>`
    background-color:${({ backgroundColor }) => backgroundColor || '#f3f4f6'};
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    height:100%;
    padding:0px;
    box-shadow:0px 1px 0px rgba(0, 0, 0, 0.07999999821186066);
    position:relative;
    width:100%;
    z-index: 1;
    display: flex;
    align-items: center;
    box-sizing: border-box;

    ${({ mobileView }) => !mobileView ? `
border-left: 1px solid #e5e7eb;
border-right: 1px solid #e5e7eb;
border-top: 1px solid #e5e7eb;
` : ""}
`

const HeadingContainer = styled.div`
position:relative;
width: 100%;

`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ChatTitle = styled.div<{
    color?: string
}>`
    text-align:left;
    vertical-align:text-top;
    font-size:16px;
    line-height:auto;
    color:${({ color }) => color || '#000000'};
    user-select: none;
    position: relative;
    width: 100%;
    font-weight: 500;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

    animation: ${fadeIn} 0.2s ease-in-out;
`

const LastSeenText = styled.div<{
    color?: string
}>`
    text-align:left;
    vertical-align:text-top;
    font-size:10px;
    line-height:auto;
    color:${({ color }) => color || 'rgb(107 114 128)'};
    user-select: none;
    position: relative;
    width: 100%;
    font-weight: 100;
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
z-index: 1;
box-sizing: border-box;

`



const BackIcon = styled.svg<{
    color?: string
}>`
padding:0px;
cursor: pointer;
box-sizing: border-box;
animation: ${fadeIn} 0.2s ease-in-out;

color: ${({ color }) => color ? ` ${color}` : 'black'};
`


const DisplayPictureContainer = styled.div`
  width: 36px;
  height: 36px;
  margin-left: 12px;
  margin-right: 12px;
  box-sizing: border-box;
  position: relative;
`;

const DisplayPicture = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  box-sizing: border-box;
  border-width: 2px;
  border-color: rgb(255 255 255);
  object-fit: cover;
  z-index: 1;
  position: relative;
  pointer-events: none;
`;


export default function MessageHeader({
    onBack,
    children,
    showBack = true,
    mobileView,
    lastActive,
    avatar,
    colorSet
}: Props) {

    const [lastSeen, setLastSeen] = useState<string | undefined>()
    const [intervalId, setIntervalId] = useState<any>()

    const [usedAvatar, setUsedAvatar] = React.useState<string>(placeholderProfilePNG);

    useEffect(() => {
        if (avatar && avatar.trim().length > 0) {
            setUsedAvatar(avatar);
        }
    }, [avatar]);

    useEffect(() => {
        /**
    * 
    */
        function updateLastSeen() {
            if (lastActive) {
                setLastSeen(calculateLastSeen(lastActive))
            } else {
                setLastSeen(undefined)
            }
        }


        updateLastSeen()

        clearInterval(intervalId)
        if (lastActive) {
            const id = setInterval(() => updateLastSeen(), 5_000)
            setIntervalId(id)
        }


        return () => {
            if (intervalId) {
                clearInterval(intervalId);
                setIntervalId(null); // Reset intervalId after clearing
            }
        };
    }, [lastActive])

    const backgroundColor = colorSet?.backgroundColor || useColorSet("--message-header-background-color")
    const textColor = colorSet?.textColor || useColorSet("--message-header-text-color")
    const lastActiveColor = colorSet?.lastActiveColor || useColorSet("--message-header-last-active-color")
    const backColor = colorSet?.backColor || useColorSet("--message-header-back-color")

    return (
        <Container
            mobile={mobileView}>

            <InnerContainer
                mobileView={mobileView}
                backgroundColor={backgroundColor}>

                {showBack && <BackContainer
                    onClick={onBack}
                >
                    <BackIcon
                        color={backColor}
                        className=''
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.694 18.6943C15.102 18.2867 15.102 17.6259 14.694 17.2184L9.4699 12L14.694 6.78165C15.102 6.37408 15.102 5.71326 14.694 5.30568C14.2859 4.89811 13.6244 4.8981 13.2164 5.30568L7.30602 11.2096C7.08861 11.4267 6.98704 11.7158 7.00132 12.0002C6.98713 12.2844 7.0887 12.5733 7.30603 12.7904L13.2164 18.6943C13.6244 19.1019 14.2859 19.1019 14.694 18.6943Z" />
                    </BackIcon>
                </BackContainer>
                }

                <div>
                    <DisplayPictureContainer>
                        <DisplayPicture
                            onError={() => {
                                setUsedAvatar(placeholderProfilePNG);
                            }}
                            src={usedAvatar}
                        />
                    </DisplayPictureContainer>
                </div>

                <HeadingContainer>
                    <ChatTitle
                        color={textColor}
                        className=''>{children}</ChatTitle>

                    {lastSeen &&
                        <LastSeenText
                            color={lastActiveColor}
                        >{lastSeen}</LastSeenText>
                    }

                </HeadingContainer>

                {/* <div id='avatar/9/online👆' className='avatar/9/online👆'>
                    <img id='online2' className='online2' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACHSURBVHgBjZDhDUAwFITvdQIbYAMj1CSMYANsYANs0hFsgA1swD3qn2gveWlf70tzOYFXtjYWgpbXgpNwHE7MWz5M6ssN7U3Lxw5fEnRbOvTCn2ouI/50ojSEKoTESIaHRViFgkcEmCi4RIDOMGgfxFiTYU/uF6anXcq7+5q0AYsn9+Ihp/4FtaknQrWVO5cAAAAASUVORK5CYII=' />
                </div> */}
            </InnerContainer>
        </Container>

    )
}