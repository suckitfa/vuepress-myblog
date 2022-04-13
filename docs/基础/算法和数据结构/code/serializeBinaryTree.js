const { root, TreeNode } = require('./binaryTree');


/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const res = [];
    serializeHelper(root, res);
    return res.join(',');
};

// 层次遍历
function serializeHelper(root, res) {
    if (root == null) return ['#'];

    const queue = [];
    queue.push(root);

    while (queue.length !== 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            const cur = queue.shift();
            if (cur === null) {
                res.push('#');
            } else {
                res.push(`${cur.val}`);
                queue.push(cur.left);
                queue.push(cur.right);
            }
        }
    }
    return res;
}
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const nodes = data.split(',');
    return deserializeHelper(nodes);
};

function deserializeHelper(nodes) {
    if (nodes.length === 0) return null;
}


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

const res = serialize(root);
console.log(res)