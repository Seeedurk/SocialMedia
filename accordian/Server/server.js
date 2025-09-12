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
        const response = await axios.get('https://dummyjson.com/products', {
            headers: {
                'User-Agent': 'Render-Server',
                'Accept': 'application/json',
            }
        });

        const normalized = response.data.products.map(product => ({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.images?.[0] || 'https://via.placeholder.com/100',
        }));

        res.json(normalized);
    } catch (error) {
        console.error('❌ Error fetching products:', {
            message: error.message,
            code: error.code,
            status: error.response?.status,
            data: error.response?.data,
        });
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 

console.log('🧭 Registered routes:', app._router.stack
  .filter(r => r.route)
  .map(r => r.route.path));
