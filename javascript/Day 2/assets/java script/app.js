 // Create thre variable to store name, email and mobile number and print them in the console. 
let storeName = 'Moonlight';
let _email = 'moonlight@gmail.com';
let mobile = '0452534409';

console.log(storeName);
console.log(_email);
console.log(mobile);


 //Rename the  value of email and mobile.

_email = 'suryalight@gmail.com';
mobile = '9841382036';

console.log(_email);
console.log(mobile);


//create two constant variable to college name and its address.

const collegeName = 'ATMC'
const address = 'Townhall'

console.log(collegeName);
console.log(address);


// Try to reasign different value to address constant.
// collegeName = 'National College'
// address = 'Dhumbarahi'


function sayHello() {
    const greeting = `hello ${storeName}`;
    // let greeting = `Hello ${storeName}`;
    console.log(greeting)
}

sayHello()

console.log(window)

// console.log(greeting)

function nameandClass(name, Sclass) {
    console.log(`${name} and ${Sclass}`);
    
}