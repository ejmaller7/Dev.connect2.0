// Imports here - different from what you initially learned but I believe this is the older version
const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect DB
connectDB();

app.get('/', (req, res) => res.send('API running'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));