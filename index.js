require("dotenv").config();

const debug = require("debug")("W6CH4:root");
const appOptions = require("./addOptions");
const connectDataBase = require("./db");
const initializeServer = require("./server");

const port = process.env.PORT || 4000;
const dbUrl = process.env.DB_CONNECT_URL;

(async () => {
  try {
    const options = await appOptions();

    await connectDataBase(dbUrl);

    await initializeServer(port);
    debug("Hola");
  } catch (error) {
    debug(`Error: ${error.message}`);
  }
})();
