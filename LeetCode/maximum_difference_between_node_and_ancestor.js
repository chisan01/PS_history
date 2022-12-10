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
 var maxAncestorDiff = function (root) {
  result = 0
  searchCaseWhenABiggerThanB(root, root.val, root.val)
  searchCaseWhenASmallerThanB(root, root.val, root.val)
  return result
};

var result

var searchCaseWhenABiggerThanB = function (root, A, B) {
  result = Math.max(result, A - B)
  if (root == null) return;
  if (root.val > A) A = root.val
  if (root.val < B) B = root.val
  searchCaseWhenABiggerThanB(root.left, A, B)
  searchCaseWhenABiggerThanB(root.right, A, B)
};

var searchCaseWhenASmallerThanB = function (root, A, B) {
  result = Math.max(result, B - A)
  if (root == null) return;
  if (root.val > B) B = root.val
  if (root.val < A) A = root.val
  searchCaseWhenASmallerThanB(root.left, A, B)
  searchCaseWhenASmallerThanB(root.right, A, B)
};