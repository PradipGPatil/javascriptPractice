// suppose we get some value from user and want to set property

let userEnterLastName='last Name';

let person={
    'first Name': "pradip",
    [userEnterLastName] : 'patil'

}

const userChoseName='first Name';

// in below example we cannot able to access peropert with . notation
console.log(person[userChoseName]);
console.log(person[userEnterLastName]);