const path = require('path');
const router = require('express').Router();
const bookRoutes = require('./books');
const googleRoutes = require('./google');

router.use('/books', bookRoutes);

router.use('/google', googleRoutes);

router.use((req, res) => 
    res.sendFile(path.join(__dirname, '../../build.index.html'))
)

module.exports = router;