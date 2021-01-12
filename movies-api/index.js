import './db';
import session from 'express-session';
import passport from './authenticate';
import {loadUsers, loadMovies, loadUpcoming, loadTopRated, loadGenres} from './seedData';
import usersRouter from './api/users';
import genresRouter from './api/genres';
import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import upcomingMoviesRouter from './api/upcomingMovies';
import topRatedMoviesRouter from './api/topRatedMovies';
import searchRouter from './api/search';
import movieDetailsRouter from './api/movieDetails';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

const port = process.env.PORT;

if (process.env.SEED_DB) {
  loadUsers();
  loadMovies();
  loadUpcoming();
  loadTopRated();
  loadGenres();
}

const errHandler = (err, req, res) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};

//session middleware
app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static('public'));
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/upcoming', passport.authenticate('jwt', {session: false}), upcomingMoviesRouter);
app.use('/api/toprated', passport.authenticate('jwt', {session: false}), topRatedMoviesRouter);
app.use('/api/users', usersRouter);
app.use('/api/genres', genresRouter);
app.use('/api/search', searchRouter);
app.use('/api/moviedetails', movieDetailsRouter);
app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});