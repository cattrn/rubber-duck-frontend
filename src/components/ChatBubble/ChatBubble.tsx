interface ChatBubbleProps {
  sender: "duck" | "user"
  text: string
}

const ChatBubble = ({ sender, text }: ChatBubbleProps) => {
  const chatClass = sender === "duck" ? "chat-start" : "chat-end"
  const chatBubbleClass = sender === "user" ? "chat-bubble-primary" : ""

  return (
    <div className={"chat " + chatClass}>
      <div className={"chat-bubble " + chatBubbleClass}>{text}</div>
    </div>
  )
}

export default ChatBubble
