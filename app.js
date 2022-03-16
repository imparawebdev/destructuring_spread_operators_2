const personOne = {
    name: 'Miriam',
    age: 30,
    address: {
        city: 'Parma',
        state: 'Italy'
    }
}

const personTwo = {
    name: 'Joao',
    age: 35,
    address: {
        city: 'Lisboa',
        state: 'Portugal'
    }
}

//const { name, age } = personTwo;
const { address: { city } } = personOne;
/* 
Instead of using the position of the array like a,b,c we use the key, the names used for the object parameters
*/
console.log(city);

// Also here we can use ...rest
const { name: firstName, ...rest } = personTwo

console.log(firstName);
console.log(rest);

const personThree = { ...personOne, ...personTwo } 
/*we're saying take all from object personOne and put into an object and take all from the object personTwo and put it in the asme object*/

console.log(personThree);

// It also works for functions that take the object as argument

function printUser({ name, age }) {
    console.log(`Name is ${name}. Age is ${age}`)
}

printUser(personOne);