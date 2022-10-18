import express from "express";
import * as recruitController from "../controllers/recruit.js";

const router = express.Router();

router.post('/recruit',recruitController.registerRecruitNotice);

export default router