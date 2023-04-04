import express from "express";
import {
  CreateBlog,
  UpdateBlog,
  GetBlog,
  GetAllBlogs,
  DeleteBlog,
  GetUserBlogs,
} from "../controllers/postController.js";
import { authenticate } from "../middlewares/authenticate.js";

const router = express.Router();

router.route("/").post(authenticate, CreateBlog);
router.route("/:id").put(authenticate, UpdateBlog);
router.route("/:id").get(authenticate, GetBlog);
router.route("/").get(authenticate, GetAllBlogs);
router.route("/:id").delete(authenticate, DeleteBlog);
router.route("/user").get(authenticate, GetUserBlogs);

export default router;
