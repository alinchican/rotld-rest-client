const commandName = "hello";

// -d "command=hello" https://rest2-test.rotld.ro:6080
const hello = () =>
  new Promise((resolve, reject) => {// eslint-disable-line
    resolve([commandName]);
  });

module.exports = hello;
