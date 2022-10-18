import express from "express";
import * as recruitController from "../controllers/recruit.js";

const router = express.Router();

router.post('/recruit',recruitController.registerRecruitNotice);
router.put('/recruit',recruitController.updateRecruitNotice);
router.delete('/recruit/:id',recruitController.deleteRecruitNotice);
router.get('/recruit',recruitController.readAllRecruitNotice);

export default router