const accountId =144553;//const lock the value of variable and it cannot be changed
let accountEmail="karan@gmail.com";//let allows you to change the value of the variable

var accountPassword="12345";//var is function-scoped and can be accessed from anywhere in the function
accountCity="New York";
let accountState;
//difference between var and let is that var is function-scoped and can be accessed from anywhere in the function, while let is block-scoped and can only be accessed within the block it is defined in.

accountEmail="harry@gmail.com";
accountPassword="54321";
accountCity="Los Angeles";
console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState]);//console.table() is used to display data in a tabular format in the console

