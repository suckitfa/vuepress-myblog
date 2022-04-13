/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        map[s[i]] === undefined ? map[s[i]] = 1 : map[s[i]]++;
    }
    for (let i = 0; i < t.length; i++) {
        map[t[i]] === undefined ? null : map[t[i]]--
    }
    map.forEach((key, value) => {
        if (value !== 0) return false;
    })
    return true;
};