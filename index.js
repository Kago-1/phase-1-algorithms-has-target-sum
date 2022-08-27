function hasTargetSum(array, target) {
  // Write your algorithm here
  //iterate over the array
for(let i = 0; i < array.length; i++){ 
  // find a complementary number
  const complement = target - array[i];
  // iterate the remaining numbers
  for (let j = i +1; j < array.length; j++){
    // check if the the remaining numbers matches the complement
    if (array[j] === complement) return true;
  } 
} return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;


//////////////////Alternatively/////////////////////
// function hasTargetSum(array, target) {
//   // 1 step
//   const seenNumbers = {};
//   for (const number of array) {
//     // n steps
//     const complement = target - number;
//     // n steps
//     if (seenNumbers[complement]) return true;
//     // n steps
//     seenNumbers[number] = true;
//   }
//   // 1 step
//   return false;
// }