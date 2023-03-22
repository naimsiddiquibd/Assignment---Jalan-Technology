
const arr = [1, 3, 2, 5, 7, 11];
let i = 3;
[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    
console.log(arr);
// 1, 2, 3, 5, 7, 11 --> initial
// 1, 3, 2, 5, 7, 11 --> i=1
// 1, 3, 2, 7, 5, 11 --> i=3

  