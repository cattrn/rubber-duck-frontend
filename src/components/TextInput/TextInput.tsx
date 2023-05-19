import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

import { type ChatBubbleProps } from "../ChatBubble/ChatBubble"

interface TextInputProps {
  setMessages: React.Dispatch<React.SetStateAction<ChatBubbleProps[]>>
}

const TextInput = ({ setMessages }: TextInputProps) => {
  const [userMessage, setUserMessage] = useState("")

  const updateMessages = () => {
    setMessages((currentMessages) => [
      ...currentMessages,
      { sender: "user", text: userMessage },
    ])
    setUserMessage("")
  }

  return (
    <div className="form-control my-8 mx-4">
      <div className="input-group">
        <input
          type="text"
          placeholder="Tell me your problems..."
          className="input grow focus:outline-none"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button className="btn btn-square" onClick={updateMessages}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  )
}

export default TextInput
