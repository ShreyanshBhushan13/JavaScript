// THIS IS AN ARROW FUNCTION
//WE ARE NOT ABLE TO USE CONSOLE.LOG(THIS) INSIDE A FUNCTION LIKE IN A OBJECT

/*const chai =  () => {
    let username = "hitesh"
    //console.log(this.username);// undefined
    console.log(this);//{}
}
chai();
*/

//+++++++++++++++++++++++++++++++++++
/*
if curly bracket is used return parensthis is must
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4));//7
*/
//+++++++++++++++++++++++++++++++++

// if curly bracket is not used return parensthis is not must
// const addTwo = (num1, num2) => ( num1 + num2 )
//console.log(addTwo(3, 4));//7

//++++++++++++++++++++++++++

// const addTwo = (num1, num2) =>  num1 + num2
//console.log(addTwo(3, 4));//7

//+++++++++++++++++++++++++++++++++++++

// TO RETURN OBJECT IN ARROW FUNCTION PARANTHEIS IS MUST ({ }) eg.({username: "hitesh"})  
/*
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))
*/

//+++++++++++++++++++++++++++++++++