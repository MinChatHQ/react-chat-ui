import React from 'react'
import styled from 'styled-components'
import { MediaType } from '../../../types/MessageType'
import { getBorderCss } from '../borderController'


interface Props extends MediaType {
    last?: boolean
    single?: boolean
    messageType: "incoming" | "outgoing"
}

const ImageContainer = styled.div`
    width: 99%;
    padding: 1px;
    position: relative;
user-select: none;

    `

const Image = styled.img<{
    borderCss: string,
}>`
    width: 100%;
    margin: 0px;
    position: relative;

    ${({ borderCss }) => borderCss};

 `

const FileContainer = styled.a`
text-align:left;
vertical-align:text-top;
font-size:14px;
align-self:flex-start;
line-height:auto;
color:#000000;
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
padding-left:16px;
padding-right:16px;
padding-top:8px;
padding-bottom:8px;
position: relative;
box-sizing: border-box;
word-wrap: break-word;
width: 100%;
text-decoration: none;
user-select: none;
`

const SizeText = styled.span`
margin-left: 6px;
font-size: 11px;

`

const DownloadIcon = <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 24"
    style={{ position: "absolute", left: 12, top: 8 }}
    strokeWidth="2"
    stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>

const Video = styled.video<{
    borderCss: string,
}>`
    width: 100%;
    height: 240px;

    ${({ borderCss }) => borderCss};

`


export default function MediaContent({
    type,
    url,
    size,
    last,
    single,
    messageType
}: Props) {

    return (
        <>
            {(type === 'image' || type === 'gif') &&
                <ImageContainer>
                    <Image
                        borderCss={(() => getBorderCss({
                            type: messageType,
                            last,
                            single
                        }))()}
                        src={url}
                        alt={url} />
                </ImageContainer>
            }



            {(type === 'file' || type === 'video') &&
                <div style={{ position: "relative", width: "100%" }}>
                    {type === 'video' &&
                        <Video
                            controls
                            borderCss={(() => getBorderCss({
                                type: messageType,
                                last,
                                single
                            }))()}
                        >
                            <source src={url} type="video/mp4" />
                            <source src={url} type="video/ogg" />
                            Your browser does not support the video tag.
                        </Video>
                    }
                    <div style={{ width: "100%", display: 'flex' }}>
                        <FileContainer
                            target='_blank'
                            href={url}>{DownloadIcon}&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ textDecoration: "underline" }}>{url}{size && <SizeText>({size})</SizeText>}</span></FileContainer>
                    </div>
                </div>

            }
        </>
    )
}