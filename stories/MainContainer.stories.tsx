import React from 'react';
import { Meta, Story } from '@storybook/react';
import MainContainer, { Props } from '../src/components/main-container';
import styled from 'styled-components';
import { chats, messages, fewMessages } from './data';
import Sidebar from '../src/components/sidebar';
import ConversationList from '../src/components/conversation-list';
import ConversationHeader from '../src/components/conversation-header';

import MessageHeader from '../src/components/message-header';
import MessageInput from '../src/components/message-input';
import MessageList from '../src/components/message-list';
import MessageContainer from '../src/components/message-container';
import MessageListBackground from '../src/components/message-list-background';
import MinChatUIProvider from '../src/providers/MinChatUiProvider'
import MinChatUiProvider from '../src/providers/MinChatUiProvider';




const meta: Meta = {
    title: 'MainContainer',
    component: MainContainer,
    argTypes: {
        selectedConversation: {
            onSendMessage: {
                action: "sendMessage"
            }
        },
        inbox: {
            onConversationClick: {
                action: "select COnversation"
            }
        }
    },
    parameters: {
        controls: { expanded: true },
    },
};

export default meta



const Provider = ({ children }: any) => <MinChatUIProvider
    colorSet={{
        // input
        "--input-background-color": "#FF0000",
        "--input-text-color": "#fff",
        "--input-element-color": "rgb(0, 0, 255)",
        "--input-attach-color": "#fff",
        "--input-send-color": "#fff",
        "--input-placeholder-color": "rgb(255, 255, 255)",

        // message header
        "--message-header-background-color": "#FF0000",
        "--message-header-text-color": "#fff",
        "--message-header-last-active-color": "rgb(0, 0, 255)",
        "--message-header-back-color": "rgb(255, 255, 255)",

        // chat list header
        "--chatlist-header-background-color": "#FF0000",
        "--chatlist-header-text-color": "rgb(255, 255, 255)",
        "--chatlist-header-divider-color": "rgb(0, 128, 0)",

        //chatlist
        "--chatlist-background-color": "rgb(255, 192, 203)",
        "--no-conversation-text-color": "rgb(255, 255, 255)",

        //chat item
        "--chatitem-background-color": "rgb(0, 0, 255)",
        "--chatitem-selected-background-color": "rgb(255, 255, 0)",
        "--chatitem-title-text-color": "#FF0000",
        "--chatitem-content-text-color": "#FF0000",
        "--chatitem-hover-color": "#FF0000",

        //main container
        "--container-background-color": "rgb(255, 192, 203)",

        //loader
        "--loader-color": "rgb(0, 128, 0)",

        //message list
        "--messagelist-background-color": "rgb(0, 0, 255)",
        "--no-message-text-color": "rgb(255, 255, 255)",

        // incoming message
        "--incoming-message-text-color": "rgb(255, 255, 255)",
        "--incoming-message-name-text-color": "rgb(255, 255, 255)",
        "--incoming-message-background-color": "rgb(0, 128, 0)",
        "--incoming-message-timestamp-color": "rgb(255, 255, 255)",
        "--incoming-message-link-color": "#FF0000",
        
        //outgoing message
        "--outgoing-message-text-color": "#FF0000",
        "--outgoing-message-background-color": "rgb(255, 255, 0)",
        "--outgoing-message-timestamp-color": "#FF0000",
        "--outgoing-message-checkmark-color": "#FF0000",
        "--outgoing-message-loader-color": "#FF0000",
        "--outgoing-message-link-color": "rgb(0, 128, 0)",
    }}>{children}</MinChatUIProvider>


const CustomColorsTemplate: Story<Props> = args => {


    return <Provider>
        <MainContainer
            {...args}
            style={{ height: '100vh' }}>
            <Sidebar>
                <ConversationHeader showHeader={false} />

                <ConversationList
                    conversations={chats}
                />
            </Sidebar>

            <MessageContainer>
                <MessageHeader
                    lastActive={new Date()}
                    showBack={false}> Welcome</MessageHeader>
                <MessageList
                    currentUserId="danny_1"
                    messages={messages}
                />
                <MessageInput />
            </MessageContainer>
        </MainContainer>
    </Provider>
}


const LoadingCustomColorsTemplate: Story<Props> = args => {


    return <Provider>
        <MainContainer
            {...args}
            style={{ height: '100vh' }}>
            <Sidebar>
                <ConversationList
                    loading
                />
            </Sidebar>

            <MessageContainer>

                <MessageList
                    loading
                    currentUserId="danny_1"
                />
            </MessageContainer>
        </MainContainer>
    </Provider>
}

const MobileChatListCustomColorsTemplate: Story<Props> = args => {
    return <Provider>
        <MainContainer
            {...args}
            style={{ height: '100vh' }}>
            <ConversationHeader />

            <ConversationList

                conversations={chats}
            />
        </MainContainer>
    </Provider>
}

const MobileMessageCustomColorsTemplate: Story<Props> = args => {
    return <Provider>
        <MainContainer
            {...args}
            style={{ height: '100vh' }}>
            <MessageContainer>
                <MessageHeader
                    lastActive={new Date()}
                    showBack={true}> Welcome</MessageHeader>
                <MessageList
                    currentUserId="danny_1"
                    messages={messages}
                />
                <MessageInput />
            </MessageContainer>
        </MainContainer>
    </Provider>
}


const NoMessageCustomColorsTemplate: Story<Props> = args => {
    return <Provider>
        <MainContainer
            {...args}
            style={{ height: '100vh' }}>
            <MessageContainer>
                <MessageHeader
                    lastActive={new Date()}
                    showBack={true}> Welcome</MessageHeader>
                <MessageList
                    currentUserId="danny_1"
                    messages={[]}
                />
                <MessageInput />
            </MessageContainer>
        </MainContainer>
    </Provider>
}

const NoConversationCustomColorsTemplate: Story<Props> = args => {
    return <Provider>
        <MainContainer
            {...args}
            style={{ height: '100vh' }}>
            <MessageContainer>

                <ConversationList
                    currentUserId="danny_1"
                    conversations={[]}
                />
                <MessageInput />
            </MessageContainer>
        </MainContainer>
    </Provider>
}



const Template: Story<Props> = args => {


    return <MinChatUiProvider theme="#FF0000"><MainContainer
        {...args}
        style={{ height: '100vh' }}>
        <Sidebar>
            <ConversationHeader showHeader={false} />

            <ConversationList
                conversations={chats}
            />
        </Sidebar>

        <MessageContainer>
            <MessageHeader showBack={false}> Welcome</MessageHeader>
            <MessageList
                currentUserId="danny_1"
                messages={messages}
            />
            <MessageInput />
        </MessageContainer>
    </MainContainer>
    </MinChatUiProvider>
}

const NoSelectedChatTemplate: Story<Props> = args => {


    return <MainContainer style={{ height: '100vh' }}>
        <Sidebar>
            <ConversationHeader />

            <ConversationList
                conversations={chats}
            />
        </Sidebar>

        <MessageContainer>
            <MessageListBackground />
        </MessageContainer>
    </MainContainer>
}

const MobileTemplate: Story<Props> = args => {
    return <div style={{ width: "100%", height: "100%" }}>
        <div style={{ width: '300px', padding: "30px", backgroundColor: '#FF0000' }}>
            <MainContainer style={{ height: '100vh' }}>
                <ConversationHeader />

                <ConversationList
                    conversations={chats}
                />


            </MainContainer>
        </div>

    </div>
}

// const LoadingTemplate: Story<Props> = args => {


//     return <MainContainer
//         {...args}
//         style={{ height: '100vh' }}>
//         <Sidebar>
//             <ConversationHeader showHeader={false} />

//             <ConversationList
//             loading
//                 conversations={chats}
//             />
//         </Sidebar>

//         <MessageContainer>
//             <MessageHeader showBack={false}> Welcome</MessageHeader>
//             <MessageList
//                 currentUserId="danny_1"
//                 messages={messages}
//             />
//             <MessageInput />
//         </MessageContainer>
//     </MainContainer>
// }


// const MobileNoSelectedChatTemplate: Story<Props> = args =>
//     <div style={{ width: '300px', padding: "30px", backgroundColor: '#FF0000' }}>
//         <MainContainer

//             {...args}
//             inbox={{

//                 themeColor: "#6ea9d7",
//                 conversations: chats,
//                 loading: false,
//             }}
//             selectedConversation={undefined}
//             mobileView={true}
//         /></div>

// const NoChatsTemplate: Story<Props> = args => <MainContainer

//     {...args}
//     inbox={{
//         themeColor: "#6ea9d7",
//         conversations: [],
//         loading: false,
//     }}
//     selectedConversation={undefined}
// />;

// const WithPaddingContainer = styled.div`
//     height: 500px; 
//     padding: 20px;
//     border: #FF0000 1px solid;
//     position: relative;
//     width: 800px;
// `
// const TemplateWithPadding: Story<Props> = args => <div
//     {...args}
//     style={{ height: "100vh" }}
// > <WithPaddingContainer>
//         <MainContainer

//             inbox={{

//                 themeColor: "#6ea9d7",
//                 conversations: chats,
//                 loading: false,
//             }}
//             selectedConversation={{
//                 themeColor: "#6ea9d7",
//                 messages: messages,
//                 header: "Sandra Bullock",
//                 currentUserId: "danny_1",
//                 onSendMessage: () => console.log("onSendMessage"),
//                 onBack: () => { }

//             }}
//         />
//     </WithPaddingContainer >
// </div>

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const Mobile = MobileTemplate.bind({});
// export const MobileNoSelectedConversation = MobileNoSelectedChatTemplate.bind({});
export const NoSelectedConversation = NoSelectedChatTemplate.bind({});
// export const NoConversation = NoChatsTemplate.bind({});
// export const WithPadding = TemplateWithPadding.bind({});
// export const LoadingConversation = LoadingTemplate.bind({});
export const CustomColors = CustomColorsTemplate.bind({});

export const MobileChatListCustomColors = MobileChatListCustomColorsTemplate.bind({});
export const MobileMessageCustomColors = MobileMessageCustomColorsTemplate.bind({});
export const LoadingCustomColors = LoadingCustomColorsTemplate.bind({});
export const NoMessageCustomColors = NoMessageCustomColorsTemplate.bind({});
export const NoConversationCustomColors = NoConversationCustomColorsTemplate.bind({});




Default.args = {};
