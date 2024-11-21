let person={
    name: "pradip",
    age: 31,
    sport:['cricker,carrom']
}

// we can access property by using .
console.log(person.age);

//modifieng property
person.age=30;
console.log("modifed age "+person.age);

// we can assign new prooperty directly
person.isAdmin=true;
console.log(person.isAdmin);


// if we try to access peroperty whcih is not part of object it will print undefined
console.log("try to access property which not avialable "+person.isSuperAdmin);

// deleting property
delete person.isAdmin;
console.log(person);

person.name=undefined;
console.log(person,person.name);

person.age=null;
console.log(person);