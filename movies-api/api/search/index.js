import express from 'express';
import fetch from 'node-fetch';

const router = express.Router(); // eslint-disable-line

router.get('/', async (req, res) => {
    const {query}  = req.query;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=c1c8f9fecf6f4af891ea02e4b86faa20&language=en-US&query=${query}&page=1&include_adult=false`;

    let response = await fetch(url);
    let data = await response.json();

    return res.status(200).send(data);
});

export default router;