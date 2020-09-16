/* - - - - - - - - - - - - - - - - - - - - - -*/
/*                   UTILS                    */
/* - - - - - - - - - - - - - - - - - - - - - -*/

/**
 * @param showRandomThree
 * ```
 * if set to true
 * ```
 * return 3 random
 * ```
 * else
 * ```
 *  return all
 * @param arr
 * ```
 * iterable to get 3 random OR all
 * ```
 */
export const randomThree = (showRandomThree: boolean = false, arr: any) => {
    const __response = [];

    if (showRandomThree === true) {
        // If function parameter is set to true when function is executed
        for (let i = 0; i < 3; i++) {
            // Take random number out of response arr
            const random: number = Math.floor(Math.random() * arr.length);
            __response.push(arr[random]);
        }
    } else {
        // Put all arr into response
        arr.forEach(el => {
            __response.push(el);
        });
    }

    return __response;
};
