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
    const response = await axios.get('https://fakestoreapi.com/products', {
  headers: {
    'User-Agent': 'Render-Server',
    'Accept': 'application/json',
  }
});

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});
app.get('/ping', (req, res) => {
  console.log('🔔 /ping route hit');
  res.send('pong');
});
app.get('/api/test-outbound', async (req, res) => {
  try {
    console.log('🔍 Testing outbound access...');
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    res.json({
      status: 'success',
      source: 'jsonplaceholder',
      data: response.data,
    });
  } catch (error) {
    console.error('❌ Outbound test failed:', {
      message: error.message,
      code: error.code,
      status: error.response?.status,
      headers: error.response?.headers,
      data: error.response?.data,
    });
    res.status(500).json({
      status: 'error',
      message: error.message,
      code: error.code,
      status: error.response?.status,
      data: error.response?.data,
    });
  }
});
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 

console.log('🧭 Registered routes:', app._router.stack
  .filter(r => r.route)
  .map(r => r.route.path));
