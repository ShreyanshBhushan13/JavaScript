// promise will take some time to execute
const GITHUB_API="https://github.com/ShreyanshBhushan13"
const user=fetch(GITHUB_API);
console.log(user);
user.then(function(data){
console.log(data);
});