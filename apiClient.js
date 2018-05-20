const isValidClientOptions = require("./isValidClientOptions");
const isValidRoTLDCommandInput = require("./isValidRoTLDCommandInput");
const apiClientConfig = require("./apiClient.config");

class ApiClient {
  constructor(options) {
    isValidClientOptions(options);

    const {
      username,
      password,
      environment,
      allowUnsecure = apiClientConfig.allowUnsecure,
      localValidation = apiClientConfig.localValidation,
      format,
      language
    } = options;

    const apiURL = apiClientConfig.apiURLs[environment];

    this.username = username;
    this.password = password;
    this.environment = environment;
    this.allowUnsercure = allowUnsecure;
    this.localValidation = localValidation;
    this.format = format;
    this.language = language;
    this.localValidation = localValidation;
    this.apiURL = apiURL;
  }

  makeRequest(commandName, input) {
    return new Promise(resolve => {
      resolve([commandName, input]);
    });
  }

  runCommand(commandName, input) {
    return new Promise((resolve, reject) => {
      if (this.localValidation) {
        isValidRoTLDCommandInput(commandName, input);
      }

      this.makeRequest(commandName, input)
        .then(result => resolve(result))
        .catch(error => reject(error));
    });
  }
}

module.exports = ApiClient;
