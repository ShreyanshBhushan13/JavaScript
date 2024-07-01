//let score=33;
//console.log(typeof score);


/*let score="33";
console.log(typeof score);

let value=Number(score);// converted to number using number
console.log(typeof value);*/

// "33"=33
//"33abc"=NaN
//null=0;
//true=1; false=0;
//undefined=NaN;

/*let istrue=1;
let  newtrue=Boolean(istrue);
console.log(newtrue);
console.log(typeof istrue);
console.log(typeof newtrue);*/

//1=>true
//0=> false
//""=>false
//"hitesh"=>true


let someNumber=33;
let stringNumber=String(someNumber);
console.log(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
console.log(typeof someNumber);

const id=Symbol('123');
const anotherId=symbol('123');
console.log(id===anotherId);// false