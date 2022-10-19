import express from 'express';
import recruitRouter from './recruit.js';

const router = express.Router();

router.use(recruitRouter);

export default router;
