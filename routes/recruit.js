import express from 'express';
import * as recruitController from '../controllers/recruit.js';

const router = express.Router();

router.post('/recruit', recruitController.registerRecruitNotice);
router.put('/recruit', recruitController.updateRecruitNotice);
router.delete('/recruit/:id', recruitController.deleteRecruitNotice);
router.get('/recruit', recruitController.readAllRecruitNotice);
router.get('/recruit/:id', recruitController.readRecruitNoticeByNoticeId);
router.get('/recruit/search', recruitController.readRecruitNoticeByKeyword);
router.post('/recruit/apply', recruitController.createApplyRaw);

export default router;
