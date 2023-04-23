function hasTargetSum(array, target) {
  let a = 0
  let num1 = array[a]
  for (let i = 0; i < array.length; i++) {
    for (let num2 of array.slice(array.indexOf(num1) + 1)) {
      if (num1 + num2 === target){
        return true
      }
    }
    num1 = array[a++]
  }
  return false
}

/* 
  Write the Big O time complexity of your function here

  O(n**2)
*/

/* 
  Add your pseudocode here

Start at array[0] --> add it to each element in the array
if the sum = target, return true
if not, move on to array[1] but don't add it to array[0] --> start at array[2]


*/

/*
  Add written explanation of your solution here

  for each element in the array, add it to each of the following elems in the array in turn 
  if the sum is the target, return true 
  if not, keep going and adding --> if you make it through all of them --> return false

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
