import type { ConversationType } from "../types/ConversationType";
import type { MessageType } from "../types/MessageType";

const date = new Date()
const date2 = new Date(date.getTime() - 1000 * 60 * 60 * 24)


export const chats: ConversationType[] = [
  {
    id: '1',
    title: 'Epic gamers',
    avatar:
      'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg',
    unread: true,
    lastMessage: {
      seen: false,
      createdAt: date,
      text: 'Hello everbody',
      user: {
        id: 'martha_stewart',
        name: 'Daniel',
        avatar: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      },
    },
  },
  {
    id: '2',
    title: 'Devops',
    isOnline: true,
    lastMessage: {
      createdAt: date,
      seen: true,
      text: 'How do you enable an actuator on a servo motor of a hardware and design laboratory experiment in the city,an actuator on a servo motor of a hardware and design laboratory experiment in the city',
      user: {
        avatar: 'https://fsdfsdfsdfs',
        id: 'daniel',
        name: 'Stanley Herbert Lee',
      },
    },
  },
  {
    // id: "3",
    title: 'This is a group with a long title heading that is multilines long',
    avatar:
      'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    lastMessage: {
      createdAt: date,
      seen: true,
      text: 'Hello everbody',
      media: {
        type: "image",
        url: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      },
      user: {
        id: 'me',
        name: 'Martha Stewart',
      },
    },
  },
  {
    id: '4',
    title: 'Epic gamers',
    lastMessage: {
      createdAt: date,
      seen: true,
      text: 'Hello everbody',
      user: {
        id: 'daniel',
        name: 'Daniel',
        avatar:
          'https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_1280.jpg',
      },
    },
  },
  {
    id: '5',
    title: 'Devops',
    lastMessage: {
      createdAt: date,
      seen: true,
      text: 'How do you enable an actuator',

      user: {
        id: 'daniel',
        name: 'Daniel',
      },
    },
  },
  {
    id: '6',
    title: 'Pigments',
    lastMessage: {
      createdAt: date,
      seen: true,
      text: 'Hello everbody',
      user: {
        id: 'daniel',
        name: 'Daniel',
      },
    },
  },
  {
    id: '7',
    title: 'Epic gamers',
    lastMessage: {
      createdAt: date,
      seen: true,
      text: 'Hello everbody',
      user: {
        id: 'daniel',
        name: 'Daniel',
      },
    },
  },
  {
    id: '8',
    title: 'Devops',
    lastMessage: {
      createdAt: date,
      seen: true,
      text: 'How do you enable an actuator',

      user: {
        id: 'daniel',
        name: 'Daniel',
      },
    },
  },
  {
    id: '9',
    title: 'Pigments',
    lastMessage: {
      createdAt: date,
      seen: true,
      text: 'Hello everbody',
      user: {
        id: 'daniel',
        name: 'Daniel',
      },
    },
  },
  {
    id: '10',
    title: 'Markdown Testers',
    avatar: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    unread: true,
    lastMessage: {
      seen: false,
      createdAt: date,
      text: 'Check out this **bold text** and *italic text* with `inline code`',
      user: {
        id: 'markdown_user',
        name: 'Markdown User',
        avatar: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
      },
    },
  },
  {
    id: '11',
    title: 'Code Sharing',
    avatar: 'https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_1280.jpg',
    lastMessage: {
      seen: true,
      createdAt: date,
      text: 'Here is some code: ```javascript\nconst greeting = "Hello World!";\nconsole.log(greeting);\n```',
      user: {
        id: 'code_user',
        name: 'Code Master',
        avatar: 'https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_1280.jpg',
      },
    },
  },
  {
    id: '12',
    title: 'Link Sharing',
    lastMessage: {
      seen: true,
      createdAt: date,
      text: 'Check out this [awesome link](https://github.com) and this URL: https://example.com',
      user: {
        id: 'link_user',
        name: 'Link Sharer',
      },
    },
  },
  {
    id: '13',
    title: 'Mixed Formatting',
    lastMessage: {
      seen: false,
      createdAt: date,
      text: '**Bold** and *italic* with ~~strikethrough~~ and `code` plus [links](https://example.com)',
      user: {
        id: 'format_user',
        name: 'Format Master',
      },
    },
  },
];

export const fewChats = [
  {
    title: 'Epic gamers',
    lastMessage: {
      createdAt: date,
      seen: false,
      text: 'Hello everbody',
      user: {
        id: 'daniel',
        name: 'Daniel',
      },
    },
  },
  {
    id: '2',
    title: 'Devops',
    lastMessage: {
      seen: true,
      text: 'How do you enable an actuator',

      user: {
        id: 'daniel',
        name: 'Daniel',
      },
    },
  },
  {
    id: '3',
    title: 'Pigments',
    lastMessage: {
      createdAt: date,
      seen: true,
      text: 'Hello everbody',
      user: {
        id: 'daniel',
        name: 'Daniel',
      },
    },
  },
];


export const messages: MessageType[] = [
  {
    user: {
      id: 'markdown_test',
      name: 'Markdown Tester',
      avatar:
        'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    createdAt: date,
    text: '# Markdown Test\n\nThis is a **markdown** message with:\n\n- Bullet points\n- **Bold text**\n- *Italic text*\n- `Inline code`\n\n```javascript\n// Code block\ const greeting = "Hello World!";\nconsole.log(greeting);\n```\n\n> This is a blockquote\n\nCheck out this [link](https://example.com) and this URL: https://github.com',
  },
  {
    user: {
      id: 'mArk',
      name: 'Daniel Georgetown',
      avatar:
        'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    createdAt: date,
    text: 'first message updated',
  },
  {
    user: {
      id: 'mArk',
      name: 'Markus',
    },
    createdAt: date,
    text: 'hello updated',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    createdAt: date,
    text: 'last message 2',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    createdAt: date,
    text: 'how do you think we should aproach this',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    createdAt: date,
    text: 'sdfsdf',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    media: {
      type: "image",
      url: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    createdAt: date,

  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    createdAt: date,
    text: 'how do you think we should aproach this https://google.com',
  },
  {
    user: {
      id: 'mark',
      name: 'Markus',
    },
    createdAt: date,
    media: {
      type: "image",
      url: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    }
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    createdAt: date2,
    text: 'determine',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    createdAt: date2,
    text: 'resolve',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    createdAt: date2,
    text: 'will',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    createdAt: date,
    text: 'this',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    createdAt: date,
    text: 'how',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    createdAt: date,
    text: 'we ',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
      avatar:
        'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    createdAt: date,
    text: 'foks',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    createdAt: date,
    text: 'ipsum',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    createdAt: date,
    text: 'lorem',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
      avatar:
        'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    createdAt: date,
    text: 'totally justifiable',
  },
  {
    user: {
      id: 'danny_2',
      name: 'Dan',
      avatar:
        'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    createdAt: date,
    text: 'it ',
  },
  {
    user: {
      id: 'danny_2',
      name: 'Dan',
      avatar:
        'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    createdAt: date,
    text: 'is https://google.com ',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    seen: true,
    createdAt: date,
    text: 'this ',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    seen: true,
    createdAt: date,
    text: 'the ',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    seen: false,
    createdAt: date,
    text: 'only message [https://minchat.io](https://minchat.io) you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today, only message you will send today,'
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    text: 'come on man https://google.com',
    seen: true,
    createdAt: date,
    loading: true
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    text: 'this is the last message',
    createdAt: date,
    seen: true,
    loading: true
  },
  {
    createdAt: date,
    user: {
      id: 'danny_2',
      name: 'Dan',
      avatar:
        'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    media: {
      type: "image",
      url: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
  },
];

export const fewMessages = [
  {
    user: {
      id: 'danny_2',
      name: 'Daniel Georgetown',
      avatar:
        'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    createdAt: date,
    text: 'first message',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
      avatar:
        'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    createdAt: date,
    text: 'come on man',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
      avatar:
        'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    createdAt: date,
    text: 'this is the last message',
  },
];
