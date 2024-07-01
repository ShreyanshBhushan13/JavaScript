// const tinderUser = new Object()  // singleton object
const tinderUser = {}// non singelton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);// hitesh


//++++++++++++IMPORTANT+++++++++++++++++


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//const obj4 = {5: "a", 6: "b"}

 //const obj3 = { obj1, obj2 }
//console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


//const obj3 = Object.assign(target , source )


 //const obj3 = Object.assign({},obj1, obj2 )
//console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2}
// console.log(obj3);



//TAKING VALUE FROM DATABASE
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//gives array
// console.log(Object.values(tinderUser));//gives array

console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// to search whetyher it is available
