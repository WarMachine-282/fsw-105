
var groceryItem = {
    item: 'bacon',
    groceryCart: ['bacon', 'eggs', 'hasbrowns', 'milk'],
    inStock: 40,
    lowStock: false,
    stockOnHand : function () {
        return this.item + " " + this.lowStock;
        
    }
}
var groceryItemTwo = {
    item: 'eggs',
    groceryCart: ['bacon', 'eggs', 'hasbrowns', 'milk'],
    inStock: 12,
    lowStock: true,
    stockOnHand : function () {
        return this.item + " " + this.lowStock;
        
    }
}
var groceryItemThree = {
    item: 'hashbrowns',
    groceryCart: ['bacon', 'eggs', 'hasbrowns', 'milk'],
    inStock: 45,
    lowStock: false,
    stockOnHand : function () {
        return this.item + " " + this.lowStock;
        
    }
}
var groceryItemFour = {
    item: 'milk',
    groceryCart: ['bacon', 'eggs', 'hasbrowns', 'milk'],
    inStock: 56,
    lowStock: false,
    stockOnHand : function () {
        return this.item + " " + this.lowStock;
        
    }
}
var groceryCartsArray = [groceryItem, groceryItemTwo, groceryItemThree, groceryItemFour];
 console.log (groceryCartsArray);

//  var arr= ["1","2","3"]
// function getFirstValue(array) {
// 	return(array[array.length - 1])
// }
// console.log(getFirstValue(arr))