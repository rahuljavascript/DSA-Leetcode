/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Time & Space Complexity

// Time complexity: O(m × n log n)
// Space complexity: O(m × n)

// Where:

// m = number of strings.
// n = length of the longest string.

// Explanation:

// Processing each of the m strings takes O(n log n) time (for example, if each string is sorted), giving a total time complexity of O(m × n log n).
// Storing information for all strings requires O(m × n) additional space in the worst case.

var groupAnagrams = function(strs) {
    const obj = {};
    for(let s of strs) {
        const sortedS = s.split('').sort().join('');
        if(!obj[sortedS]) {
            obj[sortedS] = [];
        }
        obj[sortedS].push(s)
    }
    return Object.values(obj) // This itself returns a array Object.values(obj)
};
// Time COmplexity: O(m × n log n)
// Space Complexity: O(m × n)

// *************************************************************************

// Time & Space Complexity
// Time complexity: O(m × n)
// Space complexity: O(m) auxiliary space, excluding the returned output.
// Total space complexity: O(m × n) if the output groups are included.

// Where:

// m = number of strings.
// n = length of the longest string.

// Explanation:

// Each of the m strings is processed once, and building its character frequency representation takes O(n) time, resulting in an overall time complexity of O(m × n).
// The hash map stores one entry per distinct group of anagrams, requiring O(m) auxiliary space in the worst case.
// The returned result contains all characters from all input strings, so counting the output increases the total space usage to O(m × n).

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const res = {};
    for (let s of strs) {
        const count = new Array(26).fill(0);
        for (let c of s) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }
        const key = count.join(',');
        if (!res[key]) {
            res[key] = [];
        }
        res[key].push(s);
    }
    return Object.values(res);
};