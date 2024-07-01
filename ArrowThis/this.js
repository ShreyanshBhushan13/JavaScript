//THIS REFER CURRENT CONTEXT
/*
const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
       
    }

}*/
 user.welcomeMessage()//hitesh, welcome to website
 /* //{
            username: 'hitesh',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]        
          }*/
 user.username = "sam" 
user.welcomeMessage();
/*sam , welcome to website
          {
            username: 'sam',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]        
          }*/



//++++++++++++++++++++++++++++++
const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        
    }

}

console.log(this);//{} 

//++++++++++++++++++++++++++++++

// WE ARE NOT ABLE TO USE CONSOLE.LOG(THIS) INSIDE A FUNCTION LIKE IN A OBJECT
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// } 
// chai()

//++++++++++++++++++++++++++++++++++++

//WE ARE NOT ABLE TO USE CONSOLE.LOG(THIS) INSIDE A FUNCTION LIKE IN A OBJECT


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

//+++++++++++++++++++++++++++++++++++

// THIS IS AN ARROW FUNCTION
//WE ARE NOT ABLE TO USE CONSOLE.LOG(THIS) INSIDE A FUNCTION LIKE IN A OBJECT

/*const chai =  () => {
    let username = "hitesh"
    //console.log(this.username);// undefined
    console.log(this);//{}
}
chai();
*/
