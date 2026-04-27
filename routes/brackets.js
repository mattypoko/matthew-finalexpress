const express = require('express');
const router = express.Router();
const Bracket = require('../models/Bracket');

// Home page - show the bracket form
router.get('/', function(req, res) {
  res.render('index', { title: 'Bracket Bites' });
});

// Submit 4 restaurants, start the bracket
router.post('/start', async function(req, res) {
  const { player1, player2, player3, player4 } = req.body;
  res.render('bracket', {
    title: 'The Bracket',
    player1, player2, player3, player4
  });
});

// Save the winner to the database
router.post('/winner', async function(req, res) {
  const { player1, player2, player3, player4, winner } = req.body;
  await Bracket.create({
    player1, player2, player3, player4,
    winner,
    date: new Date().toLocaleDateString()
  });
  res.render('results', { title: 'Winner!', winner });
});

router.post('/flip', async function(req, res) {
  const { option1, option2, winner } = req.body;
  Bracket.create({
    player1: option1,
    player2: option2,
    player3: '-',
    player4: '-',
    winner: winner,
    date: new Date().toLocaleDateString()
  });
  res.json({ success: true });
});

// History page - show all past brackets
router.get('/history', function(req, res) {
  const raw = Bracket.findAll();
  const brackets = raw.map(b => ({
    id: b.id,
    player1: b.player1,
    player2: b.player2,
    player3: b.player3,
    player4: b.player4,
    winner: b.winner,
    date: b.date,
    isFlip: b.player3 === '-' && b.player4 === '-'
  }));
  res.render('history', {
    title: 'Past Date Nights',
    brackets
  });
});

router.post('/clear', function(req, res) {
  Bracket.deleteAll();
  res.json({ success: true });
});

module.exports = router;