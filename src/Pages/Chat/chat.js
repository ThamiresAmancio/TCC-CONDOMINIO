import "./style.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./index";

const socket = io.connect("http://localhost:3001");
const name = sessionStorage.getItem("name")
const romm = sessionStorage.getItem("room")

function Room() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Chat</h3>
          <input
            type="text"
            placeholder="Nome..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Sala..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Entrar na Sala</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default Room;