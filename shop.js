class Product {
	#name;
	constructor(name) {
		this.#name = name;
	}

	get name() { return this.#name; }
	set name(name) { this.#name = name; }
}

class AddOn {
	#name;
	constructor(name) {
		this.#name = name;
	}

	get name() { return this.#name; }
	set name(name) { this.#name = name; }
}
class Coffee {
	#product;
	#addOn;
	#price;

	constructor(productName, addOnName, price) {
		this.#product = new Product(productName);
		this.#addOn = new AddOn(addOnName);
		this.#price = price;
	}
	get product() { return this.#product; }
	get addon() { return this.#addOn; }
	get price() { return this.#price; }

	set product(productName) { this.#product = new Product(productName); }
	set addon(addOnName) { this.#addOn = new AddOn(addOnName); }
	set price(price) { this.#price = price; }

}

const database = {
	coffees: [
		{
			product: 'Espresso',
			addon: 'Milk',
			price: 60
		}, {
			product: 'Espresso',
			addon: 'Cream',
			price: 75
		},
		{
			product: 'Espresso',
			addon: 'Latte',
			price: 100
		},
		{
			product: 'Cappuccino',
			addon: 'Milk',
			price: 80
		},
		{
			product: 'Cappuccino',
			addon: 'Cream',
			price: 90
		},
		{
			product: 'Cappuccino',
			addon: 'Latte',
			price: 125
		},
		{
			product: 'Latte',
			addon: 'Milk',
			price: 100
		},
		{
			product: 'Latte',
			addon: 'Cream',
			price: 125
		},
		{
			product: 'Latte',
			addon: 'Latte',
			price: 150
		}
	]
};

var menu = new Set([]);

for (let index = 0; index < database.coffees.length; index++) {
	const coffee = database.coffees[index];

	menu.add(new Coffee(coffee.product, coffee.addon, coffee.price));
}


const orders = [{ productName: 'Cappuccino', addOnName: 'Latte', count: 1},
	{ productName: 'Latte', addOnName: 'Cream', count:  45},
	{ productName: 'Espresso', addOnName: 'Milk', count: 1 }];



const getTotalPrice =()=>{
	var totalSum = 0;

	for (let order of orders) {
		for (let item of menu) {
			if (item.product.name == order.productName && item.addon.name == order.addOnName) {
				totalSum += item.price * order.count;
			};
		}
	}
	return totalSum;
}

console.log(getTotalPrice());

