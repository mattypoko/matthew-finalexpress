const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Bracket = sequelize.define('Bracket', {
  player1: { type: DataTypes.STRING, allowNull: false },
  player2: { type: DataTypes.STRING, allowNull: false },
  player3: { type: DataTypes.STRING, allowNull: false },
  player4: { type: DataTypes.STRING, allowNull: false },
  winner: { type: DataTypes.STRING },
  date: { type: DataTypes.STRING }
});

module.exports = Bracket;