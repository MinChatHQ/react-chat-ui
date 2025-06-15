import React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { chats, messages, fewMessages } from '../../constants/mock-data';
import MessageHeader from '../message-header';
import MessageInput from '../message-input';
import MessageList from '../message-list';
import MessageContainer from '.';

const meta: Meta<typeof MessageContainer> = {
  title: 'MessagesContainer',
  component: MessageContainer,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof MessageContainer>;

export const Default: Story = {
  render: args => (
    <MessageContainer {...args}>
      <MessageHeader>Welcome</MessageHeader>
      <MessageList currentUserId="danny_1" messages={messages} />
      <MessageInput showSendButton={true} />
    </MessageContainer>
  ),
};

export const Mobile: Story = {
  render: args => (
    <div style={{ width: "500px" }}>
      <MessageContainer {...args}>
        <MessageHeader
          // showBack={false}
          lastActive={new Date()}
          mobileView={true}>Welcome</MessageHeader>
        <MessageList mobileView={true} currentUserId="danny_1" messages={messages} />
        <MessageInput mobileView={true} showSendButton={true} />
      </MessageContainer>
    </div>
  ),
};

export const FewMessages: Story = {
  render: args => (
    <div style={{ height: "100vh" }}>
      <MessageContainer {...args}>
        <MessageHeader>Welcome</MessageHeader>
        <MessageList currentUserId="danny_1" messages={fewMessages} />
        <MessageInput showSendButton={true} />
      </MessageContainer>
    </div>
  ),
};

export const NoMessages: Story = {
  render: args => (
    <div style={{ height: "100vh" }}>
      <MessageContainer {...args}>
        <MessageHeader>Welcome</MessageHeader>
        <MessageList currentUserId="danny_1" messages={[]} />
        <MessageInput showSendButton={true} />
      </MessageContainer>
    </div>
  ),
};
