// app.js 
const express = require('express');
const app = express();
// ElephantSQL
const { Pool } = require('pg');

// Middleware
app.use(express.json()); // To parse JSON request bodies

//start
// PostgreSQL Connection Pool
const pool = new Pool({
    user: 'yipglpsr',
    host: 'horton.db.elephantsql.com',
    database: 'yipglpsr', // The default database might be the same as the username in some cases
    password: 'postgres://yipglpsr:wX6Y9OLeAy__pUrJQwErK4idLd1dI0eA@horton.db.elephantsql.com/yipglpsryour-password', // Replace 'your-password' with the actual password provided by ElephantSQL
    port: 5432
  });
  
  // Test the connection
  pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Error connecting to ElephantSQL:', err);
    } else {
      console.log('Connected to ElephantSQL on:', res.rows[0].now);
    }
  });



//end

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, this is your Node.js backend!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
