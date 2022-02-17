const debug = require("debug")("W6CH4:server:middlewares:errors");

const notFoundError = (req, res) => {
  res.status(404);
  res.json({ error: "Not found" });
};

// eslint-disable-next-line no-unused-vars
const generalError = (err, req, res, next) => {
  debug("Internal server error");
  res.status(500);
  res.json({ error: "Internal server error" });
};

module.exports = { notFoundError, generalError };
