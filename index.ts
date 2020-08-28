import * as api from './library';

// Example ID's
const BOOK_ID      = '5cf5805fb53e011a64671582';
const MOVIE_ID     = '5cd95395de30eff6ebccde5d';
const CHARACTER_ID = '5cd99d4bde30eff6ebccfe9e';
const QUOTE_ID     = '5cd96e05de30eff6ebccf10f';
const CHAPTER_ID   = '5cdc25d5bc17e929cf246220';

(function main(): void {

// > BOOKS
    api.getAllBooks();
    api.getBookById(BOOK_ID);
    api.getAllChaptersFromBookById(BOOK_ID);

// > MOVIES
    api.getAllMovies();
    api.getAllMovies(true); /* RANDOM THREE if set to true */
    api.getMovieById(MOVIE_ID);
    api.getAllQuotesFromMovieById(MOVIE_ID);
    api.getAllQuotesFromMovieById(MOVIE_ID, true); /* RANDOM THREE if set to true */

// > CHARACTERS
    api.getAllCharacters();
    api.getAllCharacters(true); /* RANDOM THREE if set to true */
    api.getCharacterById(CHARACTER_ID);
    api.getAllQuotesFromCharacterById(CHARACTER_ID);
    api.getAllQuotesFromCharacterById(CHARACTER_ID, true);

// > QUOTES
    api.getAllQuotes();
    api.getAllQuotes(true); /* RANDOM THREE if set to true */
    api.getQuoteById(QUOTE_ID);

// > CHAPTERS
    api.getAllChapters();
    api.getAllChapters(true); /* RANDOM THREE if set to true */
    api.getChapterById(CHAPTER_ID);

}());
