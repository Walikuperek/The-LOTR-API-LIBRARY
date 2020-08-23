# The-LOTR-API-LIBRARY
Full library for fetching data from Lord of the Rings API

## Just import and get data
```
import * as api from './library';
```

## NPM packages
* fetching data: axios

## Functions from 'library.ts'
> BOOKS
  *     getAllBooks();
  *     getBookById(BOOK_ID);
  *     getAllChaptersFromBookById(BOOK_ID);

> MOVIES
  *     getAllMovies();
  *     getMovieById(MOVIE_ID);
  *     getAllQuotesFromMovieById(MOVIE_ID);
  *     getAllQuotesFromMovieById(MOVIE_ID, true); /* RANDOM THREE if set to true */

> CHARACTERS
  *     getAllCharacters();
  *     getAllCharacters(true); /* RANDOM THREE if set to true */
  *     getCharacterById(CHARACTER_ID);
  *     getAllQuotesFromCharacterById(CHARACTER_ID); // NOT working with provided CHARACTER_ID -> 0 QUOTES
  *     getAllQuotesFromCharacterById(CHARACTER_ID, true); // NOT working with provided CHARACTER_ID -> 0 QUOTES

> QUOTES
  *     getAllQuotes();
  *     getAllQuotes(true); /* RANDOM THREE if set to true */
  *     getQuoteById(QUOTE_ID);

> CHAPTERS
  *     getAllChapters();
  *     getAllChapters(true); /* RANDOM THREE if set to true */
  *     getChapterById(CHAPTER_ID);

# Example row from QUOTES
```
┌───────────┬────────────────────────────┐
│  (index)  │           Values           │
├───────────┼────────────────────────────┤
│    _id    │ '5cd96e05de30eff6ebccf0e2' │
│  dialog   │  'Bilbo! Bilbo Baggins!'   │
│   movie   │ '5cd95395de30eff6ebccde5c' │
│ character │ '5cdbe49b7ed9587226e794a0' │
└───────────┴────────────────────────────┘
```

## Project setup
```
npm install
```

### Run
```
tsc library.ts && tsc index.ts && node index.js
```

For more detail, please visit my website:
> [QUAK BLOG](http://quak.com.pl)
