const name="hitesh";
const repoCount=50;

//console.log(name+repoCount+"value");


//TEMPLATE INDICES
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName=new String("SHreyan-SH");
/*console.log(gameName);
console.log(gameName[0]);
console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));//r

console.log(gameName.indexOf('n'));//6*/

const newString=gameName.slice(-8,4);// element at 4 index is not included
console.log(newString);


const preString=gameName.substring(1,4);
console.log(preString);// element at 4 index is not included

const newString1="  hitesh   ";
console.log(newString1.trim());


const newString2="hitesh";
console.log(newString2.replace("h","y")); //(old value,new value)

const newString3="hitesh is my name and i am a teacher";
console.log(newString3.includes("teacher"));// includes is used to check whtether it is available in the string

const name1="hitesh-hc-com";
console.log(name1.split('-'));// split is used to split a sentence in an aarray

let str1="APNA";
let str2="COLLEGE";
let newStr1=str2.concat(str1);//3hr33min
let newStr2=str1.concat(str2);
console.log(newStr1);
console.log(newStr2);