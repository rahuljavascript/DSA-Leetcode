// 124. Binary Tree Maximum Path Sum
// Hard
// Topics
// premium lock icon
// Companies
// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

 

// Example 1:


// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
// Example 2:


// Input: root = [-10,9,20,null,null,15,7]
// Output: 42
// Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
 

// Constraints:

// The number of nodes in the tree is in the range [1, 3 * 104].
// -1000 <= Node.val <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
    let res = root.val;

    function dfs(root) {
        if (!root) return 0;

        let leftMax = dfs(root.left);
        let rightMax = dfs(root.right);

        leftMax = Math.max(leftMax, 0);
        rightMax = Math.max(rightMax, 0);

        // compute Max Path with split (root.val + leftMax + RightMax)
        res = Math.max(res, root.val + leftMax + rightMax)

        // return Max Path without split
        return root.val + Math.max(leftMax, rightMax);

    }

    dfs(root);
    return res;

};

// The time complexity of this solution is O(n), where n is the number of nodes in the binary tree. This is because we visit each node exactly once during the depth-first search (DFS) traversal.

// The space complexity is O(h), where h is the height of the binary tree. This space is used by the recursion stack during the DFS traversal. In the worst case, for a skewed tree, the height can be equal to the number of nodes (n), leading to a space complexity of O(n). However, for a balanced binary tree, the height would be log(n), resulting in a space complexity of O(log n).