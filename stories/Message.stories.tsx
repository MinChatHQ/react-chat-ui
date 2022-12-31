import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import Message, { Props } from "../src/message"

const meta: Meta = {
  title: 'Message',
  component: Message,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const LeftTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  position='left'
>Hello World!</Message>


const RightTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  themeColor='#6ea9d7'
  position='right'
>Hello World!</Message>


const LoadingTemplate: Story<Props> = args => <Message
  {...args}
  user={{
    "id": "danny_1",
    "name": "Daniel Georgetown",
    avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  }}
  loading={true}
  themeColor='#6ea9d7'
  position='right'
>Hello World!</Message>



// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Left = LeftTemplate.bind({});
export const Right = RightTemplate.bind({});
export const SendMessageLoading = LoadingTemplate.bind({});




