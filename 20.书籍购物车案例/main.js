const app = new Vue({
    el:"#app",
    data() {
        return {
            books:[
                { id: 1, name: "编程艺术", date: "2019-09-18",price: 101,count:1 },
                { id: 2, name: "golang实战开发", date: "2019-11-18", price: 12.33 ,count:1},
                { id: 3, name: "redis编程",  date: "2018-09-18",price: 85.6,count:1 },
                { id: 4, name: "Vue基础", date: "2020-09-18", price: 94 ,count:1},
            ]
        }
    },
    methods: {
       increment(index){
           let perPrice = this.books[index].price/this.books[index].count; 
           this.books[index].count++;
           this.books[index].price =  perPrice*this.books[index].count;
       },
       decrement(index){
        let perPrice = this.books[index].price/this.books[index].count; 
        if(this.books[index].count <= 1){
            this.books[index].count = 1;
        }else{
            this.books[index].count--;
            this.books[index].price =  perPrice*this.books[index].count;
        }
       },
       removeThis: function (index){
            this.books.splice(index,1)
            console.log(this.books)
       }
    },
    computed: {
        TotalPrice(){
            let count = 0;
            for(item of this.books){
                count += item.price;
            }
            return count;
        },
    },
    //过滤器
    filters:{
        showPrice: function (price){
            return "￥"+price.toFixed(2);
        }
    }
});