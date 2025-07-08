// Imports here - different from what you initially learned but I believe this is the older version
const express = require('express');
const connectDB = require('./config/db');

// Import the way you know how to here
import Routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect DB
connectDB();

// Define routes
app.use(Routes);

app.get('/', (req, res) => res.send('API running'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));