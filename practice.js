function foo(){
    console.log('foo');
    bar();
}


function bar(){
    console.log('bar2');
    // foo();
}

// foo();

function make_avg(num1, num2, num3){
    var sumOfall = num1 + num2 + num3;
    var avg = sumOfall / 3;
    var avgFixed = avg.toFixed(0);
    var avgInt = parseFloat(avgFixed);
    console.log(avgInt);
}

// make_avg(5,4,2);




// sum and average an array;

var products = [20, 20, 30, 40, 50, 40];

function make_avg2(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

var total = make_avg2(products);
var total_avg = total / products.length;
// console.log(total_avg);




function odd_even(a){
    if(a%2 == 0){
        console.log('This value is even.');
    }
    else{
        console.log('This value is odd.');
    }
}

// odd_even(29);
var color = 'Green';
function check_Traffic(a){
    switch(a){
        case 'Green':
        console.log('You can go.');
        break;

        case 'Yellow':
        console.log('Slow down pls');
        break;

        case 'Red':
            console.log('Stop');
            break;
    }
}

check_Traffic(color);




