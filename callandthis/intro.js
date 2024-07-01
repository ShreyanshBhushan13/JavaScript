function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}
function createUser(username, email, password){
    SetUsername.call(this, username)// .call is used to give call and to hold reference
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);