function repeatStr(n, s) {
  // return s.repeat(n);
  let r = "";
  for (let index = 0; index < n; index++) {
    r += s;
  }
  return r;
}

console.log(repeatStr(3, "*")); //, "***");
console.log(repeatStr(5, "#")); //, "#####");
console.log(repeatStr(2, "ha ")); //, "ha ha ");
