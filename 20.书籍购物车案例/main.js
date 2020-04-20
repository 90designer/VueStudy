const app = new Vue({
  el: "#app",
  data() {
    return {
      books: [
        { id: 1, name: "编程艺术", date: "2019-09-18", price: 101, count: 1 },
        {
          id: 2,
          name: "golang实战开发",
          date: "2019-11-18",
          price: 12.33,
          count: 1,
        },
        { id: 3, name: "redis编程", date: "2018-09-18", price: 85.6, count: 1 },
        { id: 4, name: "Vue基础", date: "2020-09-18", price: 94, count: 1 },
      ],
    };
  },
  methods: {
    increment(index) {
      let perPrice = this.books[index].price / this.books[index].count;
      this.books[index].count++;
      this.books[index].price = perPrice * this.books[index].count;
    },
    decrement(index) {
      let perPrice = this.books[index].price / this.books[index].count;
      if (this.books[index].count <= 1) {
        this.books[index].count = 1;
      } else {
        this.books[index].count--;
        this.books[index].price = perPrice * this.books[index].count;
      }
    },
    removeThis: function (index) {
      this.books.splice(index, 1);
      console.log(this.books);
    },
  },
  computed: {
    TotalPrice() {
      //   let count = 0;
      //   for (item of this.books) {
      //     count += item.price;
      //   }
      //   return count;
      //   高阶函数的使用
      return this.books.reduce(function (preVal, nextVal) {
        return preVal + nextVal.price;
      }, 0);
    },
  },
  //过滤器
  filters: {
    showPrice: function (price) {
      return "￥" + price.toFixed(2);
    },
  },
});

/*
 * 高阶函数的使用
 *  filter, map , reduce
 */
const nums = [10, 20, 30, 40, 50];
// 1. filter 函数
let newNums = nums.filter(function (n) {
  return n > 30; // 1. 过滤出大于30的
});
console.log(newNums);

// 2. map
let newNums2 = newNums.map(function (n) {
  return n * 2; // 2. 翻倍
});
console.log(newNums2);

// 3. reduce
let total = newNums2.reduce(function (preVal, n) {
  console.log(preVal + n);
  return preVal + n;
}, 0);
console.log(total);

// 函数式编程
let funcNums = nums
  .filter(function (n) {
    return n > 30; // 1. 过滤出大于30的
  })
  .map(function (n) {
    return n * 2;
  })
  .reduce(function (preVal, n) {
    return preVal + n;
  }, 0);
console.log("函数式编程", funcNums);

let totals = nums
  .filter((n) => n < 100)
  .map((n) => n * 2)
  .reduce((preVal, n) => preVal + n);
console.log("箭头函数", total);
