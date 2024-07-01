
//DEFINTION OF FUNCTION
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName() == it is the reference

function addTwoNumbers(number1, number2){// (number1, number2)paramter

     console.log(number1 + number2);}
     addTwoNumbers(4,8);//(4,8) argument


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     //TSRS
     function addTwoNumbers(number1, number2){

        // let result = number1 + number2
        // return result
        return number1 + number2
    }

    const result = addTwoNumbers(3, 5)// function is called from here

// console.log("Result: ", result); result=undefined
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==



function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

 console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage()) if no value if passed then it will give undefined just logged in