const { connect } = require("./client.js");
const { setupInput } = require("./input.js");

console.log("Connecting ...");
let connection = connect();

setupInput(connection);
