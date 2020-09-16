import * as api from './library';

/*
    Example ID's
*/
const BOOK_ID      = '5cf5805fb53e011a64671582';
const MOVIE_ID     = '5cd95395de30eff6ebccde5d';
const CHARACTER_ID = '5cd99d4bde30eff6ebccfe9e';
const QUOTE_ID     = '5cd96e05de30eff6ebccf10f';
const CHAPTER_ID   = '5cdc25d5bc17e929cf246220';

/* AUTORUN MAIN FUNCTION 

    ! 
        IT IS THE ONE OF POSSIBLE WAYS OF GETTING DATA 
    !
    ! 
        function main 
        is prepared to SHOW the possible way of getting data 
    !
    MANDATORY:
        * async function
            - await for response
        e.g.  const allBooks = (await api.getAllBooks());

            - then
        e.g.  console.log(allBooks) || console.table(allBooks[0])
*/
(async function main() {
    const timeBeforeCompletition = Date.now();
    // Ellapsed time start
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// > BOOKS
    const allBooks = (await api.getAllBooks());
    const bookById = (await api.getBookById(BOOK_ID));
    const chaptersFromBookById = (await api.getAllChaptersFromBookById(BOOK_ID));

// > MOVIES
    const allMovies = (await api.getAllMovies());
    const threeRandomMovies = (await api.getAllMovies(true));/* RANDOM THREE if set to true */
    const movieById = (await api.getMovieById(MOVIE_ID));
    const allQuotesFromMovieById = (await api.getAllQuotesFromMovieById(MOVIE_ID));
    const threeRandomQuotesFromMovieById = (await api.getAllQuotesFromMovieById(MOVIE_ID, true)); /* RANDOM THREE if set to true */

// > CHARACTERS
    const allCharacters = (await api.getAllCharacters());
    const threeRandomCharacters = (await api.getAllCharacters(true));/* RANDOM THREE if set to true */
    const characterById = (await api.getCharacterById(CHARACTER_ID));
    const allQuotesFromCharacterById = (await api.getAllQuotesFromCharacterById(CHARACTER_ID));
    const threeRandomQuotesFromCharacterById = (await api.getAllQuotesFromCharacterById(CHARACTER_ID, true)); /* RANDOM THREE if set to true */

// > QUOTES
    const allQuotes = (await api.getAllQuotes());
    const threeRandomQuotes = (await api.getAllQuotes(true));/* RANDOM THREE if set to true */
    const quoteById = (await api.getQuoteById(QUOTE_ID));

// > CHAPTERS
    const allChapters = (await api.getAllChapters());
    const threeRandomChapters = (await api.getAllChapters(true));/* RANDOM THREE if set to true */
    const chapterById = (await api.getChapterById(CHAPTER_ID));

/*
```                                        ```
    NOW YOU CAN console.log/table
    to check data
```                                        ```
*/
    console.table(allBooks);
    console.table(bookById);
    console.table(chaptersFromBookById);

    console.log(allMovies);
    console.table(threeRandomMovies);
    console.table(movieById);
    console.log(allQuotesFromMovieById);
    console.log(threeRandomQuotesFromMovieById);

    console.table(allCharacters);
    console.table(threeRandomCharacters);
    console.table(characterById);
    console.log(allQuotesFromCharacterById);
    console.log(threeRandomQuotesFromCharacterById);

    console.log(allQuotes);
    console.log(threeRandomQuotes);
    console.log(quoteById);

    console.log(allChapters);
    console.log(threeRandomChapters);
    console.log(chapterById);


    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Ellapsed time stop
    const timeAfterCompletition = Date.now();
    console.log(`_____________
Ellapsed time: ${timeAfterCompletition - timeBeforeCompletition}ms`);
})();