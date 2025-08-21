// Imports here - different from what you initially learned but I believe this is the older version
const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes/index.js');
const path = require('path');

// Import the way you know how to here
// import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect DB
connectDB();

// Initialize the middleware
app.use(express.json({ extended: false }));

// Define routes
app.use(routes);

// Serve static assets in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('/(.*)', (_, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));