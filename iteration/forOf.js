// for of

// ["", "", ""]
// [{}, {}, {}] // to put objects in an array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}



//Maps
// Maps remember original insertion order of the keys and has unique value in the Map's collection

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


 console.log(map);
 /*
 {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
 */

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
/*
IN :- India
USA :- United States of America    
Fr :- France
*/



// FOR OF LOOP IS NOT USED IN OBJECTS
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }