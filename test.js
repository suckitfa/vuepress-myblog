let arr =  [1,2,2,4,null,null,'3','abc',3,5,4,1,2,2,4,null,null,'3','abc',3,5,4]

function solutionOne(arr = []) {
    let obj = {}
    for(let i = 0; i< arr.length;i++){
        let item = arr[i]
        // 说明已经在obj中存在了
        if(obj[item] !== undefined) {
            // 从i开始删除1个元素
            arr.splice(i,1);
            i--; // 防止数组塌陷
            continue
        }
        obj[item] = item
    }
    return arr
}

function solutionTwo(arr = []) {
    let obj = {}
    for(let i = 0; i < arr.length; i++) {
        let item = arr[i]
        if(obj[item] !== undefined) {
            // 交换
            arr[i] = arr[arr.length -1]
            arr.length --;
            i--; // 防止数组塌陷
            continue
        }
        obj[item] = item
    }
}

function solutionThree(arr = []) {
    // indexOf返回item第一次出现的位置
    return arr.filter((item,index)=> arr.indexOf(item)===index)
}


function  solutioniFour(arr = []) {
    let obj = {}
    arr.filter(item => obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true))
}

function solutionFive(arr = []) {
    return arr.reduce((accu,cur)=>{
        return accu.includes(cur) ? accu:accu.concat(cur);
    },[])
}

function solutionSix(arr = []) {
    return [...new Set(arr)]
}
// console.log(solutionOne(arr))
// console.log(solutionTwo(arr))
// console.log(solutionThree(arr))
// console.log(solutionFive(arr))

 const euros = [29.76, 41.85, 46.5];
 const average = euros.reduce((total,amount,index,array)=>{
     total += amount
     if(index === array.length - 1) {
         console.log(array)
         return total / array.length
     } else {
         return total;
     }
 })
