import express from 'express';
import { toprated } from '../../seedData/toprated';
import getMovieReviews from '../tmdb-api';
import topRatedMovieModel from './topRatedMovieModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  topRatedMovieModel.find().then(toprated => res.status(200).send(toprated)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  topRatedMovieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

export default router;