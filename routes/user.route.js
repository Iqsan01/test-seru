import { Router } from "express";
import { authorizeAdmin } from "../middleware/middleware.js";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.patch("/:id", authorizeAdmin, updateUser);
router.delete("/:id", authorizeAdmin, deleteUser);

export default router;
