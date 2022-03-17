function insertionSort(arr) {
    const arrLength = arr.length;
    if (arrLength < 2) return;
    for(let i = 1; i < arrLength; i++ ) {
        let tmp = arr[i]
        let j = i -1;
        while(j >= 0) {
            if (tmp < arr[j]) {
                arr[j+1] = arr[j];
                j = j -1;
            } else {
                break;
            }
        }
        arr[j+1] = tmp;
    }
}

let arr = [6,5,4,3,2,1]
insertionSort(arr)
console.log(arr);