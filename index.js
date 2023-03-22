const shuffle = (arr) => {
  // Sorting in ascending order
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length - 1; i += 2) {
    // Swapping - from the 2nd element
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  return arr;
};

const arr = [2, 1, 5, 3, 11, 7];
const shuffledArray = shuffle(arr);
console.log(shuffledArray);

// Program scenario
// 2, 1, 5, 3, 11, 7 --> initial array
// 1, 2, 3, 5, 7, 11 --> sorted array
// 1, 3, 2, 5, 7, 11 --> i=1
// 1, 3, 2, 7, 5, 11 --> i=3
// Naim Siddiqui, naimsiddiqui@gmail.com
