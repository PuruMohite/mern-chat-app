import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();

app.use(express.json()); // to parse the incoming requests with JSON payloads(from req.body)
app.use(cookieParser()); // to parse the incoming cookies from req.cookies

const PORT = process.env.PORT || 5000;

dotenv.config();

//app.use() is a middleware, middleware is a function that processes request before it reaches the final route handler, in this case it is used to define a set of routes with base URL /api/auth.
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   //root route http://localhost:5000/
//   res.send("Hello World!!");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
