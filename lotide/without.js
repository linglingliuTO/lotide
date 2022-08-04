function without (array, word) {
 output = []
  for (var i = 0; i<array.length; i ++) {
    if (array[i] != word ) {
      output.push(array[i])
 }
}
return (output)
}



function assertArraysEqual(actual, expected) {
  var output = true   
  for (var i = 0; i < actual.length; i++) {
      if ( actual[i]!== expected[i]) {
        output = false 
      } 
}
if (output=== true ) {
  console.log( "Assertion Passed: "+actual+" === "+ expected)
} else {
  console.log( `Assertion Failed: ${actual} !== ${expected} `)
}
}



const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);



module.exports = without 