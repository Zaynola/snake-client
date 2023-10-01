// establishes a connection with the game server
const net = require("net");
const { IP, PORT } = require("./constants"); // Import IP and PORT from constants.js

const connect = function () {
    const conn = net.createConnection({
        host: IP,    // IP address here,
        port: PORT   // PORT number here,
    });

    // interpret incoming data as text
    conn.setEncoding("utf8");

    // Event listener for successful connection
    conn.on("connect", () => {
        console.log("Successfully connected to the game server!");
        conn.write("Name: Ola/n");
    });

    // Event listener for incoming data
    conn.on("data", (data) => {
        console.log("Server says:", data);
    });

    return conn;
};

module.exports = { connect };