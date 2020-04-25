import { flag } from "aaa.js";
var name = "AA";
flag = false;
function sum(num1, num2) {
  return num1 + num2;
}

if (flag) {
  console.log(sum(20, 30));
  console.log(name);
}
