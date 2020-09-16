import axios from 'axios';
import { randomThree as __randomThree} from './util';

const MY_ACCESS_TOKEN = 'iAcLTR05YVe3Nm3Z66BA';
const BASE_URL = 'https://the-one-api.dev/v2';

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* BOOKS                                                                                         */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

export const getAllBooks = async () => {

    const responseAxios = await axios.get(`${BASE_URL}/book`, {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })   
        .then(response => {
            // Handle success
            const books = [...response.data.docs];
            return books;
        })
        .catch(error => {
            // Handle error
            console.table({ error: `${error}` });
        })

    return responseAxios
};

export const getBookById = async (id: string) => {
    const responseAxios = await axios.get(`${BASE_URL}/book/${id}`, {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then(response => {
            // Handle success
            const book = [...response.data.docs];
            return book[0];
        })
        .catch(error => {
            // Handle error
            console.table({ error: `${error}` });
        })

    return responseAxios
};

export const getAllChaptersFromBookById = async (id: string) => {
    const responseAxios = await axios.get(`${BASE_URL}/book/${id}/chapter`, {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then(response => {
            // Handle success
            const chapters = [...response.data.docs];
            return chapters;
        })
        .catch(error => {
            // Handle error
            console.table({ error: `${error}` });
        })

    return responseAxios
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* MOVIES                                                                                        */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

export const getAllMovies = async (showRandomThree: boolean = false) => {

    const responseAxios = await axios.get(`${BASE_URL}/movie`, {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then(response => {
            // Handle success
            const movies = [...response.data.docs];
            
            // If showRandomThree is set to true
            // return only 3 random
            return __randomThree(showRandomThree, movies)
        })
        .catch(error => {
            // Handle error
            console.table({ error: `${error}` });
        })

    return responseAxios
};

export const getMovieById = async (id: string) => {
    const responseAxios = await axios.get(`${BASE_URL}/movie/${id}`, {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then(response => {
            // Handle success
            const movie = [...response.data.docs];
            return movie[0];
        })
        .catch(error => {
            // Handle error
            console.table({ error: `${error}` });
        })

    return responseAxios
};

export const getAllQuotesFromMovieById = async (id: string, showRandomThree: boolean = false) => {
    const responseAxios = await axios.get(`${BASE_URL}/movie/${id}/quote`, {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then(response => {
            // Handle success
            const quotes = [...response.data.docs];

            // If showRandomThree is set to true
            // return only 3 random
            return __randomThree(showRandomThree, quotes)
        })
        .catch(error => {
            // Handle error
            console.table({ error: `${error}` });
        })

    return responseAxios
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* CHARACTERS                                                                                    */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

export const getAllCharacters = async (showRandomThree: boolean = false) => {
    const responseAxios = await axios.get(`${BASE_URL}/character`, {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then(response => {
            // Handle success
            const characters = [...response.data.docs];

            // If showRandomThree is set to true
            // return only 3 random
            return __randomThree(showRandomThree, characters)
        })
        .catch(error => {
            // Handle error
            console.table({ error: `${error}` });
        })

    return responseAxios
};

export const getCharacterById = async (id: string) => {
    const responseAxios = await axios.get(`${BASE_URL}/character/${id}`, {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then(response => {
            // Handle success
            const character = [...response.data.docs];
            return character;
        })
        .catch(error => {
            // Handle error
            console.table({ error: `${error}` });
        })

    return responseAxios
};

export const getAllQuotesFromCharacterById = async (id: string, showRandomThree: boolean = false) => {
    const responseAxios = await axios.get(`${BASE_URL}/character/${id}/quote`, {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then(response => {
            // Handle success
            const quotes = [...response.data.docs];

            // If showRandomThree is set to true
            // return only 3 random
            return __randomThree(showRandomThree, quotes)
        })
        .catch(error => {
            // Handle error
            console.table({ error: `${error}` });
        })

    return responseAxios
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* QUOTES                                                                                        */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

export const getAllQuotes = async (showRandomThree = false) => {
    const responseAxios = await axios.get(`${BASE_URL}/quote`, {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then((response) => {
            // Handle success
            const quotes = [...response.data.docs];

            // If showRandomThree is set to true
            // return only 3 random
            return __randomThree(showRandomThree, quotes)
        })
        .catch((error) => {
            // Handle error
            console.table({ error: `${error}` });
        })
    
    return responseAxios
};

export const getQuoteById = async (id: string) => {
    const responseAxios = await axios.get(`${BASE_URL}/quote/${id}`, {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then(response => {
            // Handle success
            const quote = [...response.data.docs];
            return quote[0]
        })
        .catch(error => {
            // Handle error
            console.table({ error: `${error}` });
        })

    return responseAxios
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* CHAPTER                                                                                       */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

export const getAllChapters = async (showRandomThree = false) => {
    const responseAxios = await axios.get(`${BASE_URL}/chapter`, {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then((response) => {
            // Handle success
            const chapters = [...response.data.docs];

            // If showRandomThree is set to true
            // return only 3 random
            return __randomThree(showRandomThree, chapters)
        })
        .catch((error) => {
            // Handle error
            console.table({ error: `${error}` });
        })
    
    return responseAxios
};

export const getChapterById = async (id: string) => {
    const responseAxios = await axios.get(`${BASE_URL}/chapter/${id}`, {
        headers: {
            'Authorization': `Bearer ${MY_ACCESS_TOKEN}`
        }
    })
        .then(response => {
            // Handle success
            const chapter = [...response.data.docs];
            return chapter[0]
        })
        .catch(error => {
            // Handle error
            console.table({ error: `${error}` });
        })
    
    return responseAxios
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
