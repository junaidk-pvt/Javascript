const arr = [5,1,3,2,6];

// Double the array using map 

console.log(arr.map( function double (x){
    return x*2;
    }
))

// Convert an array to binary using map

console.log(arr.map( function binary(x){
        return x.toString(2);
    }
))
// Shortcut Code with Arrow Function
console.log(arr.map((x) => x.toString(2)))

/* Filter */

// Print Odd Number from Array
function isOdd(x){
    return x % 2;
}
console.log(arr.filter(isOdd))

// Shortcut Code with Arrow Function
console.log(arr.filter((x)=> x% 2))

/* Reduce */
// Find sum
console.log (arr.reduce((acc,curr) => {
    acc += curr; 
    return acc;
}, 0))

//Find Max 
console.log(arr.reduce((acc, curr)=>{
    if (curr>acc){
        acc = curr;
    }
    return acc;
},0))

/*-------------------------Advance Excersie --------------------------------- */
const users = [
    {firstName: "Junaid", lastName: "Khan", age: 22},
    {firstName: "Osama", lastName: "Shaikh", age: 23},
    {firstName: "Maruti", lastName: "More", age: 21},
    {firstName: "Ahmed", lastName: "Khan", age: 17},
];
// Print List of Full Name 
const output = users.map((x) => x.firstName + " " + x.lastName)
console.log(output);

// Count Number of Ages
const ages = users.reduce((acc, curr) =>{
    if(acc[curr.age]){
        acc[curr.age]= ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1; 
    }
    return acc;
}, {}) 

console.log(ages);

// Find the FirstName whose age is greater than 21
console.log(users.filter(x => x.age >21).map( x => x.firstName))

// Find the FirstName whose age is greater than 21 with Reduce 
const ages2 = users.reduce((acc, curr)=>{
    if (curr.age > 21){
        acc.push(curr.firstName) ;
    }

    return acc; 
},[])
console.log(ages2);