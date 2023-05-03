var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
console.log(countSheeps(array1));
console.log(countSheeps(null));
console.log(countSheeps());

// function countSheeps(arrayOfSheep) {
//   if (arrayOfSheep === undefined || arrayOfSheep === null) {
//     return;
//   }
//   let x = 0;
//   // TODO May the force be with you
//   for (let index = 0; index < arrayOfSheep.length; index++) {
//     if (arrayOfSheep[index] == true) {
//       x += arrayOfSheep[index];
//     }
//   }
//   return x; // `There are ${x} sheeps in total`;
// }
// function countSheeps(arrayOfSheep) {
//   if (arrayOfSheep === undefined || arrayOfSheep === null) {
//     return;
//   }
//   let x = 0;
//   arrayOfSheep.map((m) => {
//     if (m == true) {
//       x++;
//     }
//   });

//   return x; // `There are ${x} sheeps in total`;
// }
//, 17, "There are 17 sheeps in total"
// function countSheeps(arrayOfSheep) {
//   if (arrayOfSheep === undefined || arrayOfSheep === null) {
//     return;
//   }
//   let x = 0;
//   arrayOfSheep.forEach((element) => {
//     if (element == true) {
//       x++;
//     }
//   });

//   return x; // `There are ${x} sheeps in total`;
// }
// function countSheeps(arrayOfSheep) {
//   if (arrayOfSheep === undefined || arrayOfSheep === null) {
//     return;
//   }

//   return arrayOfSheep.reduce((acc, current) => acc + current);

//   // `There are ${x} sheeps in total`;
// }
function countSheeps(arrayOfSheep) {
  if (arrayOfSheep === undefined || arrayOfSheep === null) {
    return;
  }
  let x = 0;
  return arrayOfSheep.filter((e) => e == true).length;
}
