import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

app.use(express.json()); // to parse the incoming requests with JSON payloads(from req.body)
app.use(cookieParser()); // to parse the incoming cookies from req.cookies

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

//app.use() is a middleware, middleware is a function that processes request before it reaches the final route handler, in this case it is used to define a set of routes with base URL /api/auth.
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
