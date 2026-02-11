const express = require('express');
const app = express();
app.use(express.json());

app.post('/string/reverse', (req, res) => {
    res.json({ reversed: req.body.text.split('').reverse().join('') });
});

app.post('/string/uppercase', (req, res) => {
    res.json({ uppercase: req.body.text.toUpperCase() });
});

app.post('/string/word-count', (req, res) => {
    res.json({ count: req.body.text.trim().split(/\s+/).length });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
