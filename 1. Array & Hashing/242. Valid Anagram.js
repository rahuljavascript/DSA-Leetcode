// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 
// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const obj1 = {};
    const obj2 = {};
    if (s.length !== t.length) {
        return false;
    }
    for (let i=0; i<s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }
    for(const key in obj1) {
        if(obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
            
};

// Using Map instead of Object

var isAnagramUsingMap = function (s, t) {
    if (s.length === t.length) {
        let map = new Map();
        for (let i = 0; i < s.length; i++) {
            map.set(s[i], (map.get(s[i]) || 0) + 1);
            map.set(t[i], (map.get(t[i]) || 0) - 1);
        }
        
        for (let val of map.values()) {
            if (val !== 0) {
                return false
            }
        }
        return true
    }
    return false;
};