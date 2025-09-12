import React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import ConversationList from '.';
import styled from 'styled-components';
import { chats, fewChats } from '../../constants/mock-data';
import MessageHeader from '../message-header';

const meta: Meta<typeof ConversationList> = {
  title: 'ConversationList',
  component: ConversationList,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof ConversationList>;

export const Default: Story = {
  render: args => <ConversationList {...args} conversations={chats} themeColor="#6ea9d7" selectedConversationId="1" renderCustomConversationitem={() => undefined} />,
};

export const WithPadding: Story = {
  render: args => {
    const WithPaddingContainer = styled.div`
      height: 500px;
      padding: 20px;
      background-color: red;
      position: relative;
      width: 500px;
    `;
    return <WithPaddingContainer><ConversationList {...args} themeColor="#6ea9d7" conversations={[...chats, ...chats, ...chats, ...chats]} selectedConversationId="1" /></WithPaddingContainer>;
  },
};

export const FewConversation: Story = {
  render: args => <div style={{ height: "100vh" }}><ConversationList {...args} conversations={fewChats} themeColor="#6ea9d7" selectedConversationId="1" /></div>,
};

export const LoadingConversation: Story = {
  render: args => <div style={{ height: "100vh", borderWidth: 1, borderColor: "black", borderStyle: "solid" }}><ConversationList {...args} selectedConversationId="1" loading={true} conversations={chats} themeColor="#6ea9d7" /></div>,
};

export const CustomLoadingConversation: Story = {
  render: args => <div style={{ height: "100vh", borderWidth: 1, borderColor: "black", borderStyle: "solid" }}><ConversationList {...args} selectedConversationId="1" loading={true} conversations={chats} themeColor="#6ea9d7" customLoaderComponent={<div>Custom Loading...</div>} /></div>,
};

export const NoConversation: Story = {
  render: args => <ConversationList {...args} selectedConversationId="1" conversations={[]} themeColor="#6ea9d7" />,
};

export const CustomNoConversation: Story = {
  render: args => <ConversationList {...args} selectedConversationId="1" conversations={[]} themeColor="#6ea9d7" customEmptyConversationsComponent={<div>Custom No Chats View...</div>} />,
};

export const CustomConversationItem: Story = {
  render: args => <ConversationList {...args} conversations={chats} themeColor="#6ea9d7" selectedConversationId="1" renderCustomConversationitem={conversation => <div>{conversation.lastMessage?.text}</div>} />,
};

export const HeaderWithSearchbarHidden: Story = {
  render: args => (
    <ConversationList
      {...args}
      conversations={chats}
      themeColor="#6ea9d7"
      selectedConversationId="1"
      header={{
        showHeader: true,
        showSearchBar: false,
        showAddButton: true,
        title: 'Chats',
      }}
    />
  ),
};

export const HeaderWithAddButtonHidden: Story = {
  render: args => (
    <ConversationList
      {...args}
      conversations={chats}
      themeColor="#6ea9d7"
      selectedConversationId="1"
      header={{
        showHeader: true,
        showSearchBar: true,
        showAddButton: false,
        title: 'Chats',
      }}
    />
  ),
};

export const HeaderHidden: Story = {
  render: args => (
    <ConversationList
      {...args}
      conversations={chats}
      themeColor="#6ea9d7"
      selectedConversationId="1"
      header={{
        showHeader: false,
        showSearchBar: true, // value doesn't matter when showHeader is false
        showAddButton: true, // value doesn't matter when showHeader is false
        title: 'Chats',
      }}
    />
  ),
};


export const CustomHeader: Story = {
  render: args => {
    const WithPaddingContainer = styled.div`
    height: 400px;
    padding: 20px;
    position: relative;
    width: 500px;
    background-color: red;
    border: 3px solid black;
  `;

    const Container = styled.div`

    background-color: blue;
    margin-top: 20px;
    padding:top:16px;
    `;

    return <WithPaddingContainer>
      <ConversationList
        {...args}
        conversations={chats}
        themeColor="#6ea9d7"
        selectedConversationId="1"
        header={{

          customHeaderComponent: <Container>
            <MessageHeader
              mobileView={true}
              showBack={false}

            >Hello World</MessageHeader>
          </Container>
        }}
      />
    </WithPaddingContainer>
  },
};

export const MarkdownSupport: Story = {
  render: args => (
    <div style={{ height: "100vh" }}>
      <ConversationList
        {...args}
        conversations={chats}
        themeColor="#6ea9d7"
        selectedConversationId="10"
        header={{
          showHeader: true,
          title: 'Markdown Test Conversations',
          showSearchBar: false,
          showAddButton: false,
        }}
      />
    </div>
  ),
};

export const MarkdownOnly: Story = {
  render: args => {
    // Filter only markdown test conversations
    const markdownChats = chats.filter(chat => 
      chat.id === '10' || chat.id === '11' || chat.id === '12' || chat.id === '13'
    );
    
    return (
      <div style={{ height: "100vh" }}>
        <ConversationList
          {...args}
          conversations={markdownChats}
          themeColor="#6ea9d7"
          selectedConversationId="10"
          header={{
            showHeader: true,
            title: 'Markdown Examples Only',
            showSearchBar: false,
            showAddButton: false,
          }}
        />
      </div>
    );
  },
};



