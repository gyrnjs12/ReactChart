const express = require("express");
const router = express.Router();
const getMelon = require("../crawling/chart");

router.get("/melon", getMelon);

module.exports = router;
