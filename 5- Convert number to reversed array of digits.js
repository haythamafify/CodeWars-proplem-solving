function digitize(n) {
  //code here
  return Array.from(String(n))
    .reverse()
    .map((e) => parseInt(e));
}

console.log(digitize(35231)); //,[1,3,2,5,3]
console.log(digitize(0)); //,[0]
