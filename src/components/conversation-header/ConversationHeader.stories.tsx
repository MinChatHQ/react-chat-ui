import React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import ConversationHeader from "."

const meta: Meta<typeof ConversationHeader> = {
  title: 'ConversationHeader',
  component: ConversationHeader,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof ConversationHeader>;

export const Default: Story = {
  render: args => <ConversationHeader {...args} />,
};



