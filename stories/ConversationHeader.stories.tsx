import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import ConversationHeader, { Props } from "../src/components/conversation-header"

const meta: Meta = {
  title: 'ConversationHeader',
  component: ConversationHeader,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <ConversationHeader/>

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});



