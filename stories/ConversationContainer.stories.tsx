import React from 'react';
import { Meta, Story } from '@storybook/react';
import ConversationContainer, { Props } from '../src/conversation-container';
import styled from 'styled-components';
import { chats, fewChats } from './data';


const meta: Meta = {
  title: 'ConversationContainer',
  component: ConversationContainer,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta


const Template: Story<Props> = args => <ConversationContainer
  {...args}
  conversations={chats}
  themeColor='#6ea9d7'
  selectedConversationId='1'
/>;


const NoChatsTemplate: Story<Props> = args => <ConversationContainer
  {...args}
  selectedConversationId='1'
  conversations={[]}
  themeColor='#6ea9d7'

/>;



const LoadingTemplate: Story<Props> = args => <div style={{ height: "100vh" }}> <ConversationContainer
  {...args}
  selectedConversationId='1'
  loading={true}
  conversations={chats}
  themeColor='#6ea9d7'

/>;
</div>

const FewChatsTemplate: Story<Props> = args => <div style={{ height: "100vh" }}><ConversationContainer
  {...args}
  conversations={fewChats}
  themeColor='#6ea9d7'
  selectedConversationId='1'
/></div>;

const WithPaddingContainer = styled.div`
    height: 500px; 
    padding: 20px;
    background-color: red;
    position: relative;
    width: 500px;
`
const TemplateWithPadding: Story<Props> = args => <WithPaddingContainer>
  <ConversationContainer
    {...args}
    themeColor='#6ea9d7'
    conversations={[...chats, ...chats, ...chats, ...chats]}
    selectedConversationId='1'

  />;
</WithPaddingContainer>

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

export const WithPadding = TemplateWithPadding.bind({});
export const FewConversation = FewChatsTemplate.bind({});
export const LoadingConversation = LoadingTemplate.bind({});
export const NoConversation = NoChatsTemplate.bind({});




Default.args = {};
