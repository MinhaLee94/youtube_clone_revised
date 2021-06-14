import express from "express";
import { getJoin, postJoin, getLogin, postLogin } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import { guestOnlyMiddleware } from "../middlewares";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").all(guestOnlyMiddleware).get(getJoin).post(postJoin);
rootRouter.route("/login").all(guestOnlyMiddleware).get(getLogin).post(postLogin);
rootRouter.get("/search", search);

export default rootRouter;