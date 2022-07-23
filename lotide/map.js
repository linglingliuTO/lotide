const words = ["ground", "control", "to", "major", "tom"];


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



const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, word => word[0]);

assertArraysEqual(results1, ["g","c","t","m","t"])