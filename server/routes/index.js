const express = require("express");
const router = express.Router();
const api = require("../crawling/chart");

router.get("/melon", api.getMelon);
router.get("/bugs", api.getBugs);

module.exports = router;
