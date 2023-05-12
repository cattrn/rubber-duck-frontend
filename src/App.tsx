import ChatBubble from "./components/ChatBubble"

function App() {
  return (
    <div className="App max-w-xl mx-auto">
      <ChatBubble sender="duck" text="Hello there!" />
      <ChatBubble sender="user" text="Hi!" />
      <ChatBubble sender="user" text="How are you?" />
      <ChatBubble sender="duck" text="I am duck!" />
    </div>
  )
}

export default App
