let connection;
const handleUserInput = function (data) {
    console.log(data);
    // Check for movement commands
    switch (data) {
        case 'w':
            connection.write("Move: up");
            break;
        case 'a':
            connection.write("Move: left");
            break;
        case 's':
            connection.write("Move: down");
            break;
        case 'd':
            connection.write("Move: right");
            break;
         case '1':
             connection.write("Say: Hello, everyone!");
             break;
         case '2':
             connection.write("Say: How's it going?");
             break;
         case '3':
             connection.write("Say: Goodbye!");
         break;
        case '\u0003':
            console.log("Exiting...");
            process.exit();
            break;
    }
};

const setupInput = (conn) => {
    console.log("setup");
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
};

module.exports = { setupInput };
