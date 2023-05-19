import ChatBubble from "./components/ChatBubble"
import TextInput from "./components/TextInput"

function App() {
  return (
    <div className="App bg-neutral">
      <div className="max-w-xl mx-auto h-screen flex flex-col bg-base-200 p-4">
        <div className="grow">
          <ChatBubble sender="duck" text="Hello there!" />
          <ChatBubble sender="user" text="Hi!" />
          <ChatBubble sender="user" text="How are you?" />
          <ChatBubble sender="duck" text="I am duck!" />
        </div>
        <TextInput />
      </div>
    </div>
  )
}

export default App
