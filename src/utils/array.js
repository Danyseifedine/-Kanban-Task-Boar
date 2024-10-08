/**
 * Arr - A sleek utility class for array operations
 * 
 * Provides powerful methods for array manipulation, optimized for performance and ease of use.
 * Perfect for handling arrays of objects with unique identifiers.
 * 
 * @class
 */
export default class Arr {
    /**
     * Removes an item from an array based on its key
     * @param {Array} arr - The source array
     * @param {*} val - The value to match
     * @param {string} [key="id"] - The key to match against
     * @returns {Array} New array with the item removed
     */
    static remove = (arr, val, key = "id") => arr.filter(item => item[key] !== val);

    /**
     * Updates an item in an array
     * @param {Array} arr - The source array
     * @param {*} val - The value to match
     * @param {Object} newData - The new data to apply
     * @param {string} [key="id"] - The key to match against
     * @returns {Array} New array with the updated item
     */
    static update = (arr, val, newData, key = "id") =>
        arr.map(item => item[key] === val ? { ...item, ...newData } : item);

    /**
     * Adds a new item to an array
     * @param {Array} arr - The source array
     * @param {*} newItem - The new item to add
     * @returns {Array} New array with the added item
     */
    static add = (arr, newItem) => [...arr, newItem];

    /**
     * Finds an item in an array
     * @param {Array} arr - The array to search
     * @param {*} val - The value to find
     * @param {string} [key="id"] - The key to match against
     * @returns {*} The found item or undefined
     */
    static find = (arr, val, key = "id") => arr.find(item => item[key] === val);

    /**
     * Sorts an array of objects by a specified field
     * @param {Array} arr - The array to sort
     * @param {string} field - The field to sort by
     * @param {boolean} [asc=true] - Sort in ascending order
     * @returns {Array} New sorted array
     */
    static sort = (arr, field, asc = true) =>
        [...arr].sort((a, b) => (asc ? 1 : -1) * (a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0));

    /**
     * Groups an array of objects by a specified field
     * @param {Array} arr - The array to group
     * @param {string} field - The field to group by
     * @returns {Object} Grouped object
     */
    static group = (arr, field) =>
        arr.reduce((groups, item) => ((groups[item[field]] ??= []).push(item), groups), {});

    /**
     * Removes duplicate items from an array
     * @param {Array} arr - The array to deduplicate
     * @param {string} [key] - Optional key for object arrays
     * @returns {Array} New array with duplicates removed
     */
    static unique = (arr, key) =>
        key ? [...new Map(arr.map(item => [item[key], item])).values()] : [...new Set(arr)];

    /**
     * Chunks an array into smaller arrays
     * @param {Array} arr - The array to chunk
     * @param {number} size - The size of each chunk
     * @returns {Array} Array of chunks
     */
    static chunk = (arr, size) =>
        Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, (i + 1) * size));

    /**
     * Flattens a nested array
     * @param {Array} arr - The array to flatten
     * @returns {Array} Flattened array
     */
    static flatten = (arr) => arr.flat(Infinity);

    /**
     * Shuffles an array
     * @param {Array} arr - The array to shuffle
     * @returns {Array} New shuffled array
     */
    static shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

    /**
     * Moves an item to a new state/category
     * @param {Array} arr - The source array
     * @param {*} movedItem - The ID of the item to move
     * @param {string} newState - The new state/category
     * @param {string} [idKey="id"] - The key to use as ID
     * @param {string} [stateKey="state"] - The key to use as state/category
     * @returns {Array} New array with the item moved
     */
    static moveItem = (arr, movedItem, updates, key = "id") =>
        arr.map(item =>
            item[key] === movedItem ? { ...item, ...updates } : item
        );
}