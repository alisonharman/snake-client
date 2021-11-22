// movement key constants
const { MOVE_DOWN_KEY, MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY } = require("./constants");

// special key messages
const { MESSAGES } = require("./constants");

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // event lister for stdin object
  stdin.on("data", handleUserInput);
  // return stdin object
  return stdin;
};

// inteface for handling user input
const handleUserInput = function(key) {

  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  } else if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  } else if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  } else if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  else if (MESSAGES[key]) {
    connection.write("Say: " + MESSAGES[key]);
  }
  else if (key === '\u0003') {
    process.exit();
  }
};

module.exports = { setupInput };