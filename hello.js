// -d "command=hello" https://rest2-test.rotld.ro:6080

const hello = () => {
  const commandName = "hello";

  return [commandName];
};

module.exports = hello;
