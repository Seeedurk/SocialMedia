import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import { parse } from 'url';
import cors from 'cors';

console.log('🚀 server.js loaded');

const app = express();
app.use(cors({ origin: 'http://localhost:50334' }));

app.use(bodyParser.json());
// Root route

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Products route
app.get('/api/products', async (req, res) => {
  try {
    console.log('✅ /api/products route was hit');
    const response = await axios.get('https://fakestoreapi.com/products');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

