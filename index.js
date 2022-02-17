require("dotenv").config();

const debug = require("debug")("W6CH4:root");
const initializeServer = require("./server");

const port = process.env.PORT || 4000;

(async () => {
  try {
    await initializeServer(port);
    debug("Hola");
  } catch (error) {
    debug(`Error: ${error.message}`);
  }
})();
