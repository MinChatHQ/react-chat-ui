Build your own chat UI with React components in a few minutes. Chat UI Kit from [MinChat](https://minchat.io) is an open source UI toolkit for developing web chat applications.

**React Chat UI makes chat UI development faster**

# Demo

[View Live Demo](https://minchat.io/demo)
If you would like to see the React chat UI in action, you can visit the [live demo](https://minchat.io/demo). 
This demo allows you to test out the various features of the react chat components and see how it can be 
integrated into a real-world application. We encourage you to give it a try and see for yourself the power 
and flexibility of our chat UI. 

# Install

Component Library

Using npm.
```bash
npm install @minchat/react-chat-ui
```

Using yarn.
```bash
yarn add @minchat/react-chat-ui
```


```jsx
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@minchat/react-chat-ui";

<div style={{ position: "relative", height: "500px" }}>
  <MainContainer>
    <ChatContainer>
      <MessageList>
        <Message
          model={{
            message: "How are you?",
            sender: "Sammy",
          }}
        />
      </MessageList>
      <MessageInput placeholder="Type message here" />
    </ChatContainer>
  </MainContainer>
</div>;
```

# Typescript

This library is written in Typescript, by extension can be used in Javascript projects as well.

# Show your support
Now if you made your awesome chat UI and you love this library, please ⭐ this repository!

# Community and support

Articles on the [minchat blog](https://minchat.io/blog)

# Website

[https://minchat.io](https://minchat.io)

# License

[MIT](https://github.com/MinChatHQ/react-chat-ui/blob/master/LICENSE)
