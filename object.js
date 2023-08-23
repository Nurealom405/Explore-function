var mobile = {
    color: 'black',
    price: 7000,
    storage: '64gb',
    camera: '7mp'
}
// console.log(mobile);
mobile.price = 9000;
// console.log(mobile);



var shoppingCart = {
    books: 3,
    sunglass: 1, 
    keyboard: 5,
    mouse: 1,
    pen: 25
}
// 1 when you know the specific property name, use dot notaiton to get the property value
var penCount = shoppingCart.pen;
// alternative system
// 2 when you know the specific property name, use dot notaiton to get the property value
var penCount2 = shoppingCart['pen'];

// 3 
var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
// console.log(propertyValue);

// ***********************************


var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);

// console.log(shoppingCart);
// console.log(penCount);
// console.log(properties);
// console.log(propertyValues);




// set property values

console.log(shoppingCart);
// 1.
shoppingCart.mouse = 15;
console.log(shoppingCart);
// 2.
shoppingCart['mouse'] = 20;
console.log(shoppingCart);
// 3.
shoppingCart[propertyName] = 89;
console.log(shoppingCart);

