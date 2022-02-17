const express = require("express");
const Thing = require("../../db/Models/Thing");

const router = express.Router();

router.get("/things", (req, res) => {
  res.status(200);
  res.json(Thing.find());
});

module.exports = router;
