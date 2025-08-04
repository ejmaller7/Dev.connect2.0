const express = require('express');
const userRoutes = require('./users');
const authRoutes = require('./auth');
const profileRoutes = require('./profile');
const postRoutes = require('./posts');

// import express from 'express';
// import userRoutes from './users';
// import authRoutes from './auth';
// import profileRoutes from './profile';
// import postRoutes from './posts';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/profile', profileRoutes);
router.use('/posts', postRoutes);

module.exports = router;