


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


module.exports =  assertArraysEqual;



