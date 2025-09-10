// server.jsx
// Backend server entry point for Accordian app

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Example API route
app.get('/api/status', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Add more routes here as needed

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

