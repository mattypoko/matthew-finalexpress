# 🏆 Bracket Bites

**Stop arguing about dinner. Let the bracket decide.**

Bracket Bites is a gamified date night decision app built with Node.js, Express, Handlebars, and SQLite. Enter up to four restaurants, vote them off bracket-style, and crown a winner — or use the coin flip mode when you can't even narrow it down to four.

---

## Features

- **Bracket Mode** — Enter 4 restaurants and vote round by round until one winner remains
- **Coin Flip Mode** — Can't decide between two? Let fate handle it
- **History** — Every bracket and flip result gets saved to a database
- **Win Chart** — Visual bar chart showing your most-picked restaurants over time
- **Clear History** — Wipe the slate and start fresh

---

## Tech Stack

- **Backend:** Node.js, Express
- **Templating:** Handlebars (hbs)
- **Database:** SQLite via better-sqlite3
- **Frontend:** Vanilla JS, Chart.js
- **Deployment:** Render.com

---

## Getting Started

### Prerequisites
- Node.js v18+
- npm

### Installation

```bash
git clone https://github.com/yourusername/matthew-finalexpress.git
cd matthew-finalexpress
npm install
npm start
```

App runs at `http://localhost:3000`

---

## Project Structure

```
├── app.js               # Express app setup
├── database.js          # SQLite connection
├── models/
│   └── Bracket.js       # Database queries
├── routes/
│   └── brackets.js      # All app routes
├── views/
│   ├── partials/        # Header and footer
│   ├── index.hbs        # Home page
│   ├── bracket.hbs      # Bracket game UI
│   ├── results.hbs      # Winner reveal
│   ├── history.hbs      # Past results + chart
│   └── layout.hbs       # Base HTML wrapper
└── public/
    └── stylesheets/
        └── style.css    # All styles
```

---

## Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Home page |
| POST | `/start` | Start a bracket |
| POST | `/winner` | Save bracket winner |
| POST | `/flip` | Save coin flip result |
| GET | `/history` | View past results |
| POST | `/clear` | Clear all history |

---

## Deployment

Deployed on [Render.com](https://render.com). 

Build command: `npm install`  
Start command: `node ./bin/www`

---

*Made with 🍣 in Miami — Front-End Fundamentals Final Project, University of Miami 2026*