const express = require('express');
const router = express.Router();

// GET Home Page
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// POST data to Home Page
router.post('/', (req, res) => {
    const name = req.body.name;
    res.render('index', { title: 'Home', name: name });
});

module.exports = router;

