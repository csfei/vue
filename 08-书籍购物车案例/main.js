const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 185.00,
                count: 1
            },{
                id: 2,
                name: '《算法导论》',
                date: '2006-9',
                price: 25.00,
                count: 1
            },{
                id: 3,
                name: '《算法导论》',
                date: '2006-9',
                price: 5.00,
                count: 1
            },{
                id: 4,
                name: '《算法导论》',
                date: '2006-9',
                price: 835.00,
                count: 1
            },
        ]
    },
    methods:{
        //价格的两位数展示  method one
        getFinalPrice(price) {
            return '￥' + price.toFixed(2)
        },
        increment(index) {
            this.books[index].count++
        },
        decrement(index) {
            this.books[index].count--
        },
        removeHandle(index) {
            this.books.splice(index,1)
        }
    },
    computed: {
       totalPrice() {
           let totalPrice = 0;
           //普通for循环
           /*for (let i = 0; i < this.books.length; i++) {
               totalPrice += this.books[i].count * this.books[i].price;
           }*/
           //for(let i of this.books)
          /* for(let i in this.books){
               totalPrice += this.books[i].count * this.books[i].price;
           }*/
           //for(let i in this.books)
           for(let item of this.books){
               totalPrice += item.count * item.price;
           }
           return totalPrice;


       }
    },

    filters:{
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    }
})