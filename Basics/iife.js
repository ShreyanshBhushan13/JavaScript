// Immediately Invoked Function Expressions (IIFE)
// to execute easily and to remove pollution due to global scope variable

//++++++++++++++++++++++++++++++
/*
function chai(){
    
    console.log(`DB CONNECTED`);
}
  chai();
//++++++++++++++++++++++++++++++++++++++++++++
// ({}) => where function definition is written , ()=> where function parameter is written

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})()

//++++++++++++++++++++++++++++++++++++++++++++++
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED two `);
})()*/
//+++++++++++++++++++++++++++++++++++

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);   //DB CONNECTED
   
})();

( () => {
    console.log(`DB CONNECTED TWO `);  //DB CONNECTED TWO 
} )()

//+++++++++++++++++++++++++++++++++++++++++++++++++++
/*
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();// ; is required when two iife function is written together so we use (;) to separate them

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')*/