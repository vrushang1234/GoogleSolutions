import React from "react";
import logo from "../../assets/leaflogo.svg";
import penbook from "../../assets/penbook.svg";

export default function Sidepanel() {
  return (
    <div
      id="sidepanel"
      className="w-1/5 min-h-full lg:rounded-l-3xl relative hidden lg:block"
    >
      <ul className="text-center mt-2.5%">
        <li>
          <div
            id="newchat"
            className="absolute top-0 w-full h-1/10 rounded-tl-3xl flex justify-center"
          >
            <img className="h-6" src={logo} alt="Leaf Logo" />
            <h1>New Chat</h1>
            <img className="h-5" src={penbook} alt="Pen Book" />
          </div>

          <div
            id="accountinfo"
            className="absolute bottom-0 w-full h-1/10 rounded-bl-3xl flex"
          >
            <h1 className="font-bold">VA</h1>
            <h1>Vrushang Anand</h1>
          </div>
        </li>
      </ul>
    </div>
  );
}
