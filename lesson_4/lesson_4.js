let str = '1234';
let booleanTrue = true;
let booleanFalse = false;
let n = 2;

// 1.1 String + Boolean

console.log(str + booleanTrue);

// 1.2 String + Number

console.log(str + n);

// 1.3 Number + Boolean

console.log(n + booleanTrue);
console.log(n + booleanFalse);

// 2.1 String * Boolean

console.log(str * booleanTrue);
console.log(str * booleanFalse);

// 2.2 String * Number

console.log(str * n);

// 2.3 Number * Boolean

console.log(n * booleanTrue);
console.log(n * booleanFalse);

// 3.1 String / Boolean
 
console.log(str / booleanFalse);
console.log(str / booleanTrue);

// 3.2 String / Number

console.log(str / n);

// 3.3 Number / Boolean

console.log(n / booleanFalse);
console.log(n / booleanTrue);


// 4 Type conversion (number, string, boolean)

// 4.1 Convert to String

let value = true;
console.log(typeof value);

value = String(value);
console.log(typeof value);

// Convert String to Number

let value_2 = '123'; 
console.log(typeof value_2);

value_2 = Number(value_2);
console.log(typeof value_2);

// Convert boolean to number

let value_3 = true; 
console.log(typeof value_3);

value_3 = Number(value_3);
console.log(value_3);
console.log(typeof value_3);

// Convert to boolean

let value_5 = ''
let value_6 = 123;
let value_7 = null;
let value_8 = 'test';

value_5 = Boolean(value_5);
console.log(value_5);

value_6 = Boolean(value_6);
console.log(value_6);

value_7 = Boolean(value_7);
console.log(value_7);

value_8 = Boolean(value_8);
console.log(value_8);