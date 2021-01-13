import express from 'express';
import { getMovie } from '../tmdb-api';
const router = express.Router();

router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    getMovie(id)
    .then(results => res.status(200).send(results))
    .catch((error) => next(error));
});

export default router;