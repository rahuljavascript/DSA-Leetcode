// 297. Serialize and Deserialize Binary Tree
// Hard
// Topics
// premium lock icon
// Companies
// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

 

// Example 1:


// Input: root = [1,2,3,null,null,4,5]
// Output: [1,2,3,null,null,4,5]
// Example 2:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -1000 <= Node.val <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    const res = [];
    function serializeDFS(node) {
        if (!node) {
            res.push('N');
            return;
        }
        res.push(node.val.toString());
        serializeDFS(node.left);
        serializeDFS(node.right);
    }
    serializeDFS(root)
    return res.join(',');

};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    let vals = data.split(',');
    let i = 0;
    function deserializeDFS() {
        if (vals[i] === 'N') {
            i++;
            return null
        }
        const root = new TreeNode(parseInt(vals[i]));
        i++;
        root.left = deserializeDFS(vals[i]);
        root.right = deserializeDFS(vals[i]);
        return root
    }
    return deserializeDFS(vals[0]);


};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// Time Complexity: O(n) for both serialize and deserialize, where n is the number of nodes in the tree. Each node is visited once during serialization and deserialization.
// Space Complexity: O(n) for both serialize and deserialize, as we store the serialized string and the recursive call stack can go up to the height of the tree in the worst case.