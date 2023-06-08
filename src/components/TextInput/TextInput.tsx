import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef, useState } from "react"

import { type ChatBubbleProps } from "../ChatBubble/ChatBubble"

interface TextInputProps {
  setMessages: React.Dispatch<React.SetStateAction<ChatBubbleProps[]>>
}

const TextInput = ({ setMessages }: TextInputProps) => {
  const [userMessage, setUserMessage] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    setMessages((currentMessages) => [
      ...currentMessages,
      { sender: "user", text: userMessage },
    ])
    setUserMessage("")
    if (inputRef.current) inputRef.current.focus()
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
        />
        <button className="btn btn-square" onClick={handleClick}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  )
}

export default TextInput
