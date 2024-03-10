import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
    const socket = useContext(SocketContext)
    return socket
}

export const SocketProvider = (props) => {
  const { children } = props;
  const [socket, setSocket] = useState(null);
  const [transcripts, settranscripts] = useState({});

  useEffect(() => {
    const connection = io();
    console.log("socket connection", connection)
    setSocket(connection);
  }, []);

  socket?.on('connect_error', async (err) => {
    console.log("Error establishing socket", err)
    await fetch('/api/socket')
  })


  return (
    <SocketContext.Provider value={socket}  trnscripts = {transcripts}>{children}</SocketContext.Provider>
  );
};
