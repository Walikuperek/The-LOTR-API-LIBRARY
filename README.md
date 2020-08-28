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

api.getAllCharacters();
```

## Project setup
```
npm install
```

## Run
```
tsc library.ts && tsc index.ts && node index.js
```

#### Example row from api.getAllCharacters()
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
{
  finally: 'showRandomThree === true | Trying to get 3 random characters'
}
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


#### Example usage of api.getAllCharacters(true)
```
Showing 3 Random CHARACTER records:

Characters total: 933 { random: 674 }
┌─────────┬───────────────────────────────────────────┐
│ (index) │                  Values                   │
├─────────┼───────────────────────────────────────────┤
│   _id   │        '5cd99d4bde30eff6ebccfdbc'         │
│ height  │                    ''                     │
│  race   │                  'Human'                  │
│ gender  │                  'Male'                   │
│  birth  │                 'TA 1684'                 │
│ spouse  │              'Unnamed wife'               │
│  death  │                 'TA 1856'                 │
│  realm  │                    ''                     │
│  hair   │                    ''                     │
│  name   │               'Narmacil II'               │
│ wikiUrl │ 'http://lotr.wikia.com//wiki/Narmacil_II' │
└─────────┴───────────────────────────────────────────┘

Characters total: 933 { random: 215 }
┌─────────┬──────────────────────────────────────┐
│ (index) │                Values                │
├─────────┼──────────────────────────────────────┤
│   _id   │      '5cd99d4bde30eff6ebccfd76'      │
│ height  │                  ''                  │
│  race   │               'Human'                │
│ gender  │               'Female'               │
│  birth  │          'Late ,Third Age'           │
│ spouse  │                  ''                  │
│  death  │                  ''                  │
│  realm  │                  ''                  │
│  hair   │                  ''                  │
│  name   │               'Ioreth'               │
│ wikiUrl │ 'http://lotr.wikia.com//wiki/Ioreth' │
└─────────┴──────────────────────────────────────┘

Characters total: 933 { random: 755 }
┌─────────┬─────────────────────────────────────┐
│ (index) │               Values                │
├─────────┼─────────────────────────────────────┤
│   _id   │     '5cd99d4bde30eff6ebccfe80'      │
│ height  │                 ''                  │
│  race   │               'Dwarf'               │
│ gender  │                 ''                  │
│  birth  │                 ''                  │
│ spouse  │                 ''                  │
│  death  │                 ''                  │
│  realm  │                 ''                  │
│  hair   │                 ''                  │
│  name   │               'Durin'               │
│ wikiUrl │ 'http://lotr.wikia.com//wiki/Durin' │
└─────────┴─────────────────────────────────────┘

{
  finally: 'showRandomThree === true | Trying to get 3 random characters'
}
```

For more detail, please visit my website:
> [QUAK BLOG](http://quak.com.pl)
