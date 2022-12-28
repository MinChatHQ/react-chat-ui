import React from 'react';
import { Meta, Story } from '@storybook/react';
import DesktopChatList, { DesktopChatlistProps } from '../src/desktop-chatlist';
import styled from 'styled-components';
import { chats, messages, fewMessages, fewChats } from './data';


const meta: Meta = {
    title: 'Desktop ChatList',
    component: DesktopChatList,
    argTypes: {
        selectedChat: {
            onSendMessage: {
                action: "sendMessage"
            }
        },
        inbox: {
            onChatClick: {
                action: "select Chat"
            }
        }
    },
    parameters: {
        controls: { expanded: true },
    },
};

export default meta

const Template: Story<DesktopChatlistProps> = args => {
    return <DesktopChatList
        {...args}
        inbox={{
            themeColor: "#6ea9d7",
            chats: chats,
            loading: false,
            onChatClick: () => console.log("onChat click"),
            selectedIndex: 1,
            paginate: () => { },
        }}
        selectedChat={
            {
                paginate: () => { },
                themeColor: "#6ea9d7",
                messages,
                header: "Sandra Bullock",
                currentUserId: "danny_1",
                onSendMessage: () => console.log("onSendMessage"),
                onBack: () => { }

            }
        }
    />
}

const LoadingTemplate: Story<DesktopChatlistProps> = args => {
    return <div style={{ height: "100vh" }}><DesktopChatList
        {...args}
        loading={true}
        inbox={{
            themeColor: "#6ea9d7",
            chats: chats,
            loading: false,
            onChatClick: () => console.log("onChat click"),
            selectedIndex: 1,
            paginate: () => { },

        }}
        selectedChat={
            {
                themeColor: "#6ea9d7",
                messages,
                header: "Sandra Bullock",
                currentUserId: "danny_1",
                onSendMessage: () => console.log("onSendMessage"),
                onBack: () => { },
                paginate: () => { }


            }
        }
    />
    </div>
}

const LoadingMessagesTemplate: Story<DesktopChatlistProps> = args => {
    return <div style={{ height: "100vh" }}><DesktopChatList
        {...args}
        loading={false}
        inbox={{
            paginate: () => { },

            themeColor: "#6ea9d7",
            chats: chats,
            loading: false,
            onChatClick: () => console.log("onChat click"),
        }}
        selectedChat={
            {
                themeColor: "#6ea9d7",
                loading: true,
                messages,
                header: "Sandra Bullock",
                currentUserId: "danny_1",
                onSendMessage: () => console.log("onSendMessage"),
                onBack: () => { },
                paginate: () => { }

            }
        }
    />
    </div>
}

const NoSelectedChatTemplate: Story<DesktopChatlistProps> = args => <div style={{ height: "100vh" }}><DesktopChatList
    {...args}
    inbox={{
        paginate: () => { },

        themeColor: "#6ea9d7",
        chats: chats,
        loading: false,
        onChatClick: () => { }
    }}
    selectedChat={undefined}
/>
</div>;

const EmptyChatlistTemplate: Story<DesktopChatlistProps> = args => <DesktopChatList
    {...args}
    inbox={{
        paginate: () => { },

        themeColor: "#6ea9d7",
        chats: [],
        loading: false,
        onChatClick: () => { }
    }}
    selectedChat={undefined}
/>;


const FewEntriestemplate: Story<DesktopChatlistProps> = args => <div style={{ height: "100vh" }}><DesktopChatList
    {...args}
    inbox={{
        paginate: () => { },

        themeColor: "#6ea9d7",
        chats: fewChats,
        loading: false,
        onChatClick: () => { }
    }}
    selectedChat={
        {
            messages: fewMessages,
            header: "Sandra Bullock",
            currentUserId: "danny_1",
            onSendMessage: () => console.log("onSendMessage"),
            onBack: () => { },
            themeColor: "#6ea9d7",
            paginate: () => { }

        }
    } />
</div>;


const WithPaddingContainer = styled.div`
    height: 500px; 
    padding: 20px;
    background-color: red;
    position: relative;
    width: 800px;


`
const FewEntriestWithPaddingTemplate: Story<DesktopChatlistProps> = args => <WithPaddingContainer>
    <DesktopChatList
        {...args}
        inbox={{
            paginate: () => { },
            themeColor: "#6ea9d7",
            chats: fewChats,
            loading: false,
            onChatClick: () => { },
            selectedIndex: 1

        }}
        selectedChat={
            {
                themeColor: "#6ea9d7",
                messages: fewMessages,
                header: "Sandra Bullock",
                currentUserId: "danny_1",
                onSendMessage: () => console.log("onSendMessage"),
                onBack: () => { },
                paginate: () => { }

            }
        } />
</WithPaddingContainer>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const EmptyChatlist = EmptyChatlistTemplate.bind({});
export const NoSelectedChat = NoSelectedChatTemplate.bind({});
export const FewEntriesChat = FewEntriestemplate.bind({});
export const FewEntriesWithPadding = FewEntriestWithPaddingTemplate.bind({});
export const LoadingChats = LoadingTemplate.bind({});
export const LoadingMessages = LoadingMessagesTemplate.bind({});





Default.args = {};
