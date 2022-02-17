const inquirer = require("inquirer");

const appOptions = () =>
  new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          name: "port",
          message: "¿What port do you want to use?",
          type: "number",
        },
        {
          name: "database",
          message: "Select a database",
          type: "list",
          choices: ["Production", "Development"],
        },
        {
          name: "permission",
          message: "¿Quieres permisos de edición de datos?",
          type: "confirm",
        },
      ])
      .then((answer) => {
        const options = {
          port: answer.port,
          database: answer.database,
          permission: answer.permission,
        };
        resolve(options);
      })
      .catch((error) => {
        reject(error);
      });
  });

module.exports = appOptions;
