const db = require('../database');

const Bracket = {
  create: function(data) {
    const stmt = db.prepare(`
      INSERT INTO brackets (player1, player2, player3, player4, winner, date)
      VALUES (@player1, @player2, @player3, @player4, @winner, @date)
    `);
    return stmt.run(data);
  },

  findAll: function() {
    return db.prepare(`
      SELECT * FROM brackets ORDER BY createdAt DESC
    `).all();
  },
  
  deleteAll: function() {
    return db.prepare('DELETE FROM brackets').run();
  }
  
};

module.exports = Bracket;