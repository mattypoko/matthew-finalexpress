const Database = require('better-sqlite3');
const db = new Database('./database.sqlite');

// create table if it doesn't exist yet
db.exec(`
  CREATE TABLE IF NOT EXISTS brackets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    player1 TEXT,
    player2 TEXT,
    player3 TEXT,
    player4 TEXT,
    winner TEXT,
    date TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

module.exports = db;