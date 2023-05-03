// function sumArray(array) {
//   if (
//     array === null ||
//     array === undefined ||
//     array.length === 0 ||
//     array.length <= 2
//   ) {
//     return 0;
//   } else {
//     let arraysort = array.sort((a, b) => a - b).slice(1, -1);
//     const minNumber = Math.min(...arraysort);
//     const maxNumber = Math.max(...arraysort);

//     let result = 0;

//     for (let index = 0; index < arraysort.length; index++) {
//       result += arraysort[index];
//     }

//     return result;
//   }
// }

function sumArray(array) {
    if (
      array === null ||
      array === undefined ||
      array.length === 0 ||
      array.length <= 2
    ) {
      return 0;
    } else {
      const result = array
        .sort((a, z) => a - z)
        .slice(1, -1)
  
        .reduce((acc, current) => acc + current, 0);
  
      return result;
    }
  }
  
  console.log(sumArray(null)); //, 0);
  console.log(sumArray([])); //, 0);
  console.log(sumArray([3])); //, 0);
  console.log(sumArray([3, 5])); //, 0);
  console.log(sumArray([6, 2, 1, 8, 10])); //, 16);
  console.log(sumArray([0, 1, 6, 10, 10])); //, 17);
  console.log(sumArray([-6, -20, -1, -10, -12])); //, -28);
  console.log(sumArray([-6, 20, -1, 10, -12])); //, 3);
  