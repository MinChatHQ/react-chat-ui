import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import Message, { Props } from "../src/message"

const meta: Meta = {
  title: 'Message',
  component: Message,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const LeftTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  type="incoming"
>Hello World!</Message>


const RightTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  type="outgoing"
>Hello World!</Message>


const LoadingTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  loading={true}
  themeColor='#6ea9d7'
  type="outgoing"
>Hello World!</Message>

const WithAvatarTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  type="incoming"
  showAvatar={true}
>Hello World!</Message>

const WithHeaderTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  type="incoming"
  showAvatar={true}
  showHeader={true}
>Hello World!</Message>

const LastIncomingTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  type="incoming"
  showAvatar={true}
  last={true}
>Hello World!</Message>


const SingleIncomingTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  type="incoming"
  showAvatar={true}
  single={true}
>Hello World!</Message>



const SingleOutgoingTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  type="outgoing"
  single
>Hello World!</Message>

const LastOutgoingTemplate: Story<Props> = args => <Message
{...args}
user={{
  "id": "danny_1",
  "name": "Daniel Georgetown",
  avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
}}
themeColor='#6ea9d7'
type="outgoing"
last
>Hello World!</Message>


// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Incoming = LeftTemplate.bind({});
export const IncomingWithAvatar = WithAvatarTemplate.bind({});
export const IncomingWithHeader = WithHeaderTemplate.bind({});
export const SingleIncoming = SingleIncomingTemplate.bind({});
export const LastIncoming = LastIncomingTemplate.bind({});

export const Outgoing = RightTemplate.bind({});
export const SingleOutgoing = SingleOutgoingTemplate.bind({});
export const LastOutgoing = LastOutgoingTemplate.bind({});
export const SendMessageLoading = LoadingTemplate.bind({});




