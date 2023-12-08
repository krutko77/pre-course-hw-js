// code

let str = "zzzzyzz";
const arr = str.split("");

let letter = arr.includes("y");

let answer = (letter == true) ? "нашел" : "заблудился";

console.log(answer);