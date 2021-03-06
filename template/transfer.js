require('dotenv-defaults').config()
const fs = require("fs");

function transferToObject(configPath, livrSchemaPath) {
  const template = fs.readFileSync(configPath).toString();
  const configStr = replace(template, process.env);

  let config = {};

  try {
    config = JSON.parse(configStr);
  } catch (error) {
    console.error("CANNOT PARSE JSON: ", configStr);
    throw error;
  }

  if (livrSchemaPath) {
  config = validateConfig(config, livrSchemaPath);
}

  return config;
}

function validateConfig(config, livrSchemaPath) {
  const LIVR = require("livr");
  const livrExtraRules = require("livr-extra-rules");

  const livrRules = JSON.parse(fs.readFileSync(livrSchemaPath).toString());
  const validator = new LIVR.Validator(livrRules, true);
  validator.registerRules(livrExtraRules);

  const validConfig = validator.validate(config);

  if (!validConfig) {
    const error = {
      FAILED_CONFIG: config,
      ERRORS: validator.getErrors()
    };
    throw new Error(JSON.stringify(error, null, 2));
  }

  return validConfig;
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
