const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database setup
const db = new sqlite3.Database('./bootcamp.db', (err) => {
    if (err) console.error("DB Connection Error:", err.message);
    else console.log('Connected to BOOTCAMP SQLite database.');
});

// Table banana
db.run(`CREATE TABLE IF NOT EXISTS enrollments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    course TEXT,
    name TEXT,
    email TEXT,
    phone TEXT,
    date DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

// API: Data save karne ke liye
app.post('/api/enroll', (req, res) => {
    const { course, name, email, phone } = req.body;
    const sql = `INSERT INTO enrollments (course, name, email, phone) VALUES (?, ?, ?, ?)`;
    
    db.run(sql, [course, name, email, phone], function(err) {
        if (err) return res.status(400).json({ error: err.message });
        res.json({ message: "Registration Successful! Data saved in Database.", id: this.lastID });
    });
});

// API: Saara data dekhne ke liye (Admin Check)
app.get('/api/students', (req, res) => {
    db.all("SELECT * FROM enrollments ORDER BY date DESC", [], (err, rows) => {
        if (err) res.status(400).json({ error: err.message });
        res.json(rows);
    });
});

app.listen(PORT, () => {
    console.log(`Backend Server is flying on http://localhost:${PORT}`);
});