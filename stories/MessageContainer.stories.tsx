import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { chats, messages, fewMessages } from './data';
import MessageHeader from '../src/components/message-header';
import MessageInput from '../src/components/message-input';
import MessageList from '../src/components/message-list';
import MessageContainer, { Props } from '../src/components/message-container';





const meta: Meta = {
    title: 'MessagesContainer',
    component: MessageContainer,
    argTypes: {
    },
    parameters: {
        controls: { expanded: true },
    },
};

export default meta



const Template: Story<Props> = args => {

    return <MessageContainer>
        <MessageHeader>Welcome</MessageHeader>
        <MessageList
            currentUserId="danny_1"
            messages={messages}
        />
        <MessageInput />
    </MessageContainer>
}


const FewMessagesTemplate: Story<Props> = args => {

    return <div style={{ height: "100vh" }}><MessageContainer>
        <MessageHeader>Welcome</MessageHeader>
        <MessageList
            currentUserId="danny_1"
            messages={fewMessages}
        />
        <MessageInput />
    </MessageContainer>
    </div>
}

const NoMessagesTemplate: Story<Props> = args => {

    return <div style={{ height: "100vh" }}><MessageContainer>
        <MessageHeader>Welcome</MessageHeader>
        <MessageList
            currentUserId="danny_1"
            messages={[]}
        />
        <MessageInput />
    </MessageContainer>
    </div>
}

const MobileTemplate: Story<Props> = args => {
    return <div style={{ width: "500px" }}> <MessageContainer>
        <MessageHeader mobileView={true}>Welcome</MessageHeader>
        <MessageList
            mobileView={true}
            currentUserId="danny_1"
            messages={messages}
        />
        <MessageInput mobileView={true} />
    </MessageContainer>
    </div>
}


// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const Mobile = MobileTemplate.bind({});
export const FewMessages = FewMessagesTemplate.bind({});
export const NoMessages = NoMessagesTemplate.bind({});



Default.args = {};
