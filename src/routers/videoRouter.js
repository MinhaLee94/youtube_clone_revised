import express from "express";
import { watch, getEdit, postEdit, getUpload, postUpload, deleteVideo } from "../controllers/videoController";
import { userOnlyMiddleware, videoUploadMiddleware } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").all(userOnlyMiddleware).get(getEdit).post(postEdit);
videoRouter.route("/:id([1-9a-f]{24})/delete").all(userOnlyMiddleware).get(deleteVideo);
videoRouter.route("/upload").all(userOnlyMiddleware).get(getUpload).post(videoUploadMiddleware.single("video"), postUpload);

export default videoRouter;