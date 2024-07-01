// stack(primitive) creates copy(pass by value type)
//heap(non-primitive) creates reference(pass by  reference type)

/*
STACK
let name="shreyansh bhushan"
let newname=name;

newname="shreyansh";
console.log(newname);// shreyansh
console.log(name);shreyansh bhushan
*/


//HEAP
let userone={
    email:"shreysnd@",
    upi:"eheje",
};

let usertwo=userone;
    usertwo.email="shreyansh@";
    usertwo.upi="eueheh";

    console.log(usertwo);
    // both will be same
    console.log(userone);

