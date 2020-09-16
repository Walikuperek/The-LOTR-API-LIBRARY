# The-LOTR-API-LIBRARY
###### Updated to V2 of the API
![The-LOTR-API](/lotr-api-img.png)

Full library for fetching data from Lord of the Rings API

For more detail, please visit official website:
> The LOTR API - [official website](https://the-one-api.dev/)

> The LOTR API - [documentation](https://the-one-api.dev/documentation)

## Just import and get data from library.ts
```
import * as api from './library';

(async function main() {
  const allBooks = (await api.getAllBooks());
  console.table(allBooks);
 })();
```

### Response from above
```
┌─────────┬────────────────────────────┬──────────────────────────────┐
│ (index) │            _id             │             name             │
├─────────┼────────────────────────────┼──────────────────────────────┤
│    0    │ '5cf5805fb53e011a64671582' │ 'The Fellowship Of The Ring' │
│    1    │ '5cf58077b53e011a64671583' │       'The Two Towers'       │
│    2    │ '5cf58080b53e011a64671584' │   'The Return Of The King'   │
└─────────┴────────────────────────────┴──────────────────────────────┘
_____________
Ellapsed time: 202ms
```

## You can choose allBooks[0] as well
```
(async function main() {
  const allBooks = (await api.getAllBooks());
  console.table(allBooks[0]);
 })();
```
### And you'll get response below
```
┌─────────┬──────────────────────────────┐
│ (index) │            Values            │
├─────────┼──────────────────────────────┤
│   _id   │  '5cf5805fb53e011a64671582'  │
│  name   │ 'The Fellowship Of The Ring' │
└─────────┴──────────────────────────────┘
_____________
Ellapsed time: 199ms
```

## Project setup
```
npm install
```

## Run
```
tsc util.ts && tsc library.ts && tsc index.ts && node index.js
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
  *     getAllMovies(true); /* RANDOM THREE if set to true */
  *     getMovieById(MOVIE_ID);
  *     getAllQuotesFromMovieById(MOVIE_ID);
  *     getAllQuotesFromMovieById(MOVIE_ID, true); /* RANDOM THREE if set to true */

> CHARACTERS
  *     getAllCharacters();
  *     getAllCharacters(true); /* RANDOM THREE if set to true */
  *     getCharacterById(CHARACTER_ID);
  *     getAllQuotesFromCharacterById(CHARACTER_ID);
  *     getAllQuotesFromCharacterById(CHARACTER_ID, true);

> QUOTES
  *     getAllQuotes();
  *     getAllQuotes(true); /* RANDOM THREE if set to true */
  *     getQuoteById(QUOTE_ID);

> CHAPTERS
  *     getAllChapters();
  *     getAllChapters(true); /* RANDOM THREE if set to true */
  *     getChapterById(CHAPTER_ID);


#### Example row from console.table(await api.getAllCharacters())
```
┌─────────┬────────────────────────────────────┐
│ (index) │               Values               │
├─────────┼────────────────────────────────────┤
│   _id   │     '5cd99d4bde30eff6ebccfc1f'     │
│ height  │       `1.76m / 5'9" (film)`        │
│  race   │              'Human'               │
│ gender  │               'Male'               │
│  birth  │             'TA 2925'              │
│ spouse  │           'Unnamed wife'           │
│  death  │             'TA 3007'              │
│  realm  │               'Dale'               │
│  hair   │           'Brown (film)'           │
│  name   │               'Bain'               │
│ wikiUrl │ 'http://lotr.wikia.com//wiki/Bain' │
└─────────┴────────────────────────────────────┘
```

#### Error handling example of api.getAllCharacters(true)
```
┌─────────┬──────────────────────────────────────────────┐
│ (index) │                    Values                    │
├─────────┼──────────────────────────────────────────────┤
│  error  │ 'Error: Request failed with status code 404' │
└─────────┴──────────────────────────────────────────────┘
```


For more detail, please visit my website:
> [QUAK BLOG](http://quak.com.pl)
