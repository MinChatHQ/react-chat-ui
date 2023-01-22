import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import TypingIndicator, { Props } from "../src/typing-indicator"

const meta: Meta = {
  title: 'TypingIndicator',
  component: TypingIndicator,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<Props> = args => <TypingIndicator content='Joshy is Typing' />
const WithoutContentTemplate: Story<Props> = args => <TypingIndicator />




// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const WithoutContent = WithoutContentTemplate.bind({});




