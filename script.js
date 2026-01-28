// String
let name = "Faheem";
let city = "Peshawar";

// Number
let age = 22;
let price = 1500;

// Boolean
let isStudent = true;

// Undefined
let result;

// Null
let data = null;


//Check Data Types

console.log("Type of name:", typeof name);
console.log("Type of age:", typeof age);
console.log("Type of isStudent:", typeof isStudent);
console.log("Type of result:", typeof result);
console.log("Type of data:", typeof data); // object (this is a JS bug/feature)


// ================================
//       Type Conversion
// ================================

// String to Number
let strNumber = "25";
let convertedNumber = Number(strNumber);

// Number to String
let numValue = 100;
let convertedString = String(numValue);

// String to Boolean
let strBoolean = "true";
let convertedBoolean = Boolean(strBoolean);


// ================================
//     Print Converted Values
// ================================

console.log("Converted '25' to number:", convertedNumber);
console.log("Type:", typeof convertedNumber);

console.log("Converted 100 to string:", convertedString);
console.log("Type:", typeof convertedString);

console.log("Converted 'true' to boolean:", convertedBoolean);
console.log("Type:", typeof convertedBoolean);


// ================================
//   Practice Task (Important)
// ================================

// Converting non-numeric string to number
let invalidNumber = Number("abc");
console.log("Convert 'abc' to number:", invalidNumber);
console.log("Type:", typeof invalidNumber);

// Observation:


// Convert 0 and 1 into boolean
let boolZero = Boolean(0);
let boolOne = Boolean(1);

console.log("Boolean of 0:", boolZero); // false
console.log("Boolean of 1:", boolOne);  // true


