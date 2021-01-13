# Assignment 2 - Web API.

Name: Dobromil Stodulski

## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,
 
 + Search - Insert a query and search for a specific money, all the results are then listed related to the movie specified.
 + Movie Details - Fetches the movie details from the TMDB API for a specific movie ID.
 + Upcoming Movies -  Gets the upcoming movies from the MongoDB database.
 + Top Rated Movies - Gets the top rated movies from the MongoDB database.

## Installation Requirements

```bat
git clone https://github.com/dobromilstodulski/wad2-assignment2.git
```

followed by installation

```bat
git install
```
Install node on both on the following folders: movie-api and assignment2 

```bat
npm install
```
and then start the movie-api node server and assignment2 (running individually so go into each folder)

```bat
npm start
```

## API Configuration

```bat
TMDB_KEY=secret key

NODE_ENV=development
PORT=8080
HOST=localhost

seedDb=true
mongoDB=My MongoDB Atlas URL

secret=My JWT Secret Phrase
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies | Gets a list of movies | N/A | N/A | N/A
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/upcoming | Gets a list of upcoming movies | N/A | N/A | N/A
| /api/upcoming/{movieid} | Gets an upcoming movie | N/A | N/A | N/A
| /api/toprated | Gets a list of top rated movies | N/A | N/A | N/A
| /api/toprated/{movieid} | Gets a top rated movie | N/A | N/A | N/A
| /api/users | Get an user | Register an user / login | Update an user | N/A
| /api/users/{userid}/favourites | Gets the users favourite movies | Adds a movie to the favourite list | N/A | N/A
| /api/genres | Gets the genre list | N/A | N/A | N/A
| /api/search/{query} | Gets the movies related to a search query | N/A | N/A | N/A
| /api/moviedetails/{movieid} | Gets the details of a movie | N/A | N/A | N/A
| ... | ... | ... | ... | ...


## Security and Authentication
Implemented login with JWT and Passport. 

In the api the following are protected by authorization: 
+ /api/movies
+ /api/upcoming
+ /api/toprated

In the react app, I have integrated a login and register system with JWT. Once the user is logged in then more pages are added to the navbar such as the user's favourites and watch later movies. The profile page is not implemented as there inconsistencies where if one refreshes the page then the session is lost and the user has to log in again. There is a login page and a register page. And the following are protected by a private route:
+ /movies/favourites
+ /movies/watchlist

## Integrating with React App

For getting the main page or the movies page:

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};

~~~

For getting the upcoming movies page:

~~~Javascript
export const getUpcomingMovies = () => {
    return fetch(
       '/api/upcoming',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

~~~

For getting the top rated movies page:

~~~Javascript
export const getTopRatedMovies = () => {
    return fetch(
       '/api/toprated',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

~~~

For signing in and registering (authentication):

~~~JavaScript
export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

~~~

Here is a list that I tried to integrate but ran into trouble:

Genres (Works in the developer console but iterable error):

~~~Javascript
export const getGenres= () => {
  return fetch(
     '/api/genres',{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
  )
  .then(res => res.json())
  .then(json => json.results);
};
~~~

Movie Details (Also works in the developer console but doesn't display the content):

~~~Javascript
export const getMovieDetails= id => {

  return fetch(
    `/api/moviedetails/${id}`,{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
  )
  .then(res => res.json())
  .then(json => json.results);
};

~~~

Favourites:

~~~Javascript 
export const addFavourites = (movieId) => {
  return fetch('/api/:userName/favourites', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ movieId: movieId })
  }).then(res => res.json())
};

export const getFavourites = () => {
  return fetch(
     '/api/:userName/favourites',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

~~~

Search (didn't know how to pass the query from the react app input box back into the API but it works on the API end):

~~~JavaScript
  export const search = (searchString) => {
    return fetch('/api/search?query=${searchString}', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ searchString: searchString })
    }).then(res => res.json())
};

~~~

Movie Reviews (Since login is inconsistent and this is protected then reviews may not show up, in fact without the movie details page, this will not show up.)
~~~JavaScript
export const getMovieReviews= id => {

  return fetch(
    `/api/movies/${id}/reviews`,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
  )
  .then(res => res.json())
  .then(json => json.results);
};

~~~


## Extra features

. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  

NULL

## Independent learning.

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . . 

NULL
