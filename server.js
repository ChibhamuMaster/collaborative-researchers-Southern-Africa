const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const path = require('path');
const app = express();

// Simulated database (in-memory, for simplicity)
const users = [
  { id: 1, username: 'admin', passwordHash: bcrypt.hashSync('password123', 10) }
];

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'yourSecretKey',
  resave: false,
  saveUninitialized: true,
}));

// Serve static HTML files
app.use(express.static(path.join(__dirname)));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Check if the user exists
  const user = users.find(u => u.username === username);
  if (user) {
    // Check password
    bcrypt.compare(password, user.passwordHash, (err, result) => {
      if (result) {
        // Successful login
        req.session.userId = user.id;
        res.redirect('/dashboard');
      } else {
        res.send('Login failed! Incorrect username or password.');
      }
    });
  } else {
    res.send('Login failed! User not found.');
  }
});

app.get('/dashboard', (req, res) => {
  if (req.session.userId) {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
  } else {
    res.status(403).send('You must be logged in to view this page.');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.redirect('/dashboard');
    }
    res.clearCookie('connect.sid');
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
