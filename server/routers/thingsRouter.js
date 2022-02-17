const express = require("express");
const debug = require("debug");
const Thing = require("../../db/Models/Thing");

const router = express.Router();

router.get("/things", async (req, res) => {
  const things = await Thing.find();
  debug("Requested things");
  res.status(200);
  res.json({ things });
});

module.exports = router;
