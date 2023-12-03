import React from 'react';
import { Meta, Story } from '@storybook/react';
import MessageList, { MessageListProps } from '../src/message-list';
import styled from 'styled-components';
import { chats, messages, fewMessages } from './data';

const meta: Meta = {
  title: 'MessageList',
  component: MessageList,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<MessageListProps> = args => <div style={{ height: "100vh" }}><MessageList
  {...args}
  currentUserId="mark"
  messages={messages}
/>
</div>;

const LoadingTemplate: Story<MessageListProps> = args => <div style={{ height: "100vh" }}><MessageList
  {...args}
  currentUserId="danny_1"
  loading={true}
  messages={messages}
  themeColor='#6ea9d7'

/>
</div>;

const CustomLoadingTemplate: Story<MessageListProps> = args => <div style={{ height: "100vh" }}><MessageList
  {...args}
  currentUserId="danny_1"
  loading={true}
  messages={messages}
  themeColor='#6ea9d7'
  customLoaderComponent={<div style={{backgroundColor: "red"}}>Custom Loading...</div>}
/>
</div>;

const SendMessageLoadingTemplate: Story<MessageListProps> = args => <div style={{ height: "100vh" }}><MessageList
  {...args}
  currentUserId="danny_1"
  loading={false}
  themeColor='#6ea9d7'

  messages={[
    {
      "user": {
        "id": "danny_1",
        "name": "Daniel Georgetown",
        avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"

      },
      "text": "this message should have loading"
    },
    ...messages
  ]}
/>
</div>;


const FewEntriesTemplate: Story<MessageListProps> = args => <div style={{ height: "100vh" }}><MessageList
  {...args}
  currentUserId="danny_1"
  themeColor='#6ea9d7'

  messages={fewMessages}
/>
</div>;

const NoEntriesTemplate: Story<MessageListProps> = args => <div style={{ height: "100vh" }}><MessageList
  {...args}
  currentUserId="danny_1"
  messages={[]}
  themeColor='#6ea9d7'

/>
</div>;

const CustomNoEntriesTemplate: Story<MessageListProps> = args => <div style={{ height: "100vh" }}><MessageList
  {...args}
  currentUserId="danny_1"
  messages={[]}
  themeColor='#6ea9d7'
  customEmptyMessagesComponent={<div>Custom No Messages View...</div>}
/>
</div>;


const WithPaddingContainer = styled.div`
    height: 400px; 
    padding: 20px;
    position: relative;
    width: 500px;
    background-color: red;
    border: 3px solid black;
`

const TemplateWithPadding: Story<MessageListProps> = args => <div><WithPaddingContainer> <MessageList
  {...args}
  currentUserId="danny_1"
  messages={messages}
  themeColor='#6ea9d7'

/></WithPaddingContainer></div>;

const TypingIndicatorTemplate: Story<MessageListProps> = args => <div style={{ height: "100vh" }}><MessageList
  {...args}
  currentUserId="danny_1"
  loading={false}
  themeColor='#6ea9d7'
  showTypingIndicator={true}
  typingIndicatorContent="Mark is typing"
  messages={[
    {
      "user": {
        "id": "danny_1",
        "name": "Daniel Georgetown",
        avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"

      },
      "text": "this message should have loading"
    },
    ...messages
  ]}
/>
</div>;

const CustomTypingIndicatorTemplate: Story<MessageListProps> = args => <div style={{ height: "100vh" }}><MessageList
  {...args}
  currentUserId="danny_1"
  loading={false}
  customTypingIndicatorComponent={<div>Custom typing indicator working!</div>}
  themeColor='#6ea9d7'
  showTypingIndicator={true}
  typingIndicatorContent="Mark is typing"
  messages={[
    {
      "user": {
        "id": "danny_1",
        "name": "Daniel Georgetown",
        avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"

      },
      "text": "this message should have loading"
    },
    ...messages
  ]}
/>
</div>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const WithPadding = TemplateWithPadding.bind({});
export const FewMessages = FewEntriesTemplate.bind({});
export const NoMessages = NoEntriesTemplate.bind({});
export const CustomNoMessages = CustomNoEntriesTemplate.bind({});
export const MessagesLoading = LoadingTemplate.bind({});
export const CustomMessagesLoading = CustomLoadingTemplate.bind({});

export const SendMessageLoading = SendMessageLoadingTemplate.bind({});
export const TypingIndicator = TypingIndicatorTemplate.bind({});
export const CustomTypingIndicator = CustomTypingIndicatorTemplate.bind({});








Default.args = {};
