import React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import styled from 'styled-components';
import MessageInput from "."
import MinChatUIProvider from "../../providers/MinChatUiProvider"
const meta: Meta<typeof MessageInput> = {
  title: 'MessageInput',
  component: MessageInput,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof MessageInput>;

export const Default: Story = {
  render: args => (
    <MinChatUIProvider theme='#6ea9d7'>
      <MessageInput {...args} onAttachClick={() => console.log("onAttachClick")} />
    </MinChatUIProvider>
  ),
};

export const WithoutAttach: Story = {
  render: args => (
    <MinChatUIProvider theme='#6ea9d7'>
      <MessageInput {...args} onAttachClick={() => console.log("onAttachClick")} showAttachButton={false} />
    </MinChatUIProvider>
  ),
};

export const WithoutSend: Story = {
  render: args => (
    <MinChatUIProvider theme='#6ea9d7'>
      <MessageInput {...args} onAttachClick={() => console.log("onAttachClick")} showAttachButton={false} showSendButton={false} />
    </MinChatUIProvider>
  ),
};

export const Disabled: Story = {
  render: args => (
    <MinChatUIProvider theme='#6ea9d7'>
      <MessageInput {...args} onAttachClick={() => console.log("onAttachClick")} disabled={true} />
    </MinChatUIProvider>
  ),
};



// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing





