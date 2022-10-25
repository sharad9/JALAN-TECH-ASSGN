class Product{
    #name;
    constructor(name){
        this.#name=name;
    }

    get name(){return this.#name;}
    set name(name){ this.#name=name;}
}

class AddOn{
    #name;
        constructor(name){
        this.#name=name;
    }

    get name(){return this.#name;}
    set name(name){ this.#name=name;}
}
class Coffee{
    #product;
    #addOn;
    #price;

    constructor(productName,addOnName,price){
        this.#product = new Product(productName);
        this.#addOn = new AddOn(addOnName);
        this.#price = price;
    }
    get product(){return this.#product;}
    get addon(){return this.#addOn;}
    get price(){return this.#price;}

    set product(productName){this.#product=new Product(productName);}
    set addon(addOnName){this.#addOn=new AddOn(addOnName);}
    set price(price){this.#price=price;}

}

const database={
    coffees:[
        {
            product:'Espresso',
            addon:'Milk',
            price:60
        },{
            product:'Espresso',
            addon:'Cream',
            price:75
        },
        {
            product:'Espresso',
            addon:'Latte',
            price:100
        },
        {
            product:'Cappuccino',
            addon:'Milk',
            price:80
        },
        {
            product:'Cappuccino',
            addon:'Cream',
            price:90
        },
        {
            product:'Cappuccino',
            addon:'Latte',
            price:125
        },
        {
            product:'Latte',
            addon:'Milk',
            price:100
        },
        {
            product:'Latte',
            addon:'Cream',
            price:125
        },
        {
            product:'Latte',
            addon:'Latte',
            price:150
        }
    ]
};

var priceMenu= new Set([]);

for(let index = 0; index<database.coffees.length;index++){
     const coffee = database.coffees[index];
    
     priceMenu.add(new Coffee(coffee.product,coffee.addon,coffee.price));
}


const orders = [['Cappuccino','Latte',12],['Latte','Latte',2]];



for (let index = 0; index < priceMenu.length; index++) {
	const coffee = priceMenu[index].product=='Cappuccino';
}





