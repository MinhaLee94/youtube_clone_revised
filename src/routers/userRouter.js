import express from "express";
import { getEdit, postEdit, logout, githubLogin, githubLoginCallback, see } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.route("/edit").get(getEdit).post(postEdit);
userRouter.get("/github/login", githubLogin);
userRouter.get("/github/callback", githubLoginCallback);
userRouter.get(":id", see);

export default userRouter;