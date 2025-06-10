import React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import Sidebar from "."
import { chats } from '../../constants/mock-data';
import ConversationList from '../conversation-list';

const meta: Meta<typeof Sidebar> = {
  title: 'Sidebar',
  component: Sidebar,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: args => (
    <Sidebar>
      <ConversationList {...args} conversations={chats} themeColor="#6ea9d7" selectedConversationId="1" />
    </Sidebar>
  ),
};








