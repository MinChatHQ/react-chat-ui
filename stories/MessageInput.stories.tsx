import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled  from 'styled-components';
import MessageInput, { Props } from "../src/components/message-input"
import MinChatUIProvider from "../src/providers/MinChatUiProvider"
const meta: Meta = {
  title: 'MessageInput',
  component: MessageInput,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<Props> = args =>
  <MinChatUIProvider
    theme='#6ea9d7'
  >
    <MessageInput
      {...args}
      onAttachClick={() => console.log("onAttachClick")}
    ></MessageInput>
  </MinChatUIProvider>

const TemplateWithoutAttach: Story<Props> = args =>
  <MinChatUIProvider
    theme='#6ea9d7'
  >
    <MessageInput
      {...args}
      onAttachClick={() => console.log("onAttachClick")}
      showAttachButton={false}
    ></MessageInput>
  </MinChatUIProvider>

const TemplateWithoutSend: Story<Props> = args =>
  <MinChatUIProvider
    theme='#6ea9d7'
  >
    <MessageInput
      {...args}
      onAttachClick={() => console.log("onAttachClick")}
      showAttachButton={false}
      showSendButton={false}
    ></MessageInput>
  </MinChatUIProvider>

const TemplateDisabled: Story<Props> = args =>
  <MinChatUIProvider
    theme='#6ea9d7'
  >
    <MessageInput
      {...args}
      onAttachClick={() => console.log("onAttachClick")}
      disabled={true}
    ></MessageInput>
  </MinChatUIProvider>



// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const WithoutAttach = TemplateWithoutAttach.bind({});

export const WithoutSend = TemplateWithoutSend.bind({});
export const Disabled = TemplateDisabled.bind({});





