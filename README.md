<p align="center">
<img src="https://img.shields.io/github/license/minchathq/react-chat-ui"/>
<img src="https://img.shields.io/npm/v/@minchat/react-chat-ui"/>
<img src="https://img.shields.io/twitter/follow/minchathq?style=social"/>
</p>

## Overview

Build your own chat UI with React components in just a few minutes using the **React Chat UI Kit from MinChat**. Our open-source toolkit accelerates the development of web chat applications with a flexible and powerful set of components.

**React Chat UI makes chat UI development faster**

### Why Choose MinChat's React Chat UI?

- **Speed up development**: Quickly integrate chat functionality into your app.
- **Customizable components**: Tailor the UI to fit your needs.
- **Open Source**: Benefit from community-driven improvements.

# Demo

[View Live Demo](https://minchat.io/demo)
If you would like to see the React chat UI in action, you can visit the [live demo](https://minchat.io/demo).
This demo allows you to test out the various features of the react chat components and see how it can be
integrated into a real-world application. We encourage you to give it a try and see for yourself the power
and flexibility of our chat UI.

# Documentation

You can view detailed documentation [here](https://react.minchat.io)

# Install

Install the component library using your preferred package manager:

**Using npm.**

```bash
npm install @minchat/react-chat-ui
```

**Using yarn.**

```bash
yarn add @minchat/react-chat-ui
```

# Usage

Here's a quick example to get you started:

```jsx
import {
    MainContainer,
    MessageInput,
    MessageContainer
} from "@minchat/react-chat-ui";

<MainContainer style={{ height: '100vh' }}>
    <MessageContainer>
        <MessageHeader/>
        <MessageList
            currentUserId='dan'
            messages={[{
                text: 'Hello',
                user: {
                    id: 'mark',
                    name: 'Markus',
                },
            }]}
        >
        <MessageInput placeholder="Type message here" />
    </MessageContainer>
</MainContainer>
```

# Typescript

Our library is written in TypeScript, offering type safety and easy integration into both TypeScript and JavaScript projects.

# Show your support
If you love our library, consider starring ⭐ our GitHub repository!

# Community and support
For articles, tutorials, and a full guide, visit our  [website](https://minchat.io/blog). Connect with other developers, share ideas, and get help.

# Website

[https://minchat.io](https://minchat.io)

Unleash the power of seamless chat functionality with MinChat's [React Chat API!](https://minchat.io) Say goodbye to backend worries and hello to effortless integration. Get started today and save months of development time. Build a full-fledged React chat application in just minutes, not months!

# License

React Chat UI Kit is licensed under [MIT](https://github.com/MinChatHQ/react-chat-ui/blob/master/LICENSE). Feel free to use it in your projects.

---

Ready to build an amazing chat experience? Visit MinChat.io to get started and unleash the power of seamless chat functionality in your application today!
