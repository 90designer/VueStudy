function add(num1, num2) {
  return num2 + num1;
}

function cc(n1, n2) {
  return n1 * n2;
}

// 模块化开发的规范
//  1. CommonJs
module.exports = {
  add,
  cc,
};
