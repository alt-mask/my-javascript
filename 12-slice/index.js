let fullName = "Little Alien"
let firstName;
let lastName;

lastName = fullName.slice(fullName.indexOf(" ") + 1);
firstName = fullName.slice(0, fullName.indexOf(" "));

console.log(lastName);
console.log(firstName);