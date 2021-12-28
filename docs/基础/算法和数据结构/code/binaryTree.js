function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

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

module.exports = {
    root,
    TreeNode
};