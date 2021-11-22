const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //  "connect" event triggered when connection is first established
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write('Name: ALH');
  });
  // "data" event triggered when data received 
  conn.on("data", (data) => {
    console.log('Server says:', data);
  });

  return conn;
};

module.exports = { connect };