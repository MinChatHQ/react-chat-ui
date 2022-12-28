import React from 'react';
import { Meta, Story } from '@storybook/react';
import DynamicChat from '../src/dynamic-chat';
import { DesktopChatlistProps } from '../src/desktop-chatlist';
import styled from 'styled-components';
import { chats, messages, fewMessages } from './data';


const meta: Meta = {
    title: 'Dynamic Chat',
    component: DynamicChat,
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
    return <div style={{height: '100vh'}}> <DynamicChat
        onBack={() => { }}
        {...args}
        inbox={{
            paginate: () => { },
            themeColor: "#6ea9d7",
            chats: chats,
            loading: false,
            onChatClick: () => console.log("onChat click"),
            selectedIndex: 1
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
    </div>
}

const MobileTemplate: Story<DesktopChatlistProps> = args => {
    return <div style={{}}>
        <div style={{ width: '300px', padding: "30px", backgroundColor: 'red' }}>
            <DynamicChat
                onBack={() => { }}

                mobileView
                {...args}
                inbox={{
                    paginate: () => { },
                    themeColor: "#6ea9d7",
                    chats: chats,
                    loading: false,
                    onChatClick: () => console.log("onChat click"),
                    selectedIndex: 1
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
        </div>

    </div>
}


const LoadingTemplate: Story<DesktopChatlistProps> = args => {
    return <div style={{ height: "100vh" }}> <DynamicChat
        onBack={() => { }}
        {...args}
        loading={true}
        inbox={{
            paginate: () => { },

            themeColor: "#6ea9d7",
            chats: chats,
            loading: false,
            onChatClick: () => console.log("onChat click"),
            selectedIndex: 1
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
    </div>
}


const NoSelectedChatTemplate: Story<DesktopChatlistProps> = args => <DynamicChat
    onBack={() => { }}

    {...args}
    inbox={{
        paginate: () => { },

        themeColor: "#6ea9d7",
        chats: chats,
        loading: false,
        onChatClick: () => { }
    }}
    selectedChat={undefined}
/>;

const NoChatsTemplate: Story<DesktopChatlistProps> = args => <DynamicChat
    onBack={() => { }}

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

const WithPaddingContainer = styled.div`
    height: 500px; 
    padding: 20px;
    border: red 1px solid;
    position: relative;
    width: 800px;
`
const TemplateWithPadding: Story<DesktopChatlistProps> = args => <WithPaddingContainer>
    <DynamicChat
        onBack={() => { }}
        {...args}
        inbox={{
            paginate: () => { },

            themeColor: "#6ea9d7",
            chats: chats,
            loading: false,
            onChatClick: () => { }
        }}
        selectedChat={{
            paginate: () => { },

            themeColor: "#6ea9d7",
            messages: messages,
            header: "Sandra Bullock",
            currentUserId: "danny_1",
            onSendMessage: () => console.log("onSendMessage"),
            onBack: () => { }

        }}
    />
</WithPaddingContainer>

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const Mobile = MobileTemplate.bind({});
export const NoSelectedChat = NoSelectedChatTemplate.bind({});
export const NoChats = NoChatsTemplate.bind({});
export const WithPadding = TemplateWithPadding.bind({});
export const LoadingChats = LoadingTemplate.bind({});


Default.args = {};
