import { useState } from "react";
import axios from "axios";
import "../stylesheets/home2.css";

function Home() {
  const [prompt, setPrompt] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/chat", null, {
        params: {
          prompt: prompt,
        },
      })
      .then((response) => {
        const newMessage = { prompt: prompt, response: response.data };
        setChatHistory([...chatHistory, newMessage]);
        setPrompt(""); // Clear input field
      })
      .catch((error) => {
        console.error("Error sending prompt to server:", error);
      });
  };

  return (
    <div className="container">
      <div className="chat-box">
        {chatHistory.map((message, index) => (
          <div key={index} className="message">
            <div className="user-prompt">{message.prompt}</div>
            <div className="bot-response typewriter code" dangerouslySetInnerHTML={{ __html: message.response }}></div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          className="input-field"
          type="text"
          value={prompt}
          onChange={handleChange}
          placeholder="Enter Your Prompt"
        />
        <button className="button" onClick={handleSubmit}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Home;
