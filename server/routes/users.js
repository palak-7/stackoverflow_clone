import express from "express";
import { login, signup } from "../controllers/auth.js";
import {
  getAllUsers,
  updateProfile,
  getImage,
  postImage,
} from "../controllers/Users.js";
import auth from "../middlewares/auth.js";

const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);

router.get("/getAllUsers", getAllUsers);
router.patch("/update/:id", auth, updateProfile);

router.get("/getImage", getImage);
router.patch("/postImage/:id", auth, postImage);

export default router;
