
const date = new Date()

export const chats = [
  {
    id: '1',
    title: 'Epic gamers',
    avatar:
      'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg',
    lastMessage: {
      seen: false,
      date,
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
    lastMessage: {
      date,
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
      date,
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
      date,
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
      date,
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
      date,
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
      date,
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
      date,
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
      date,
      seen: true,
      text: 'Hello everbody',
      user: {
        id: 'daniel',
        name: 'Daniel',
      },
    },
  },
];

export const fewChats = [
  {
    title: 'Epic gamers',
    lastMessage: {
      date,
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
      date,
      seen: true,
      text: 'Hello everbody',
      user: {
        id: 'daniel',
        name: 'Daniel',
      },
    },
  },
];


export const messages = [
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
      avatar:
        'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    date,
    text: 'first message',
  },
  {
    user: {
      id: 'mark',
      name: 'Markus',
    },
    date,
    text: 'hello',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    date,
    text: 'last message 2',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    date,
    text: 'how do you think we should aproach this',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    date,
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
    date,

  },
  {
    user: {
      id: 'mark',
      name: 'Markus',
    },
    date,
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
    date,
    text: 'determine',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    date,
    text: 'resolve',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    date,
    text: 'will',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    date,
    text: 'this',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    date,
    text: 'how',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    date,
    text: 'we ',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
      avatar:
        'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    date,
    text: 'foks',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    date,
    text: 'ipsum',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    date,
    text: 'lorem',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
      avatar:
        'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    date,
    text: 'totally justifiable',
  },
  {
    user: {
      id: 'danny_2',
      name: 'Dan',
      avatar:
        'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    date,
    text: 'it ',
  },
  {
    user: {
      id: 'danny_2',
      name: 'Dan',
      avatar:
        'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    date,
    text: 'is ',
  },
  {
    date,
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
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    seen: true,
    date,
    text: 'this ',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    seen: true,
    date,
    text: 'the ',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    seen: false,
    date,
    text: 'only message you will send today',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    text: 'come on man',
    seen: true,
    date,
    loading: true
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
    },
    text: 'this is the last message',
    date,
    seen: true,
    loading: true
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
    date,
    text: 'first message',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
      avatar:
        'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    date,
    text: 'come on man',
  },
  {
    user: {
      id: 'danny_1',
      name: 'Daniel Georgetown',
      avatar:
        'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    },
    date,
    text: 'this is the last message',
  },
];
