import React from 'react';
import { Meta, Story } from '@storybook/react';
import ChatList, { ChatlistProps } from '../src/chatlist';
import styled from 'styled-components';
import { chats, fewChats } from './data';


const meta: Meta = {
  title: 'ChatList',
  component: ChatList,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta


const Template: Story<ChatlistProps> = args => <ChatList
  {...args}
  chats={chats}
  themeColor='#6ea9d7'
  selectedChatId='1'
/>;


const NoChatsTemplate: Story<ChatlistProps> = args => <ChatList
  {...args}
  selectedChatId='1'
  chats={[]}
  themeColor='#6ea9d7'

/>;



const LoadingTemplate: Story<ChatlistProps> = args => <div style={{ height: "100vh" }}> <ChatList
  {...args}
  selectedChatId='1'
  loading={true}
  chats={chats}
  themeColor='#6ea9d7'

/>;
</div>

const FewChatsTemplate: Story<ChatlistProps> = args => <div style={{ height: "100vh" }}><ChatList
  {...args}
  chats={fewChats}
  themeColor='#6ea9d7'
  selectedChatId='1'
/></div>;

const WithPaddingContainer = styled.div`
    height: 500px; 
    padding: 20px;
    background-color: red;
    position: relative;
    width: 500px;
`
const TemplateWithPadding: Story<ChatlistProps> = args => <WithPaddingContainer>
  <ChatList
    {...args}
    themeColor='#6ea9d7'
    chats={[...chats, ...chats, ...chats, ...chats]}
    selectedChatId='1'

  />;
</WithPaddingContainer>

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

export const WithPadding = TemplateWithPadding.bind({});
export const FewChats = FewChatsTemplate.bind({});
export const LoadingChats = LoadingTemplate.bind({});
export const NoChats = NoChatsTemplate.bind({});




Default.args = {};
