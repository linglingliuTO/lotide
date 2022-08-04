function flatten (array) {
result = [] 
  for (var i = 0; i <array.length; i ++) {
    if (Array.isArray(array[i]) === true)  {
      for ( var j = 0; j < array[i].length; j++)
      result.push (array[i][j])
    } else {
      result.push (array[i])
    }
  }
  return result 
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


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])



module.exports = flatten