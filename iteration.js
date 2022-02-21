const names = ["Selma","Ted","Mike","Sam","Sharon","Marvin"];
const startWithS = name => name.charAt(0)==="S";
const sNames = names.filter(startWithS);

console.log(sNames);

const numbers = [1,2,3,4,5,6,0];
const no3 = numbers.filter(number => number==2);
console.log(no3);