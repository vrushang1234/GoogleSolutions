import React from "react";

const Chatbox = ({ messages }) => {
  return (
    <div
      className="h-full w-full bg-cover rounded-r-inherit"
      id="chatbox-container"
    >
      <div
        className="h-full w-full bg-cover rounded-r-inherit relative flex flex-col"
        id="chatbox"
      >
        {messages}
      </div>
    </div>
  );
};

export default Chatbox;
