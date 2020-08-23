import axios from 'axios';

const MY_ACCESS_TOKEN = 'iAcLTR05YVe3Nm3Z66BA';

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* BOOKS                                                                                         */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

export const getAllBooks = async () => {

    await axios.get('https://the-one-api.herokuapp.com/v1/book', {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then(response => {
            // Handle success
            const books = [...response.data.docs];
            console.table(books);
        })
        .catch(error => {
            // Handle error
            console.table({ error: `${error}` });
        })
        .finally(() => {
            // Allways executed
            console.log({ finally: `Trying to get all books` })
        })
};

export const getBookById = async (id: string) => {
    await axios.get(`https://the-one-api.herokuapp.com/v1/book/${id}`, {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then(response => {
            // Handle success
            console.table(response.data);
        })
        .catch(error => {
            // Handle error
            console.table({ error: `${error}` });
        })
        .finally(() => {
            // Always executed
            console.log({ finally: `Trying to get book with an ID: ${id}` });
        })
};

export const getAllChaptersFromBookById = async (id: string) => {
    await axios.get(`https://the-one-api.herokuapp.com/v1/book/${id}/chapter`, {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then(response => {
            // Handle success
            console.log(response.data.docs);
        })
        .catch(error => {
            // Handle error
            console.table({ error: `${error}` });
        })
        .finally(() => {
            // Always executed
            console.log({ finally: `Trying to get all chapters from book with an ID: ${id}` });
        })
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* MOVIES                                                                                        */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

export const getAllMovies = async () => {

    await axios.get('https://the-one-api.herokuapp.com/v1/movie', {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then(response => {
            // Handle success
            const movies = [...response.data.docs];
            console.log(movies);
        })
        .catch(error => {
            // Handle error
            console.table({ error: `${error}` });
        })
        .finally(() => {
            // Allways executed
            console.log({ finally: `Trying to get all movies` })
        })
};

export const getMovieById = async (id: string) => {
    await axios.get(`https://the-one-api.herokuapp.com/v1/movie/${id}`, {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then(response => {
            // Handle success
            console.table(response.data);
        })
        .catch(error => {
            // Handle error
            console.table({ error: `${error}` });
        })
        .finally(() => {
            // Always executed
            console.log({ finally: `Trying to get movie with an ID: ${id}` });
        })
};

export const getAllQuotesFromMovieById = async (id: string, showRandomThree: boolean = false) => {
    await axios.get(`https://the-one-api.herokuapp.com/v1/movie/${id}/quote`, {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then(response => {
            // Handle success
            const quotes = [...response.data.docs];

            if (showRandomThree === true) {
                // If function parameter is set to true when function is executed
                console.log(`\n\nShowing 3 Random QUOTE records FROM movie by id: ${id}\n`);
                for (let i = 0; i < 3; i++) {
                    const random: number = Math.floor(Math.random() * quotes.length);
                    console.log(`Quotes total: ${quotes.length}`, { random });
                    console.table(quotes[random]);
                    console.log(''); /* for cleaner tables */
                }
            } else {
                for (let i = 0; i < quotes.length; i++) {
                    console.table(quotes[i]);
                    console.log(''); /* for cleaner tables */
                }
            }
        })
        .catch(error => {
            // Handle error
            console.table({ error: `${error}` });
        })
        .finally(() => {
            // Allways executed
            showRandomThree === true
                ? console.log({ finally: `showRandomThree === true | Trying to get 3 random quotes from movie with an ID: ${id}` })
                : console.log({ finally: `Trying to get all quotes from movie with an ID: ${id}` })
        })
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* CHARACTERS                                                                                    */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

export const getAllCharacters = async (showRandomThree: boolean = false) => {
    // If you want to show 3 random records, set true as a parameter when you invoke this function

    await axios.get('https://the-one-api.herokuapp.com/v1/character', {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then(response => {
            // Handle success
            const characters = [...response.data.docs];

            if (showRandomThree === true) {
                // If function parameter is set to true when function is executed
                console.log('\n\nShowing 3 Random CHARACTER records:\n');
                for (let i = 0; i < 3; i++) {
                    const random: number = Math.floor(Math.random() * characters.length);
                    console.log(`Characters total: ${characters.length}`, { random });
                    console.table(characters[random]);
                    console.log(''); /* for cleaner tables */
                }
            } else {
                for (let i = 0; i < characters.length; i++) {
                    console.table(characters[i]);
                    console.log(''); /* for cleaner tables */
                }
            }
        })
        .catch(error => {
            // Handle error
            console.table({ error: `${error}` });
        })
        .finally(() => {
            // Allways executed
            showRandomThree === true
                ? console.log({ finally: `showRandomThree === true | Trying to get 3 random characters` })
                : console.log({ finally: `Trying to get all characters` })
        })
};

export const getCharacterById = async (id: string) => {
    await axios.get(`https://the-one-api.herokuapp.com/v1/character/${id}`, {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then(response => {
            // Handle success
            console.table(response.data);
        })
        .catch(error => {
            // Handle error
            console.table({ error: `${error}` });
        })
        .finally(() => {
            // Always executed
            console.log({ finally: `Trying to get character with an ID: ${id}` });
        })
};

export const getAllQuotesFromCharacterById = async (id: string, showRandomThree: boolean = false) => {
    await axios.get(`https://the-one-api.herokuapp.com/v1/character/${id}/quote`, {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then(response => {
            // Handle success
            const quotes = [...response.data.docs];

            if (showRandomThree === true) {
                // If function parameter is set to true when function is executed
                console.log(`\n\nShowing 3 Random QUOTE records FROM character by id: ${id}\n`);
                for (let i = 0; i < 3; i++) {
                    const random: number = Math.floor(Math.random() * quotes.length);
                    console.log(`Quotes total: ${quotes.length}`, { random });
                    console.table(quotes[random]);
                    console.log(''); /* for cleaner tables */
                }
            } else {
                for (let i = 0; i < quotes.length; i++) {
                    console.table(quotes[i]);
                    console.log(''); /* for cleaner tables */
                }
            }
        })
        .catch(error => {
            // Handle error
            console.table({ error: `${error}` });
        })
        .finally(() => {
            // Allways executed
            showRandomThree === true
                ? console.log({ finally: `showRandomThree === true | Trying to get 3 random quotes from character with an ID: ${id}` })
                : console.log({ finally: `Trying to get all quotes from character with an ID: ${id}` })
        })
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* QUOTES                                                                                        */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

export const getAllQuotes = async (showRandomThree = false) => {
    // If you want to show 3 random records, set true as a parameter when you invoke this function

    await axios.get('https://the-one-api.herokuapp.com/v1/quote', {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then((response) => {
            // Handle success
            const quotes = [...response.data.docs];

            // If function parameter is set to true when function is executed
            if (showRandomThree === true) {
                console.log('\nShowing 3 Random QUOTE records:\n');
                for (let i = 0; i < 3; i++) {
                    const random: number = Math.floor(Math.random() * quotes.length);
                    console.log(`Quotes total: ${quotes.length}`, { random });
                    console.table(quotes[random]);
                    console.log(''); /* for cleaner tables */
                }
            } else {
                for (let i = 0; i < quotes.length; i++) {
                    console.table(quotes[i]);
                    console.log(''); /* for cleaner tables */
                }
            }
        })
        .catch((error) => {
            // Handle error
            console.table({ error: `${error}` });
        })
        .finally(() => {
            // Always executed
            showRandomThree === true
                ? console.log({ finally: `showRandomThree === true | Trying to get 3 random quotes` })
                : console.log({ finally: `Trying to get all quotes` })
        });
};

export const getQuoteById = async (id: string) => {
    await axios.get(`https://the-one-api.herokuapp.com/v1/quote/${id}`, {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then(response => {
            // Handle success
            console.table(response.data);
        })
        .catch(error => {
            // Handle error
            console.table({ error: `${error}` });
        })
        .finally(() => {
            // Always executed
            console.log({ finally: `Trying to get quote with an ID: ${id}` });
        });
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* CHAPTER                                                                                       */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

export const getAllChapters = async (showRandomThree = false) => {
    // If you want to show 3 random records, set true as a parameter when you invoke this function

    await axios.get('https://the-one-api.herokuapp.com/v1/chapter', {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then((response) => {
            // Handle success
            const chapters = [...response.data.docs];

            // If function parameter is set to true when function is executed
            if (showRandomThree === true) {
                console.log('\nShowing 3 Random CHAPTER records:\n');
                for (let i = 0; i < 3; i++) {
                    const random: number = Math.floor(Math.random() * chapters.length);
                    console.log(`Chapters total: ${chapters.length}`, { random });
                    console.table(chapters[random]);
                    console.log(''); /* for cleaner tables */
                }
            } else {
                for (let i = 0; i < chapters.length; i++) {
                    console.table(chapters[i]);
                    console.log(''); /* for cleaner tables */
                }
            }
        })
        .catch((error) => {
            // Handle error
            console.table({ error: `${error}` });
        })
        .finally(() => {
            // Always executed
            showRandomThree === true
                ? console.log({ finally: `showRandomThree === true | Trying to get 3 random chapters` })
                : console.log({ finally: `Trying to get all chapters` })
        });
};

export const getChapterById = async (id: string) => {
    await axios.get(`https://the-one-api.herokuapp.com/v1/chapter/${id}`, {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then(response => {
            // Handle success
            console.table(response.data);
        })
        .catch(error => {
            // Handle error
            console.table({ error: `${error}` });
        })
        .finally(() => {
            // Always executed
            console.log({ finally: `Trying to get chapter with an ID: ${id}` });
        });
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
