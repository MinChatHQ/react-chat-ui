import React from 'react';
import { Meta, Story } from '@storybook/react';
import MessageContainer, { Props } from '../src/message-container';
import styled from 'styled-components';
import { chats, messages, fewMessages } from './data';

const meta: Meta = {
  title: 'MessageContainer',
  component: MessageContainer,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<Props> = args => <div style={{ height: "100vh" }}><MessageContainer
  {...args}
  header="Sandra Bullock"
  currentUserId="danny_1"
  messages={messages}
  themeColor='#6ea9d7'
/>
</div>;

const LoadingTemplate: Story<Props> = args => <div style={{ height: "100vh" }}><MessageContainer
  {...args}
  header="Sandra Bullock"
  currentUserId="danny_1"
  loading={true}
  sendMessageLoading={true}
  messages={messages}
  themeColor='#6ea9d7'

/>
</div>;

const SendMessageLoadingTemplate: Story<Props> = args => <div style={{ height: "100vh" }}><MessageContainer
  {...args}
  header="Sandra Bullock"
  currentUserId="danny_1"
  loading={false}
  sendMessageLoading={true}
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


const FewEntriesTemplate: Story<Props> = args => <div style={{ height: "100vh" }}><MessageContainer
  {...args}
  header="Sandra Bullock"
  currentUserId="danny_1"
  themeColor='#6ea9d7'

  messages={fewMessages}
/>
</div>;

const NoEntriesTemplate: Story<Props> = args => <div style={{ height: "100vh" }}><MessageContainer
  {...args}
  header="Sandra Bullock"
  currentUserId="danny_1"
  messages={[]}
  themeColor='#6ea9d7'

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

const TemplateWithPadding: Story<Props> = args => <div><WithPaddingContainer> <MessageContainer
  {...args}
  header="Sandra Bullock"
  currentUserId="danny_1"
  messages={messages}
  themeColor='#6ea9d7'

/></WithPaddingContainer></div>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const WithPadding = TemplateWithPadding.bind({});
export const FewMessages = FewEntriesTemplate.bind({});
export const NoMessages = NoEntriesTemplate.bind({});
export const MessagesLoading = LoadingTemplate.bind({});
export const SendMessageLoading = SendMessageLoadingTemplate.bind({});






Default.args = {};
