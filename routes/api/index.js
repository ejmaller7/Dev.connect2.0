import express from 'express';
import userRoutes from './users';
import authRoutes from './auth';
import profileRoutes from './profile';
import postRoutes from './posts';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/profile', profileRoutes);
router.use('/posts', postRoutes);

export default router;