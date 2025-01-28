function cb(msg){
    return msg;
}

function greet(name,callback){
    return callback(`Hii ${name}, Good Evening`)
}

let msg=greet("Vamshi",cb)
console.log(msg)





// // Function to multiply by 2
// function multiplyBy2(num, callback) {
//     const result = num * 2;
//     callback(result);
//   }
  
//   // Function to subtract 3
//   function subtract3(num, callback) {
//     const result = num - 3;
//     callback(result);
//   }
  
//   // Function to add 10
//   function add10(num, callback) {
//     const result = num + 10;
//     callback(result);
//   }
  
//   // Chaining the operations using callbacks
//   function processNumber(num) {
//     multiplyBy2(num, (result1) => {
//       subtract3(result1, (result2) => {
//         add10(result2, (result3) => {
//           console.log('Final result:', result3);
//         });
//       });
//     });
//   }
  
//   // Example usage
//   processNumber(5); // This will start the chain with number 5
  