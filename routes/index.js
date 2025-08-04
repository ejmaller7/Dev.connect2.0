const express = require('express');
const apiRoutes = require('./api/index');

// import express from 'express';
// import apiRoutes from './api/index';

const router = express.Router();

router.use('/api',apiRoutes);

module.exports = router;