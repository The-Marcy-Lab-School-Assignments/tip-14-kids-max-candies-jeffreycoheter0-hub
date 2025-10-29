/**
 * Kids With the Greatest Number of Candies
 *
 * Given an integer array `candies` and an integer `extraCandies`, return a boolean
 * array where each element indicates whether the corresponding kid can have the
 * greatest number of candies if given all `extraCandies`.
 *
 * @param {number[]} candies
 * @param {number} extraCandies
 * @returns {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {

    /* 
    We create a new var 'greatest' that is able to be changed at anytime.
    We then use the 'Math.max()' method to find the highest
    number in the array ('s - the spead operator '...' allows us to
    check an infinite ammount of arrays)
    */
    let greatest = Math.max(...candies);

    /* 
    We create a new array but want to keep the same length, so '.map()' is 
    the perfect method.
    We look through the elements in the origianl 'candies' array, and check if they are
    greater than or equal too the 'greatest' number in the array.
    We then change the elements in the new array with booleans, 'true' or 'false'
    */
    return candies.map((el) => el + extraCandies >= greatest);
}

module.exports = kidsWithCandies;