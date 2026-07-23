let score="33abc"
console.log(typeof score) //string
let valueInNumber=Number(score) //convert string to number
console.log(typeof valueInNumber) //number
console.log(valueInNumber) //33
//"33abc" is converted to 33 because it starts with a number, but the rest of the string is ignored. If the string does not start with a number, the conversion will result in NaN (Not a Number).
//"33" is converted to 33 because it is a valid number representation.
//true is converted to 1 and false is converted to 0 when using the Number() function.
let isLoggedIn=1
let isLoggedIn2=""
let isLoggedIn3="karan"
let booleanIsLoggedIn=Boolean(isLoggedIn) //convert number to boolean
console.log(typeof booleanIsLoggedIn) //boolean
console.log(booleanIsLoggedIn) //true
let booleanIsLoggedIn2=Boolean(isLoggedIn2) //convert string to boolean
console.log(typeof booleanIsLoggedIn2) //boolean
console.log(booleanIsLoggedIn2) //false
let booleanIsLoggedIn3=Boolean(isLoggedIn3) //convert string to boolean
console.log(typeof booleanIsLoggedIn3) //boolean
console.log(booleanIsLoggedIn3) //true
//1=true, 0=false, ""=false, "karan"=true

