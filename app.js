const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory for static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse POST request bodies
app.use(express.urlencoded({ extended: true }));

// Import Routes
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');

// Use Routes
app.use('/', indexRouter);
app.use('/about', aboutRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


