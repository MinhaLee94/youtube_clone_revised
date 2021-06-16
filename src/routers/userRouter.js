import express from "express";
import { getEdit, postEdit, logout, githubLogin, githubLoginCallback, seeProfile, getChangePassword, postChangePassword } from "../controllers/userController";
import { userOnlyMiddleware, guestOnlyMiddleware, avatarUploadMiddleware } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", userOnlyMiddleware, logout);
userRouter.route("/edit").all(userOnlyMiddleware).get(getEdit).post(avatarUploadMiddleware.single("avatar"), postEdit);
userRouter.route("/change-password").all(userOnlyMiddleware).get(getChangePassword).post(postChangePassword);
userRouter.get("/github/login", guestOnlyMiddleware, githubLogin);
userRouter.get("/github/callback", guestOnlyMiddleware, githubLoginCallback);
userRouter.get("/:id", seeProfile);

export default userRouter;