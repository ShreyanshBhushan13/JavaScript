//++++++++++++++++++++++++++++++++++++++++
/*
function calculateCartPrice( ...num1){
    return num1
}

 //console.log(calculateCartPrice(200, 400, 500, 2000))  [ 200, 400, 500, 2000 ]
*/



//++++++++++++++++++++++++++++++++++++++
 //function calculateCartPrice(val1, val2, ...num1){
   // return num1
//}

 //console.log(calculateCartPrice(200, 400, 500, 2000)) [ 500, 2000 ]

 //++++++++++++++++++++++++++++++++++

//FUNCTION IN OBJECTS
 const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
 //handleObject(user)  function call

/*handleObject({
    username: "sam",
    price: 399
})*/

//++++++++++++++++++++++++++++++++++++++

//FUNCTION IN ARRAY
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));  
console.log(returnSecondValue([200, 400, 500, 1000]));