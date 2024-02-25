import React, { useState } from "react";
import Chatbox from "./Chatbox";
import Sidepanel from "./Sidepanel";
import Message from "./Message";

export default function Main() {
  const [textareaValue, setTextareaValue] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("50px");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleTextareaKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const value = document.getElementById("text-area").value.trim();
      console.log(value);
      if (value !== "") {
        try {
          setTextareaValue("");
          setIsLoading(true);
          const postresponse = await fetch("http://localhost:3001/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ value }),
          }).then((res) => res.json());

          console.log("Response: ", postresponse);
          setMessages([...messages, { input: value, response: postresponse }]);
          handleTextareaDelete();
        } catch (error) {
          console.error("Error:", error);
        } finally {
          setIsLoading(false);
        }
      }
    }
  }

  const handleTextareaChange = (event) => {
    if (event.target.value.trim() === "") {
      setTextareaHeight("50px");
      handleTextareaDelete();
    } else {
      const newHeight = Math.max(50, event.target.scrollHeight);
      setTextareaHeight(`${newHeight}px`);
    }

    setTextareaValue(event.target.value);
  };

  const updateTextareaHeight = (event) => {
    const minHeight = 50;
    const newHeight = Math.max(minHeight, event.target.scrollHeight);

    setTextareaHeight(`${newHeight}px`);
  };

  function handleTextareaDelete() {
    setTextareaHeight("50px");
  }

  return (
    <div
      id="main"
      className="lg:w-95% lg:ml-2.5% w-full h-90/100 lg:rounded-3xl flex relative"
    >
      <Sidepanel />
      <Chatbox
        messages={messages.map((msg, index) => (
          <>
            <Message key={index} msg={msg.input} type="sent" />
            <Message key={index} msg={msg.response} type="recieved" />
          </>
        ))}
      />
      {isLoading && <div className="loading-spinner"></div>}
      <textarea
        className="absolute resize-none lg:w-3/4 w-full lg:left-57% lg:-translate-x-1/2 lg:rounded-2xl"
        id="text-area"
        style={{ height: textareaHeight }}
        value={textareaValue}
        onChange={handleTextareaChange}
        onInput={updateTextareaHeight}
        onKeyDown={handleTextareaKeyDown}
        placeholder="Your prompt here"
      />
    </div>
  );
}
