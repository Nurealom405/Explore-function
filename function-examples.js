// function functionName (parameters){
//     // body fucntion
//     // return
// }

// var returnValue = functionName(parameters value);


function getTotal (assignmetn1, assignmetn2, assignmetn3){
    const total = assignmetn1 + assignmetn2 + assignmetn3;
    const average = total / 3;
    return average;
}

const assignmetn1Marks = 60;
const assignmetn2Marks = 55;
const assignmetn3Marks = 52;

var  myAverage = getTotal(assignmetn1Marks, assignmetn2Marks, assignmetn3Marks);

console.log('My average so far: ', myAverage)

