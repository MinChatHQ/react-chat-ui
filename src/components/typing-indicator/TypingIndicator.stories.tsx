import React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import TypingIndicator from "."

const meta: Meta<typeof TypingIndicator> = {
  title: 'TypingIndicator',
  component: TypingIndicator,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof TypingIndicator>;

export const Default: Story = {
  render: args => <TypingIndicator {...args} content="Joshy is Typing" />,
};

export const WithoutContent: Story = {
  render: args => <TypingIndicator {...args} />,
};




// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing




