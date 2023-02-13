const cart = {
	items: [],
	totalPrice: 0,
	count: 0,

get totalPrice() {
    return this.calculateItemPrice();
},

	add(name,price,number = 1) {
		const product = {name,price,number};
		this.items.push(product);
	
		
	},
	increaseCount(numb) {
		return this.count + numb;
	},

	calculateItemPrice() {
    return this.items.reduce((acc, {price, number}) =>
      acc + price * number, 0);
		
  },

	clear() {
		this.items = [];
    this.count = 0;
    this.discount = 0;
		
	},
	print() {
		console.log(`${JSON.stringify(this.items) }`)
		console.log(`Общая сумма: ${this.totalPrice}`)
	},
};

const keys = Object.keys(cart)
console.log(keys);
cart.add('Телевизор', 15600, 2);
cart.add('Холодильник', 100000, 5);
// cart.clear()//

cart.print();