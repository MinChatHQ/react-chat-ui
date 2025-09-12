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

export const TopRoundedOnly: Story = {
  render: args => (
    <MinChatUIProvider theme='#6ea9d7'>
      <MessageInput 
        {...args} 
        onAttachClick={() => console.log("onAttachClick")} 
        borderTopLeftRounded={true}
        borderTopRightRounded={true}
        borderBottomLeftRounded={false}
        borderBottomRightRounded={false}
      />
    </MinChatUIProvider>
  ),
};

export const BottomRoundedOnly: Story = {
  render: args => (
    <MinChatUIProvider theme='#6ea9d7'>
      <MessageInput 
        {...args} 
        onAttachClick={() => console.log("onAttachClick")} 
        borderTopLeftRounded={false}
        borderTopRightRounded={false}
        borderBottomLeftRounded={true}
        borderBottomRightRounded={true}
      />
    </MinChatUIProvider>
  ),
};

export const CustomBorderRadius: Story = {
  render: args => (
    <MinChatUIProvider theme='#6ea9d7'>
      <MessageInput 
        {...args} 
        onAttachClick={() => console.log("onAttachClick")} 
        borderRadius="8px 24px 8px 24px"
      />
    </MinChatUIProvider>
  ),
};

export const NoRoundedCorners: Story = {
  render: args => (
    <MinChatUIProvider theme='#6ea9d7'>
      <MessageInput 
        {...args} 
        onAttachClick={() => console.log("onAttachClick")} 
        borderTopLeftRounded={false}
        borderTopRightRounded={false}
        borderBottomLeftRounded={false}
        borderBottomRightRounded={false}
      />
    </MinChatUIProvider>
  ),
};





// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing





