
let person={
    name:"pradip",
    age:30

}
// suppoese we want to give first Name is peroperoty it will show error
//but we can tell js that this is special key
let person1={
    'first Name':'pradip',
    age:31
}

// if want to access this property
// its like accesssing property of array by using index but object do not have index so we are passing key
console.log(person1['first Name']);