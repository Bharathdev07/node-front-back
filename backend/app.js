const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config(); // Load environment variables

const PORT = process.env.PORT || 5000;

// Enable CORS for any frontend (You can restrict it to specific domains in production)
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: "Backend connected successfully!" });
});

app.get('/api/message', (req, res) => {
    res.json({ message: "Hello from the backend via environment variable!" });
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
