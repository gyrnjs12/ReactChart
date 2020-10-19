const express = require('express');
const router = express.Router();
const api = require('../crawling/chart');

router.get('/melon', api.getMelon);
router.get('/bugs', api.getBugs);
router.get('/genie', api.getGenie);

module.exports = router;
