import { addContact } from "../controllers/contact.js";
import express from "express";

const router = express.Router();

router.route("/contact").post(addContact);

export default router;