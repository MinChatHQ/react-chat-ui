import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import MessageType from '../MessageType';
import placeholderProfilePNG from './profile.png';

export type Props = {
  title: string;
  lastMessage?: MessageType;
  avatar?: string;
  onClick: () => void;
  selected?: boolean;
  themeColor?: string;
  /**
   * the current user on the chat ui
   */
  currentUserId?: string;
};
const Container = styled.div`
  width: 100%;
  height: 88px;
  position: relative;
  margin-top: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;
const ContentContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  padding-left: 8px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const Background = styled.div<{ themeColor: string; selected?: boolean }>`
position: absolute;
width: 100%;
height: 100%;
background-color: ${({ themeColor, selected }) =>
    selected ? themeColor : '#ffffff'};
opacity: 0.2;
z-index: 1;
transition: all 0.3s ease-in-out;

&:hover{
${({ selected }) => (!selected ? 'opacity: 0.09;' : '')} 
background-color: ${({ themeColor }) => themeColor};

}
`;

const Name = styled.div<{ seen?: boolean }>`
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  text-align: left;
  vertical-align: text-top;
  font-size: 14px;
  line-height: auto;
  color: #000000;

  ${({ seen }) =>
    !seen
      ? `
color: black;
font-weight: 700;
`
      : ''}
`;

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
  seen?: boolean;
  width: number;
  media?: boolean;
}>`
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  text-align: left;
  vertical-align: text-top;
  font-size: 12px;
  align-self: flex-start;
  position: relative;
  color: #7a7a7a;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  max-width: ${({ width }) => width}px;
  display: flex;
  margin-top: 4px;

  ${({ seen }) =>
    !seen
      ? `
color: black;
font-weight: 600;
`
      : ''}
`;

// const TimeSent = styled.div`
// text-align:left;
// vertical-align:text-top;
// font-size:12px;
// font-family:SF Pro Text;
// align-self:flex-start;
// position:relative;
// color:#7a7a7a;
// margin-right: 24px;
// white-space: nowrap;
// `

const TextContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
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
`;

const DisplayPicture = styled.img`
  width: 58px;
  height: 58px;
  border-radius: 9999px;
  box-sizing: border-box;
  border-width: 2px;
  border-color: rgb(255 255 255);
  object-fit: cover;
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

export default function Conversation({
  title,
  lastMessage,
  onClick,
  avatar,
  selected = false,
  themeColor = '#6ea9d7',
  currentUserId,
}: Props) {
  const [containerWidth, setContainerWidth] = useState(0);

  const [usedAvatar, setUsedAvatar] = React.useState<string>(
    placeholderProfilePNG
  );

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
    <Container ref={containerRef} onClick={onClick} className="fade-animation">
      <Background selected={selected} themeColor={themeColor} />

      <ContentContainer>
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

        <TextContainer>
          <Name seen={lastMessage?.seen}>{title}</Name>

          <MessageComponent
            width={containerWidth - 96}
            seen={lastMessage?.seen}
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
              lastMessage?.text
            )}
          </MessageComponent>
          {/* <TimeSent>12:35 am</TimeSent> */}
        </TextContainer>
      </ContentContainer>
    </Container>
  );
}
