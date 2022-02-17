const mongoose = require("mongoose");
const debug = require("debug")("W6CH4:db:root");

const connectDataBase = (connectionUrl) =>
  new Promise((resolve, reject) => {
    mongoose.connect(connectionUrl, (error) => {
      if (error) {
        reject(new Error(`Cannot connect to the database. ${error.message}`));
      }
      debug("Connection to DB succesful");
      resolve();
    });
  });

module.exports = connectDataBase;
