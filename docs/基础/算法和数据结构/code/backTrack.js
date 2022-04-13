const _permute = string => {
    const result = [];
    const track = [];
    const stringArray = string.split('');
    // 补全代码
    function backTrack(stringArray, track) {
        if (track.length === stringArray.length) {
            result.push(track.slice());
            return;
        }

        for (let i = 0; i < stringArray.length; i++) {
            const char = stringArray[i];
            // 递归前选择,避免重复选择
            if (track.indexOf(char) !== -1) continue;
            track.push(char);
            backTrack(stringArray, track);
            // 递归后不选
            track.pop();
        }
    }
    backTrack(stringArray, track);
    return result.map(item => item.join(''));
}


const res = _permute('abc')
console.log(res)