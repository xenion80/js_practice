// let score="33abc"
// console.log(typeof score) //string
// let valueInNumber=Number(score) //convert string to number
// console.log(typeof valueInNumber) //number
// console.log(valueInNumber) //33
//"33abc" is converted to 33 because it starts with a number, but the rest of the string is ignored. If the string does not start with a number, the conversion will result in NaN (Not a Number).
//"33" is converted to 33 because it is a valid number representation.
//true is converted to 1 and false is converted to 0 when using the Number() function.
// let isLoggedIn=1
// let isLoggedIn2=""
// let isLoggedIn3="karan"
// let booleanIsLoggedIn=Boolean(isLoggedIn) //convert number to boolean
// console.log(typeof booleanIsLoggedIn) //boolean
// console.log(booleanIsLoggedIn) //true
// let booleanIsLoggedIn2=Boolean(isLoggedIn2) //convert string to boolean
// console.log(typeof booleanIsLoggedIn2) //boolean
// console.log(booleanIsLoggedIn2) //false
// let booleanIsLoggedIn3=Boolean(isLoggedIn3) //convert string to boolean
// console.log(typeof booleanIsLoggedIn3) //boolean
// console.log(booleanIsLoggedIn3) //true
//1=true, 0=false, ""=false, "karan"=true

//*************************operations********* */
let value=3
let negValue=-value
console.log(negValue) //-3

console.log("1"+1)
console.log(1+"1")
console.log("1"+1+1) //111 because the first operation is string concatenation, so the result is a string "11", and then the next operation is also string concatenation, so the final result is "111".
console.log(1+1+"1") //21 becuase the first operation is number addition, so the result is 2, and then the next operation is string concatenation, so the final result is "21".
console.log(2-"1") //1 because the first operation is number subtraction, so the result is 1, and then the next operation is string concatenation, so the final result is "21".
let num1,num2,num3
num1=num2=num3=2+2
console.log(num1,num2,num3) //4 4 4 because the first operation is number addition, so the result is 4, and then the next operation is assignment, so all three variables are assigned the value 4.


