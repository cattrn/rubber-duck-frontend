import { useState } from "react"

import ChatBubble from "./components/ChatBubble"
import { type ChatBubbleProps } from "./components/ChatBubble/ChatBubble"
import DuckAvatar from "./components/DuckAvatar"
import TextInput from "./components/TextInput"

function App() {
  const [messages, setMessages] = useState<ChatBubbleProps[]>([
    { sender: "duck", text: "Hello there!" },
    { sender: "user", text: "Hi!" },
    { sender: "user", text: "How are you?" },
    { sender: "duck", text: "I am duck!" },
  ])

  return (
    <div className="App bg-neutral">
      <div className="max-w-xl mx-auto h-screen flex flex-col bg-base-200 p-4">
        <DuckAvatar />
        <div className="grow overflow-scroll">
          {messages.map(({ sender, text }, idx) => (
            <ChatBubble key={idx} sender={sender} text={text} />
          ))}
          <div className="h-px [overflow-anchor:auto]" />
        </div>
        <TextInput setMessages={setMessages} />
      </div>
    </div>
  )
}

export default App
