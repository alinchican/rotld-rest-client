const config = {
  apiURLs: {
    test: "https://rest2-test.rotld.ro:6080/",
    production: "https://rest.rotld.ro:6080/",
    staging: "https://rest.stage.rotld.ro:6090"
  },
  allowUnsecure: true,
  localValidation: false
};

module.exports = config;
