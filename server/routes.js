const express = require("express");

const router = new express.Router();
const image = [];
router.post("/api", (req, res) => {
  res.send("GET ok");
});

module.exports = router;
