import { io, Socket } from "socket.io-client";

async function getWebSocketToken() {
  const response = await fetch('https://api.makeitaifor.me/auth/ws-token', {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Failed to get WebSocket token: ' + response.statusText);
  }

  const data = await response.json();
  return data.token;
}

let socket: Socket;

(async () => {
  const token = await getWebSocketToken();
  socket = io(`wss://api.makeitaifor.me?token=${token}`);

  socket.on('connect', () => {
    console.log('Connected to WebSocket');
  })

  socket.on('error', (error) => {
    console.error('Error:', error);
  });

  socket.on('message', (message) => {
    console.log('Received message from server: ', message);
  });
})()

export const emitTryButtonClicked = (
  content: string, 
  appendMessageToChat: (chatId: string) => string, 
  appendContentToMessageInChat: (chatId: string, messageId: string, content: string) => void
) => {
  console.log("tryButtonClicked");
  socket.emit('tryButtonClicked', { content: content });
  // create new message row
  let mid = appendMessageToChat("temp");
  appendContentToMessageInChat("temp", mid, content);
  appendMessageToChat("temp");
  socket.on('textGenerated', (response) => {
    console.log('text generated message from server: ', response);
    appendContentToMessageInChat("temp", "temp", response);
  });
};
