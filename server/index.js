const express = require("express");
const debug = require("debug")("W6CH4:server");
const morgan = require("morgan");

const app = express();

const initializeServer = async (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(`Server listening on http://localhost:${port}`);
      resolve();
    });

    server.on("error", (error) => {
      const errorMessage = `Couldn't start the server. ${
        error.code === "EADDRINUSE" ? `Port: ${port} already in use.` : ""
      }`;
      reject(new Error(errorMessage));
    });
  });

app.use(morgan());
app.use(express.json());

module.exports = initializeServer;
