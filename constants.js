// values for connecting to the local snake server
const IP = '10.0.2.15';
const PORT = 50541;

// binding these values as the movement keys for the snake server
const MOVE_UP_KEY = 'w';
const MOVE_DOWN_KEY = 's';
const MOVE_RIGHT_KEY = 'd';
const MOVE_LEFT_KEY = 'a';

// special "hot" keys to send messages 
const MESSAGES = {
  b: "Sssuuuppp!",
  n: "Zzzooommm!",
  m: "Sssmmmoooth!",
};

module.exports = {
  IP,
  PORT,
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  MESSAGES,
};