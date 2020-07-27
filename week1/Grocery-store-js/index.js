
var groceryCart = ['bacon', 'eggs', 'hasbrowns', 'milk' ]

var groceryItem = {
    item: 'bacon',
    inStock: 40,
    lowStock: false,
    stockOnHand : function () {
        return this.item + " " + this.lowStock;
        
    }
}
var groceryItem = {
    item: 'eggs',
    inStock: 12,
    lowStock: true,
    stockOnHand : function () {
        return this.item + " " + this.lowStock;
        
    }
}
var groceryItem = {
    item: 'hashbrowns',
    inStock: 45,
    lowStock: false,
    stockOnHand : function () {
        return this.item + " " + this.lowStock;
        
    }
}
var groceryItem = {
    item: 'milk',
    inStock: 56,
    lowStock: false,
    stockOnHand : function () {
        return this.item + " " + this.lowStock;
        
    }
}
console.log ('this is my grocery cart');