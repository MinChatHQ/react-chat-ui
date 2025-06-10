import React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import Conversation, { type Props } from ".";

const meta: Meta<typeof Conversation> = {
  title: 'Conversation',
  component: Conversation,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof Conversation>;

export const Default: Story = {
  args: {
    title: 'GroupChat',
    avatar: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    lastMessage: {
      seen: true,
      text: 'Hello everbody',
      user: {
        id: 'martha_stewart',
        name: 'Daniel',
        avatar: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      },
    },
    onClick: () => {},
  },
};

export const NewMessage: Story = {
  args: {
    title: 'GroupChat',
    avatar: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    lastMessage: {
      seen: false,
      text: 'Hello everbody',
      user: {
        id: 'martha_stewart',
        name: 'Daniel',
        avatar: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      },
    },
    onClick: () => {},
  },
};

export const Html: Story = {
  args: {
    title: 'GroupChat',
    avatar: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    lastMessage: {
      seen: false,
      text: '<b>Hello </b>everbody',
      user: {
        id: 'martha_stewart',
        name: 'Daniel',
        avatar: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      },
    },
    onClick: () => {},
  },
};

export const NewFileMessage: Story = {
  args: {
    title: 'GroupChat',
    avatar: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    lastMessage: {
      seen: false,
      text: 'Hello everbody',
      media: {
        type: 'file',
        url: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
        name: 'Architecture Design.pdf',
      },
      user: {
        id: 'martha_stewart',
        name: 'Daniel',
        avatar: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      },
    },
    onClick: () => {},
  },
};

export const WithPlaceholderAvatar: Story = {
  args: {
    title: 'GroupChat',
    lastMessage: {
      seen: true,
      text: 'Hello everbody',
      user: {
        id: 'martha_stewart',
        name: 'Daniel',
        avatar: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      },
    },
    onClick: () => {},
  },
};

export const Selected: Story = {
  args: {
    selected: true,
    title: 'GroupChat',
    lastMessage: {
      seen: true,
      text: 'Hello everbody',
      user: {
        id: 'martha_stewart',
        name: 'Daniel',
        avatar: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      },
    },
    onClick: () => {},
  },
};

export const ImageMessage: Story = {
  args: {
    selected: true,
    title: 'GroupChat',
    lastMessage: {
      seen: true,
      text: 'Hello everbody',
      media: {
        type: 'image',
        url: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      },
      user: {
        id: 'martha_stewart',
        name: 'Daniel',
        avatar: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      },
    },
    onClick: () => {},
  },
};

export const FileMessage: Story = {
  args: {
    selected: true,
    title: 'GroupChat',
    lastMessage: {
      seen: true,
      media: {
        type: 'file',
        url: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      },
      user: {
        id: 'martha_stewart',
        name: 'Daniel',
        avatar: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      },
    },
    onClick: () => {},
  },
};

export const VideoMessage: Story = {
  args: {
    selected: true,
    title: 'GroupChat',
    lastMessage: {
      seen: true,
      media: {
        type: 'video',
        url: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      },
      user: {
        id: 'martha_stewart',
        name: 'Daniel',
        avatar: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      },
    },
    onClick: () => {},
  },
};

export const GifMessage: Story = {
  args: {
    selected: true,
    title: 'GroupChat',
    lastMessage: {
      seen: true,
      media: {
        type: 'gif',
        url: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      },
      user: {
        id: 'martha_stewart',
        name: 'Daniel',
        avatar: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      },
    },
    onClick: () => {},
  },
};










