import express from 'express';
import genreModel from './genreModel';
const router = express.Router();

  router.get('/', (req, res, next) => {
    genreModel.find().then(genres => res.status(200).send(genres)).catch(next);
  });
  
  router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    genreModel.findByGenreDBId(id).then(genre => res.status(200).send(genre)).catch(next);
  });

  export default router;