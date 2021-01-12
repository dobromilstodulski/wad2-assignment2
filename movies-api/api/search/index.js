import express from 'express';
import fetch from 'node-fetch';

const router = express.Router(); // eslint-disable-line

router.get('/', async (req, res) => {
    const {query}  = req.query;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=c1c8f9fecf6f4af891ea02e4b86faa20&language=en-US&query=${query}&page=1&include_adult=false`;

    let response = await fetch(url);
    let data = await response.json();

    return res.status(200).send(data);

    //https://stackoverflow.com/questions/22700597/fs-writefile-has-no-errors-but-fails-to-write-file
    //https://stackoverflow.com/questions/47263055/writefile-does-not-create-file

    const fs = require('fs');
    fs.writeFileSync('../seedData/search.js', JSON.stringify(data), function(err) {
    if (err) {
        console.log(err);
    }
    });

    fs.readFile('../seedData/search.js', 'utf8', function(err, searchData) {
	const obj = JSON.parse(searchData)
	console.log("The data from the file is: " + obj)
    })
});

export default router;