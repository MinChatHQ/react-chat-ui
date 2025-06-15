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
  render: args => <ConversationHeader
   {...args}
   showAddButton={false}
   showSearchBar={false}
   />,
};

export const WithAddButton: Story = {
  render: args => (
    <ConversationHeader
      {...args}
      showAddButton
      showSearchBar={false}
      onAddClicked={() => console.log('Add button clicked')}
    />
  ),
};

export const WithSearchBar: Story = {
  render: args => (
    <ConversationHeader
      {...args}
      showSearchBar
      showAddButton={false}
      searchValue={args.searchValue || ''}
      onSearchChange={(value) => console.log('Search changed', value)}
    />
  ),
  args: {
    searchValue: '',
  },
};

export const WithAddButtonAndSearchBar: Story = {
  render: args => (
    <ConversationHeader
      {...args}
        showAddButton={true}
      showSearchBar={true}
      onAddClicked={() => console.log('Add button clicked')}
      searchValue={args.searchValue || ''}
      onSearchChange={(value) => console.log('Search changed', value)}
    />
  ),
  args: {
    searchValue: '',
  },
};

export const CustomTitle: Story = {
  render: args => (
    <ConversationHeader
      {...args}
      title="My Chats"
    />
  ),
};



