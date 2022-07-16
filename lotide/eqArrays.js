const assertEqual =  function (actual, expected) {
  if (actual=== expected) {
    console.log( "Assertion Passed: "+actual+" === "+ expected)
  } else {
    console.log( `Assertion Failed: ${actual} !== ${expected} `)
  }
}


function eqArrays(actual, expected) {
  var output = true   
  for (var i = 0; i < actual.length; i++) {
      if ( actual[i]!== expected[i]) {
        output = false 
      } 
}
return output
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)