let date = new Date().getDay();
switch (date) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log(" Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("error");
        break;
}

// function test(numOne) {

// }
// test(2);
let x = 10;
let y = 5;
let z = x % y;
console.log(z);

function test(numOne, numTwo) {
    let a = numOne % numTwo;
    console.log(a == 0 ? "even" : "odd");
}
test(6, 2);