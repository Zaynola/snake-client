const connect = require("./client.js");
console.log("Connecting ...");

// setup interface to handle user input from stdin

const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();

    return stdin;
  };

  const handleUserInput = function (data) {
    if (data === '\u0003') {
        console.log("Exiting...");
        process.exit();
    }
};
const stdin = setupInput();
stdin.on("data", handleUserInput);
