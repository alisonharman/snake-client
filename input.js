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

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  } if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  } if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  } if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  if (MESSAGES[key]) {
    connection.write("Say: " + MESSAGES[key]);
  }
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = { setupInput };
