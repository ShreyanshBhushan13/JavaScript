const marvel = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

 //marvel.push(dc)
 //console.log(marvel);
 //console.log(marvel[3]);//["superman", "flash", "batman"]
 //console.log(marvel[3][1]);//superman

 //const allHeros = marvel.concat(dc);
 //console.log(allHeros);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]



 //+++++++=SPREAD
 //const all_new_heros = [...marvel, ...dc]

 //console.log(all_new_heros);

 const another= [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
 const real = another.flat(Infinity)
 console.log(real);//1, 2, 3, 4, 5,6, 7, 6, 7, 4,5


 //console.log(Array.isArray("Hitesh")); tells whether it is array
console.log(Array.from("Hitesh"));//[ 'H', 'i', 't', 'e', 's', 'h' ] convert to array

//console.log(Array.from({name: "hitesh"})) // interesting gives []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ]