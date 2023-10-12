import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import MessageInput, { Props } from "../src/message-input"

const meta: Meta = {
  title: 'MessageInput',
  component: MessageInput,  
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


const Template: Story<Props> = args => <MessageInput
  {...args}
  // onStartTyping={()=>console.log("typing started")}
  // onEndTyping={()=>console.log("typing stopped")}
  // onKeyDown={()=>console.log("key down")}
  // onKeyUp={()=>console.log("key up")}

  themeColor='#6ea9d7'
  onAttachClick={()=>console.log("onAttachClick")}
></MessageInput>




// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});




