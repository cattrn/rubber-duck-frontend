import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// interface TextInputProps {}

const TextInput = () => {
  return (
    <div className="form-control my-8 mx-4">
      <div className="input-group">
        <input
          type="text"
          placeholder="Tell me your problems..."
          className="input grow focus:outline-none"
        />
        <button className="btn btn-square">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  )
}

export default TextInput
