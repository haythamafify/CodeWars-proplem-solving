// function positiveSum(arr) {
//   let result = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > 0) {
//       result += arr[index];
//     }
//   }
//   return result;
// }
function positiveSum(arr) {
  return arr.filter((p) => p > 0).reduce((a, b) => a + b, 0);
}
console.log(positiveSum([1, 2, 3, 4, 5])); //,15);
console.log(positiveSum([1, -2, 3, 4, 5])); //,13);
console.log(positiveSum([])); //0);
console.log(positiveSum([-1, -2, -3, -4, -5])); //,0);
console.log(positiveSum([-1, 2, 3, 4, -5])); //,9);
