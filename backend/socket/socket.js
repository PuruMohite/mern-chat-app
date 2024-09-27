//In this file we have created a WebSocket server on top of our existing express server.A WebSocket server is http server which has webSockets implemented on top of it.

//Socket = Data Pipeline: A socket can be thought of as a data pipeline that connects a client and a server, enabling continuous, bidirectional data flow. A socket establishes a continuous flow of data between a client and a server, much like a pipeline carries water from one place to another. Once the connection is established, data can flow freely in both directions.

//A WebSocket is a specific type of socket that allows for real-time, two-way communication over the web.Analogy: Think of it as a two-way street for messages, where both cars (data) can travel in either direction at any time. Unlike a one-way street (traditional HTTP), where you have to wait for one car to leave before another can enter, a WebSocket keeps the road open all the time.

//WebSocket server allows full-duplex communication between client and server, i.e. both client and server can send data to each other simultaneously without needing to establish new connections every time, unlike the typical request-response model used in HTTP, the connection is closed once the response is sent, but in WebSocket server the connection persists. The HTTP connection are repeatedly opening and closing between each req-resp cycle but WebSocket server remains open.

//WebSocket server allows realtime data transfer, without re-establishing new connection.
import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  //Here we have created the instance of web socket server, on top of our http server
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {}; //{userId: socketId}

io.on("connection", (socket) => {
  //this is an event listener of new webSocket connection, whenever a client connects, the callback function is executed.
  //socket is an object that represents the individual connection between the server and a particular client.

  console.log("a user connected", socket.id); //socket.id is a unique identifier given to each client connection. Each time a client connects he is given a unique socket.id. It helps server distinguish the different clients which are connected at the same time.

  const userId = socket.handshake.query.userId; //socket.handshake is an object that contains the metadata about the client connection, it's .query.userId gives the userId which was passed as query parameter from the client when they were connected.At server side we have extracted the userId which was sent by the client to the server, through query parameters.

  if (userId != "undefined") userSocketMap[userId] = socket.id;

  //io.emit() is used to send events to all the connected clients

  //One can think of socket as data pipeline that connects current client to webSocket server and io is the data pipeline that connects all the clients to the webSocket server. But for a client to be part of the global io pipeline, it must first establish its own individual socket connection to the WebSocket server(socket pipeline).

  io.emit("getOnlineUsers", Object.keys(userSocketMap)); //Here, we are broadcasting the event getOnlineUsers to all the connected clients and sending the array of currently connected userIds, the connected clients can listen to the this event and respond accordingly.

  //socket.on() is used to listen to the events of this client connection which this socket represents. can be used both on client and server side
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
