//The routes folder in an Express application is used to group related routes together, especially when they share a common base URL
import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

//here the router(below) is object, the purpose of router object is to handle the requests made to matching endpoints by running the corresponding controller functions. Like the network layer device which chooses that path based on IP but here the object chooses the function based on endpoint.
const router = express.Router();

router.post("/signup",signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;
