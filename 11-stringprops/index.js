// useful string properties

let userName = "Little Alien";
let phoneNumber = "123-456-7890";

console.log(userName.length);
console.log(userName.charAt(1));
console.log(userName.indexOf("e"));
console.log(userName.lastIndexOf("e"));
userName = userName.trim();
userName = userName.toUpperCase();
userName = userName.toLowerCase();

phoneNumber = phoneNumber.replaceAll("-","/");

console.log(userName);
console.log(phoneNumber);