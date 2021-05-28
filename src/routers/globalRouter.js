import express from "express";
import { join } from "../controlers/userController";
import { trending } from "../controlers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;