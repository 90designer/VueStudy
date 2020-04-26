// ComonJs引入
const { add, cc } = require("./js/mathUtil");
console.log(add(12, 11));
console.log(cc(12, 11));

// ES6引入
import { name, age } from "./js/info";
console.log(name);

// 依赖 css文件
require("./css/base.css");
import css from "./css/nomar.css";

// 依赖 less文件
import less from "./css/less.less";

import Vue from "vue";

const app = new Vue({
  el: "#app",
  data() {
    return {
      msg: "哈哈哈",
    };
  },
});
