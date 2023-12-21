import React from 'react';
import { Meta, Story } from '@storybook/react';
import Sidebar, { Props } from "../src/components/sidebar"
import { chats } from './data';
import ConversationList from '../src/components/conversation-list';

const meta: Meta = {
  title: 'Sidebar',
  component: Sidebar,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <Sidebar> <ConversationList
  {...args}
  conversations={chats}
  themeColor='#6ea9d7'
  selectedConversationId='1'
/>
</Sidebar>


// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});








