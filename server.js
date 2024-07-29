// server.js
const express = require('express');
const sql = require('mssql');
const config = require('./dbconfig');

const app = express();
const port = 3000;

app.use(express.json());

sql.connect(config, err => {
  if (err) console.error(err);
  console.log('Connected to the database.');
});

// GET endpoint example
app.get('/api/users', async (req, res) => {
  try {
    const result = await sql.query`SELECT * FROM dbo.FinancialServices`;
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
