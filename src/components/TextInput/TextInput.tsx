import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react"

import { type ChatBubbleProps } from "../ChatBubble/ChatBubble"

interface TextInputProps {
  setMessages: React.Dispatch<React.SetStateAction<ChatBubbleProps[]>>
}

const TextInput = ({ setMessages }: TextInputProps) => {
  const [userMessage, setUserMessage] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  const handleSend = () => {
    if (inputRef.current) inputRef.current.focus()
    if (!userMessage) return

    setMessages((currentMessages) => [
      ...currentMessages,
      { sender: "user", text: userMessage },
    ])
    setUserMessage("")
  }

  const handleKeyDown = (key: string) => {
    if (key === "Enter") handleSend()
  }

  return (
    <div className="form-control my-8 mx-4">
      <div className="input-group">
        <input
          ref={inputRef}
          type="text"
          placeholder="Tell me your problems..."
          className="input grow focus:outline-none"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e.key)}
        />
        <button className="btn btn-square" onClick={handleSend} disabled={!userMessage}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  )
}

export default TextInput
