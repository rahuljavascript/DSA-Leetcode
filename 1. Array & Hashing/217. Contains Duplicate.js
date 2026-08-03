// 217. Contains Duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    const set = new Set();
    for(let i of nums) {
        if(set.has(i)){
            return true;
        }
        set.add(i);
    }
    return false;
};

// 2nd Ways ////////////////////////////////////////////

var containsDuplicateBySetLength = function(nums) {
    const set = new Set(nums);
    if(set.size < nums.length) {
        return true;
    }
    return false;
};