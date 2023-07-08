const express = require('express');
const mysql = require('mysql2');

const app = express();

// Create a connection pool
const pool = mysql.createPool({
  host: 'mysql-container', // Use the service name of the MySQL container in Docker Compose
  user: 'mayur',
  password: 'mayur',
  database: 'login_registration',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test the database connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
    connection.release();
  }
});

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.listen(8080, () => {
  console.log('Backend server is running on port 8080');
});
