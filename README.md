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
  MinChatUiProvider,
  MainContainer,
  MessageInput,
  MessageContainer,
  MessageList,
  MessageHeader
} from "@minchat/react-chat-ui";
function App() {
  return (
    <MinChatUiProvider theme="#6ea9d7">
      <MainContainer style={{ height: '100vh' }}>
        <MessageContainer>
          <MessageHeader />
          <MessageList
            currentUserId='dan'
            messages={[{
              text: 'Hello',
              user: {
                id: 'mark',
                name: 'Markus',
              },
            }]}
          />
          <MessageInput placeholder="Type message here" />
        </MessageContainer>
      </MainContainer>
    </MinChatUiProvider>
  )
}

export default App


```

# Modify Component Colors

You can modify the colors of each and every component, by passing a colorSet prop to the `MinChatUiProvider` which defines the colors to use. ommited colors will use the default theme.

```jsx
const myColorSet = {
        // input
        "--input-background-color": "#FF0000",
        "--input-text-color": "#fff",
        "--input-element-color": "rgb(0, 0, 255)",
        "--input-attach-color": "#fff",
        "--input-send-color": "#fff",
        "--input-placeholder-color": "rgb(255, 255, 255)",

        // message header
        "--message-header-background-color": "#FF0000",
        "--message-header-text-color": "#fff",
        "--message-header-last-active-color": "rgb(0, 0, 255)",
        "--message-header-back-color": "rgb(255, 255, 255)",

        // chat list header
        "--chatlist-header-background-color": "#FF0000",
        "--chatlist-header-text-color": "rgb(255, 255, 255)",
        "--chatlist-header-divider-color": "rgb(0, 128, 0)",

        //chatlist
        "--chatlist-background-color": "rgb(255, 192, 203)",
        "--no-conversation-text-color": "rgb(255, 255, 255)",

        //chat item
        "--chatitem-background-color": "rgb(0, 0, 255)",
        "--chatitem-selected-background-color": "rgb(255, 255, 0)",
        "--chatitem-title-text-color": "#FF0000",
        "--chatitem-content-text-color": "#FF0000",
        "--chatitem-hover-color": "#FF0000",

        //main container
        "--container-background-color": "rgb(255, 192, 203)",

        //loader
        "--loader-color": "rgb(0, 128, 0)",

        //message list
        "--messagelist-background-color": "rgb(0, 0, 255)",
        "--no-message-text-color": "rgb(255, 255, 255)",

        // incoming message
        "--incoming-message-text-color": "rgb(255, 255, 255)",
        "--incoming-message-name-text-color": "rgb(255, 255, 255)",
        "--incoming-message-background-color": "rgb(0, 128, 0)",
        "--incoming-message-timestamp-color": "rgb(255, 255, 255)",
        "--incoming-message-link-color": "#FF0000",
        
        //outgoing message
        "--outgoing-message-text-color": "#FF0000",
        "--outgoing-message-background-color": "rgb(255, 255, 0)",
        "--outgoing-message-timestamp-color": "#FF0000",
        "--outgoing-message-checkmark-color": "#FF0000",
        "--outgoing-message-loader-color": "#FF0000",
        "--outgoing-message-link-color": "rgb(0, 128, 0)",
    }

function App() {
  return (
    <MinChatUiProvider 
      colorSet={myColorSet}
      theme="#6ea9d7">

       {/** rest of your code*/}

    </MinChatUiProvider>
  )
}
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
