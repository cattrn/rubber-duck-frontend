import { useState } from "react"

import ChatBubble from "./components/ChatBubble"
import { type ChatBubbleProps } from "./components/ChatBubble/ChatBubble"
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
        <div className="grow">
          {messages.map(({ sender, text }, idx) => (
            <ChatBubble key={idx} sender={sender} text={text} />
          ))}
        </div>
        <TextInput />
      </div>
    </div>
  )
}

export default App
