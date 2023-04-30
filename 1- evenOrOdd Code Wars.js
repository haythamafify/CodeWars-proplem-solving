function evenOrOdd(number) {
  if (number % 2 === 0) {
    return `even`;
  } else {
    return `odd`;
  }
}
// function evenOrOdd(number) {
//   return number % 2 === 0 ? "even" : "odd";
// }
console.log(evenOrOdd(2)); // "Even");
console.log(evenOrOdd(7)); // "Odd");
console.log(evenOrOdd(-42)); // "Even");
console.log(evenOrOdd(-7)); // "Odd");
console.log(evenOrOdd(0)); // "Even");
