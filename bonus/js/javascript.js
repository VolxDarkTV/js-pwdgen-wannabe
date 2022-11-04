// "Baseline" Password Generator

// Chiedere Name
let name = prompt("Name");

console.log(name)

// Chiedere Surname
let surname = prompt("Surname");

console.log(surname)
// Chiedere Favourite Color
let color = prompt("Color");

console.log(color)
// Add a Constant
const constantNumber = 21;

console.log(constantNumber);
// Output
document.getElementById ("box").innerHTML = `Ecco a te ${name} la password che nessun altro ti darà mai:
${name}${surname}${color}${constantNumber}`
