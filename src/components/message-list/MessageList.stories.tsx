import React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import MessageList from '.';
import styled from 'styled-components';
import { chats, messages, fewMessages } from '../../constants/mock-data';

const meta: Meta<typeof MessageList> = {
  title: 'MessageList',
  component: MessageList,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof MessageList>;

export const Default: Story = {
  render: args => <div style={{ height: "100vh" }}><MessageList {...args} currentUserId="mArk" messages={messages} /></div>,
};

export const WithPadding: Story = {
  render: args => {
    const WithPaddingContainer = styled.div`
      height: 400px;
      padding: 20px;
      position: relative;
      width: 500px;
      background-color: red;
      border: 3px solid black;
    `;
    return <div><WithPaddingContainer><MessageList {...args} currentUserId="danny_1" messages={messages} themeColor="#6ea9d7" /></WithPaddingContainer></div>;
  },
};

export const FewMessages: Story = {
  render: args => <div style={{ height: "100vh" }}><MessageList {...args} currentUserId="danny_1" themeColor="#6ea9d7" messages={fewMessages} showIncomingMessageHeader={false} /></div>,
};

export const NoMessages: Story = {
  render: args => <div style={{ height: "100vh" }}><MessageList {...args} currentUserId="danny_1" messages={[]} themeColor="#6ea9d7" /></div>,
};

export const CustomNoMessages: Story = {
  render: args => <div style={{ height: "100vh" }}><MessageList {...args} currentUserId="danny_1" messages={[]} themeColor="#6ea9d7" customEmptyMessagesComponent={<div>Custom No Messages View...</div>} /></div>,
};

export const MessagesLoading: Story = {
  render: args => <div style={{ height: "100vh" }}><MessageList {...args} currentUserId="danny_1" loading={true} messages={messages} themeColor="#6ea9d7" /></div>,
};

export const WithMarkdown: Story = {
  render: args => <div style={{ height: "100vh" }}><MessageList {...args} currentUserId="mArk" messages={messages} themeColor="#6ea9d7" enableMarkdown={true} /></div>,
};

export const CustomMessagesLoading: Story = {
  render: args => <div style={{ height: "100vh" }}><MessageList {...args} currentUserId="danny_1" loading={true} messages={messages} themeColor="#6ea9d7" customLoaderComponent={<div style={{ backgroundColor: "red" }}>Custom Loading...</div>} /></div>,
};

export const SendMessageLoading: Story = {
  render: args => <div style={{ height: "100vh" }}><MessageList {...args} currentUserId="danny_1" loading={false} themeColor="#6ea9d7" messages={[{ user: { id: "danny_1", name: "Daniel Georgetown", avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" }, text: "this message should have loading" }, ...messages]} /></div>,
};

export const TypingIndicator: Story = {
  render: args => <div style={{ height: "100vh" }}><MessageList {...args} currentUserId="danny_1" loading={false} themeColor="#6ea9d7" showTypingIndicator={true} typingIndicatorContent="Mark is typing" messages={[{ user: { id: "danny_1", name: "Daniel Georgetown", avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" }, text: "this message should have loading" }, ...messages]} /></div>,
};

export const CustomTypingIndicator: Story = {
  render: args => <div style={{ height: "100vh" }}><MessageList {...args} currentUserId="danny_1" loading={false} customTypingIndicatorComponent={<div>Custom typing indicator working!</div>} themeColor="#6ea9d7" showTypingIndicator={true} typingIndicatorContent="Mark is typing" messages={[{ user: { id: "danny_1", name: "Daniel Georgetown", avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" }, text: "this message should have loading" }, ...messages]} /></div>,
};

export const CustomUserColors: Story = {
  render: args => (
    <div style={{ height: "100vh" }}>
      <MessageList
        {...args}
        currentUserId="danny_1"
        messages={messages}
        getMessageThemeColor={msg => {
          if (msg.user.id === 'danny_1') return '#6ea9d7'; // blue for danny_1
          if (msg.user.id === 'mark') return '#e57373'; // red for mark
          return undefined; // fallback to default
        }}
      />
    </div>
  ),
};








