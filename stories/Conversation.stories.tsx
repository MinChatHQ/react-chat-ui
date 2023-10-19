import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import Conversation, { Props } from "../src/conversation"

const meta: Meta = {
  title: 'Conversation',
  component: Conversation,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <Conversation
  title='GroupChat'
  avatar='https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg'
  lastMessage={{
    seen: true,
    text: "Hello everbody"
    ,
    user: {
      id: "martha_stewart",
      name: "Daniel",
      avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    },
  }}
  onClick={() => { }} />

const UnseenTemplate: Story<Props> = args => <Conversation
  title='GroupChat'
  avatar='https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg'
  lastMessage={{
    seen: false,
    text: "Hello everbody"
    ,
    user: {
      id: "martha_stewart",
      name: "Daniel",
      avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    },
  }}
  onClick={() => { }} />

const UnseenFileTemplate: Story<Props> = args => <Conversation
  title='GroupChat'
  avatar='https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg'
  lastMessage={{
    seen: false,
    text: "Hello everbody"
    ,
    media: {
      type: "file",
      url: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
      name: "Architecture Design.pdf"
    },
    user: {
      id: "martha_stewart",
      name: "Daniel",
      avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    },
  }}
  onClick={() => { }} />



const NoAvatarTemplate: Story<Props> = args => <Conversation
  title='GroupChat'
  lastMessage={{
    seen: true,
    text: "Hello everbody"
    ,
    user: {
      id: "martha_stewart",
      name: "Daniel",
      avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    },
  }}
  onClick={() => { }} />

const SelectedTemplate: Story<Props> = args => <Conversation
  selected={true}
  title='GroupChat'
  lastMessage={{
    seen: true,
    text: "Hello everbody"
    ,
    user: {
      id: "martha_stewart",
      name: "Daniel",
      avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    },
  }}
  onClick={() => { }} />

const ImageMessageTemplate: Story<Props> = args => <Conversation
  selected={true}
  title='GroupChat'
  lastMessage={{
    seen: true,
    text: "Hello everbody",
    media: {
      type: "image",
      url: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    }
    ,
    user: {
      id: "martha_stewart",
      name: "Daniel",
      avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    },
  }}
  onClick={() => { }} />

const FileMessageTemplate: Story<Props> = args => <Conversation
  selected={true}
  title='GroupChat'
  lastMessage={{
    seen: true,
    media: {
      type: "file",
      url: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    }
    ,
    user: {
      id: "martha_stewart",
      name: "Daniel",
      avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    },
  }}
  onClick={() => { }} />

const VideoMessageTemplate: Story<Props> = args => <Conversation
  selected={true}
  title='GroupChat'
  lastMessage={{
    seen: true,
    media: {
      type: "video",
      url: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    }
    ,
    user: {
      id: "martha_stewart",
      name: "Daniel",
      avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    },
  }}
  onClick={() => { }} />

  const GifMessageTemplate: Story<Props> = args => <Conversation
  selected={true}
  title='GroupChat'
  lastMessage={{
    seen: true,
    media: {
      type: "gif",
      url: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    }
    ,
    user: {
      id: "martha_stewart",
      name: "Daniel",
      avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    },
  }}
  onClick={() => { }} />



// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const NewMessage = UnseenTemplate.bind({});
export const NewFileMessage = UnseenFileTemplate.bind({});
export const WithPlaceholderAvatar = NoAvatarTemplate.bind({});
export const Selected = SelectedTemplate.bind({});
export const ImageMessage = ImageMessageTemplate.bind({});
export const VideoMessage = VideoMessageTemplate.bind({});
export const FileMessage = FileMessageTemplate.bind({});
export const GifMessage = GifMessageTemplate.bind({});










