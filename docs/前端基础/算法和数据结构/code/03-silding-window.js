/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let left = 0,
        right = -1; // 滑动窗口 [left ,right]闭区间
    let res = 0; // 满足条件的最长

    while (left < s.length) {
        if ((right + 1 < s.length) && !map.has(s[right + 1])) {
            let size = map.get(s[right + 1])
            if (size == undefined) {
                size = 1;
            } else {
                size++;
            }
            map.set(s[++right], size);
        } else {
            let size = map.get(s[left])
            map.set(s[left++], size--);
        }
        console.log(map, left, right);
        // 更新
        res = Math.max(res, right - left + 1);
    }

    return res;
};


lengthOfLongestSubstring("abcabcbb");