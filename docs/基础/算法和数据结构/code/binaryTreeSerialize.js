// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

var serialize = function(root) {
    const res = []; // 存储遍历的结果
    serializeHelper(root, res)
    return res.join(',');
};

function serializeHelper(root, res) {
    if (root == null) {
        res.push("#");
        return;
    }

    res.push(`${root.val}`);
    serializeHelper(root.left, res);
    serializeHelper(root.right, res);
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let nodes = data.split(",");
    console.log(nodes);
    return deserializeHelper(nodes);
};

function deserializeHelper(nodes) {
    if (nodes.length === 0) return null;
    // 获取第一个
    let first = nodes.shift();
    // 是否空节点
    if (first === '#') return null;

    let root = new TreeNode(parseInt(first));
    root.left = deserializeHelper(nodes);
    root.right = deserializeHelper(nodes);
    return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

const root = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null,
    },
    right: {
        val: 3,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    }
}
const serialString = serialize(root)
const tree = deserialize(serialString)
console.log(tree);