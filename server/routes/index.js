const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
const authRoutes = require('./auth');
const commentRoutes = require('./comment');

// API Routes
router.use('/api', apiRoutes);
router.use('/auth', authRoutes);
router.use('/comment', commentRoutes);

// If no API routes are hit, send the React app
router.use((req, res) => res.sendFile(path.join(__dirname, 'client/build')));

module.exports = router;
