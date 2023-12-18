const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cors());

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'CO2prints',
});

// Function to generate a JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, 'yourSecretKey', { expiresIn: '1h' });
};

app.post('/register', (req, res) => {
  const sentEmail = req.body.Email;
  const sentUserName = req.body.UserName;
  const sentPassword = req.body.Password;

  const SQL = 'INSERT INTO users (email, username, password) VALUES (?,?,?)';
  const values = [sentEmail, sentUserName, sentPassword];

  db.query(SQL, values, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      console.log('User inserted successfully!');
      res.send({ message: 'User added!' });
    }
  });
});

app.post('/login', (req, res) => {
  const sentLoginUserName = req.body.LoginUserName;
  const sentLoginPassword = req.body.LoginPassword;

  const SQL = 'SELECT * FROM users WHERE username = ? AND password = ?';
  const values = [sentLoginUserName, sentLoginPassword];

  db.query(SQL, values, (err, results) => {
    if (err) {
      res.send({ error: err });
    } else {
      if (results.length > 0) {
        // User found, generate a JWT token
        const token = generateToken(results[0].id);

        // Send the token in the response
        res.send({ token });
      } else {
        console.log('Credentials do not match!');
        res.send({ message: 'Credentials do not match!' });
      }
    }
  });
});

// Middleware to verify JWT token before accessing protected routes
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, 'yourSecretKey', (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
};

// Example of a protected route
app.get('/dashboard', authenticateToken, (req, res) => {
  res.send(`Welcome to the dashboard, user ${req.user.userId}!`);
});
