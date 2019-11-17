require('dotenv-defaults').config()
const fs = require("fs");

function transferToObject(configPath) {
  const template = fs.readFileSync(configPath).toString();
  const configStr = replace(template, process.env);

  let config = {};

  try {
    config = JSON.parse(configStr);
  } catch (error) {
    console.error("CANNOT PARSE JSON: ", configStr);
    throw error;
  }

  return config;
}

function replace(template, vars) {
  return template.replace(/\{\{(.+?)\}\}/g, (match, p1) => {
    if (vars.hasOwnProperty(p1)) {
      return vars[p1];
    } else {
      throw new Error(`Variable "${p1}" not set!`);
    }
  });
}

module.exports = transferToObject;
