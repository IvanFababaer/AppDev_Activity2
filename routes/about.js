const express = require('express');
const router = express.Router();

// GET About Page
router.get('/', (req, res) => {
    res.render('about', { title: 'About' });
});

module.exports = router;

