// singleton

// object literals
const mySym=Symbol("key1");// declaring symbol
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",// IMPORTANT sq bracket used for refeering symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // IMPORTANT

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)// used to freeze
JsUser.email = "hitesh@microsoft.com"// no change
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greeting();
console.log(JsUser.greetingTwo());
 