//double function using arrow function
function double(arr) {
   return arr.map(function(val) {
      return val * 2;
});
}
//refractored to ES2015 Arrow Functions:
const double = arr => arr.map(val => val * 2);

//squareAndFindEven Function 
function squareAndFindEvens(numbers) {
          var squares = numbers.map(function(num) {
            return num ** 2;
          });
          var evens = squares.filter(function(square) {
            return square % 2 === 0;
          });
          return evens;
        }
        
//refractored to ES2015 Arrow Function
const squareAndFindEvens = numbers => 
  numbers.map(num => num ** 2).filter(square => square % 2 === 0);


//test
// Test the double function
const double = arr => arr.map(val => val * 2);
console.log(double([1, 2, 3, 4])); // [2, 4, 6, 8]

// Test the squareAndFindEvens function
const squareAndFindEvens = numbers => 
  numbers.map(num => num ** 2).filter(square => square % 2 === 0);

console.log(squareAndFindEvens([1, 2, 3, 4])); // [4, 16]
