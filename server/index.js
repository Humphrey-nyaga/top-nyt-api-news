import express from 'express';
import 'dotenv/config';
import fetch from 'node-fetch';
import cors from 'cors';
const app = express();
app.use(cors()); // enable CORS
const BASE_URL = "api.nytimes.com";


app.get('/articles/:section', async (req, res) => {
    const { section } = req.params;
    const options = {
        hostname: BASE_URL,
        path: `/svc/topstories/v2/${section}.json?api-key=${process.env.API_KEY}`,
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const response = await fetch(`https://${BASE_URL}${options.path}`, options);
        const data = await response.json();
        console.log(data); // log the response
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong.' });
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
