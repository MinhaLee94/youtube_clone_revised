import express from "express";
import { join, login } from "../controlers/userController";
import { trending } from "../controlers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;