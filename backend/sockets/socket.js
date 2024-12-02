import { Server } from "socket.io";
import express from "express";
import http from "http";
import cors from "cors";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Replace with your frontend URL
    methods: ["GET", "POST"], // Allow specific HTTP methods
    credentials: true, // Allow cookies and headers like Authorization
  },
});

const userSocketMap = {};

app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
    methods: "GET,POST,PUT,DELETE", // Allow specific HTTP methods
    credentials: true, // Allow cookies
  })
);

io.on("connection", (socket) => {
  console.log("New client connected");
  console.log(socket.id);
  const userId = socket.handshake.query.userId;
  if (userId !== undefined) userSocketMap[userId] = socket.id;
  io.emit("getOnlineUsers", Object.keys(userSocketMap));
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    console.log(socket.id);
  });
});

export { app, io, server };
