import React, { useContext, useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import type { MessageType } from '../../types/MessageType';
import placeholderProfilePNG from '../../assets/profile.svg';
import { calculateTimeAgo } from '../../utils/date-utils';
import useColorSet from '../../hooks/useColorSet';
import MinChatUIContext from '../../contexts/MinChatUIContext';
import { marked } from 'marked';

export type Props = {
  title: string;
  lastMessage?: MessageType;
  unread?: boolean,
  avatar?: string;
  onClick: () => void;
  selected?: boolean;
  /**
   * the current user on the chat ui
   */
  currentUserId?: string;
  /**
   * Whether the user is online
   */
  isOnline?: boolean;
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 88px;
  position: relative;
  margin-top: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  user-select: none;
  padding-left: 16px;
  animation: ${fadeIn} 0.2s ease-in-out;
`;
const ContentContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const Background = styled.div<{
  themeColor: string
  selected?: boolean
  hoverColor?: string
  backgroundColor?: string
  selectedBackgroundColor?: string
}>`
position: absolute;
left: 8px;
right: 8px;
height: 100%;
background-color: ${({ themeColor, selected, backgroundColor, selectedBackgroundColor }) =>
    selected ? (selectedBackgroundColor || themeColor) : (backgroundColor || '#ffffff')};
opacity: 0.2;
z-index: 1;
transition: all 0.3s ease-in-out;
border-radius: 12px;

margin-top: 4px;
margin-bottom: 4px;


&:hover{
${({ selected }) => (!selected ? 'opacity: 0.09;' : '')} 
background-color: ${({ themeColor, hoverColor }) => hoverColor || themeColor};

}
`;

const Name = styled.div<{
  unread?: boolean,
  titleTextColor?: string
}>`
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  text-align: left;
  vertical-align: text-top;
  font-size: 14px;
  line-height: auto;
  position: relative;
  z-index: 1;
  pointer-events: none;
  color: ${({ titleTextColor }) => titleTextColor || '#000000'};

  ${({ unread }) =>
    unread
      ? `
font-weight: 700;
`
      : ''}
`;

const NameContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`

const Timestamp = styled.div<{
  color?: string,
  unread?: boolean
}>`
text-align:right;
vertical-align:text-top;
font-size:12px;
margin-left: 6px;
margin-top:2px;
margin-right:2px;
align-self:flex-start;
line-height:auto;
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

${({ unread, color }) =>
    unread
      ? `
color: ${color || 'black'} ;
font-weight: 600;
` : `
color: ${color || 'rgb(75 85 99)'};
`}
`

// const LastMessageUser = styled.div<{ seen?: boolean }>`
// font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
//     text-align:left;
// vertical-align:text-top;
// font-size:12px;
// align-self:flex-start;
// position:relative;
// color:#7a7a7a;
// white-space: nowrap;
// text-overflow: ellipsis;

// ${({ seen }) => !seen ? `
// color: black;
// font-weight: 600;
// ` : ''}

// `

const MessageComponent = styled.div<{
  unread?: boolean;
  width: number;
  media?: boolean;
  color?: string
}>`
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  text-align: left;
  vertical-align: text-top;
  font-size: 12px;
  align-self: flex-start;
  position: relative;
  color: ${({ color }) => color || '#7a7a7a'};
  min-width: 0; 
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  max-width: ${({ width }) => width}px;
  display: flex;
  margin-top: 4px;

  ${({ unread, color }) =>
    unread
      ? `
color: ${color || 'black'} ;
font-weight: 600;
` : ''}

`;


const TextContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
    min-width: 0; 
  padding-right: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const DisplayPictureContainer = styled.div`
  width: 58px;
  height: 58px;
  margin-right: 12px;
  box-sizing: border-box;
  position: relative;
`;

const DisplayPicture = styled.img`
  width: 58px;
  height: 58px;
  border-radius: 9999px;
  box-sizing: border-box;
  border-width: 2px;
  border-color: rgb(255 255 255);
  object-fit: cover;
  z-index: 1;
  position: relative;
  pointer-events: none;
`;

const MediaIconContainer = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 3px;
`;

const MediaContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 4px;
  margin-left: 4px;
`

const OnlineIndicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #22c55e;
  border: 2px solid #fff;
  position: absolute;
  bottom: 1px;
  right: 1px;
  z-index: 2;
`;

export default function Conversation({
  title,
  lastMessage,
  onClick,
  avatar,
  selected = false,
  currentUserId,
  unread,
  isOnline = false
}: Props) {
  const [containerWidth, setContainerWidth] = useState(0);

  const [usedAvatar, setUsedAvatar] = React.useState<string>(placeholderProfilePNG);

  const [dateSent, setDateSent] = useState<string | undefined>()
  const [intervalId, setIntervalId] = useState<any>()

  const { themeColor } = useContext(MinChatUIContext)

  useEffect(() => {
    function updateDateSent() {
      if (lastMessage?.createdAt) {
        setDateSent(calculateTimeAgo(new Date(lastMessage.createdAt)))
      }
    }

    updateDateSent()
    clearInterval(intervalId)

    const id = setInterval(() => updateDateSent(), 60_000)
    setIntervalId(id)

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null); // Reset intervalId after clearing
      }

    };
  }, [lastMessage])


  useEffect(() => {
    window.addEventListener('resize', () => {
      calculateContainerWidth();
    });
  }, []);

  useEffect(() => {
    if (avatar && avatar.trim().length > 0) {
      setUsedAvatar(avatar);
    }
  }, [avatar]);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    calculateContainerWidth();
  }, [containerRef]);


  const backgroundColor = useColorSet("--chatitem-background-color")
  const titleTextColor = useColorSet("--chatitem-title-text-color")
  const contentTextColor = useColorSet("--chatitem-content-text-color")
  const hoverColor = useColorSet("--chatitem-hover-color")
  const selectedBackgroundColor = useColorSet("--chatitem-selected-background-color")


  /**
   *
   */
  const calculateContainerWidth = () => {
    if (containerRef && containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth);
    }
  };


  const getMediaIcon = () => {

    switch (lastMessage?.media?.type) {
      case "image":
        return <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={"100%"}
          height={"100%"}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>

      case "video":
        return <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={"100%"}
          height={"100%"}
        >
          <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
        </svg>
      case "gif":
        return <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={"100%"}
          height={"100%"}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>


      default:
        return <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={"100%"}
          height={"100%"}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
        </svg>

    }
  }

  const getMediaText = () => {

    switch (lastMessage?.media?.type) {
      case "image":
        return "Image"
      case "video":
        return lastMessage?.media?.name ? lastMessage?.media?.name : "Video"
      case "gif":
        return lastMessage?.media?.name ? lastMessage?.media?.name : "Gif"
      default:
        return lastMessage?.media?.name ? lastMessage?.media?.name : "File"
    }
  }

  return (
    <Container ref={containerRef} onClick={onClick} className="">
      <Background selected={selected}
        hoverColor={hoverColor}
        selectedBackgroundColor={selectedBackgroundColor}
        backgroundColor={backgroundColor}
        themeColor={themeColor} />

      <ContentContainer>
        <div>
          <DisplayPictureContainer>
            <DisplayPicture
              onError={() => {
                setUsedAvatar(placeholderProfilePNG);
              }}
              src={usedAvatar}
            />
            {isOnline && <OnlineIndicator />}
          </DisplayPictureContainer>
        </div>

        <TextContainer>

          <NameContainer>
            <Name
              titleTextColor={titleTextColor}
              unread={unread}>{title}</Name>
            <Timestamp
              unread={unread}
              color={contentTextColor}>{dateSent}</Timestamp>
          </NameContainer>

          <MessageComponent
            color={contentTextColor}
            width={containerWidth - 110}
            unread={unread}
          >
            {lastMessage?.user.id === currentUserId
              ? 'You'
              : lastMessage?.user.name}
            :{'  '}
            {lastMessage?.media ? (
              <MediaContainer>
                <MediaIconContainer>
                  {getMediaIcon()}
                </MediaIconContainer>
                {getMediaText()}
              </MediaContainer>
            ) : (
              <span
                style={{
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  display: 'block', // or 'inline-block'
                  minWidth: 0,
                  maxWidth: '100%',
                }}
                dangerouslySetInnerHTML={{ __html: marked(lastMessage?.text || "") }}></span>
            )}
          </MessageComponent>
        </TextContainer>
      </ContentContainer>
    </Container>
  );
}
