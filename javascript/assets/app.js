// Create three variables to store name, email and mobile and print them in console module level scope

let firstName = 'Sandhya'
let email = 'sandhyaaryal777@gmail.com'
let mobile = '0410379153'
 console.log(firstName)
 console.log(email)
 console.log(mobile)

// Reassign different values to email and mobile
firstName = 'Ocean'
email = 'ocean@gmail.com'
mobile = '03465858'
console.log(firstName)
console.log(email)
console.log(mobile)



// Create two constants to store college name and address
const collegeName = 'KENT'
const address = 'Wynyard'
console.log(collegeName)
console.log(address)
// Try to reassign different values to adress constant
//collegeName = 'KOI'
//address = 'Cremorne'
//console.log(collegeName)(Var can be hoitable and let and constant cant be hoitable)
//console.log(address)

function sayHello() {
    let greeting = `Hello ${firstName}`
    console.log(greeting)
}

sayHello()

var program = 11
console.log(program)





