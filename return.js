function add(number1, number2){
    console.log(number1, number2);
    var sumOfNumber = number1 + number2;
    // console.log(sumOfNumber);
    // return sumOfNumber;
    return sumOfNumber;
    
}

// add(10, 20);
// var total = add(80, 20);
// console.log('total', total);

function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myTaka = 120;
var singaras = bringSingara(myTaka);
console.log('Eating singaras: ', singaras);


