import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import MessageHeader, { Props } from "../src/message-header"

const meta: Meta = {
  title: 'MessageHeader',
  component: MessageHeader,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<Props> = args => <MessageHeader >Daniel</MessageHeader>
const NoBackTemplate: Story<Props> = args => <MessageHeader showBack={false} >Daniel</MessageHeader>




// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const WithoutBackIcon = NoBackTemplate.bind({});



