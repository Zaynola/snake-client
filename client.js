// establishes a connection with the game server
const net = require("net");
const connect = function () {
    const conn = net.createConnection({
      host: "localhost", // IP address here,
      port: 50541 // PORT number here,
    });

    // interpret incoming data as text
    conn.setEncoding("utf8");

    // Event listener for successful connection
    conn.on("connect", () => {
        console.log("Successfully connected to the game server!");
        conn.write("Name: Ola\n");
      });

    // Event listener for incoming data
    conn.on("data", (data) => {
      console.log("Server says:", data);
    });



    return conn;
  };

  console.log("Connecting ...");
  connect();

  module.exports = { connect };