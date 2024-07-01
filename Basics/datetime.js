let myDate=new Date()
/*console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());*/

//console.log(typeof myDate);//object

//let date=new Date(2023,0,23,5,3);
//let date=new Date("2023-01-14");
let date=new Date("01-14-2023");
//console.log(date.toDateString());//give date only
//console.log(date.toLocaleString());//gives date and time specified

let date1=Date.now();
//console.log(date1);// gives millisecond from a specfic date 1 jan 1970

//console.log(date.getTime());//gives millisecond from a specfic date 1 jan 1970 

//console.log(Math.floor(Date.now()/1000));//converted to second

let newDate=new Date (2023,1,13);
//console.log(newDate.getMonth());
//console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday:"long",
})