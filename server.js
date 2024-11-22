// import express from 'express';
// import path from 'path';
// import fetch from 'node-fetch'; // No need to downgrade; use the latest version
// import { fileURLToPath } from 'url';

// // Initialize the app
// const app = express();
// const port = 3000;

// // To resolve __dirname in ESM
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Serve static files from the public directory
// app.use(express.static('public'));
// app.use(express.json());

// // Route to serve the main HTML file
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// // Route to fetch card data from the Yu-Gi-Oh! API
// app.get('/cards', async (req, res) => {
//     const cardName = req.query.name;
//     if (!cardName) {
//         return res.status(400).json({ error: 'Card name parameter is required' });
//     }

//     try {
//         const apiUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(cardName)}`;
//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//             throw new Error('Card data not found');
//         }

//         const data = await response.json();
//         res.json(data);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });
