function middle (array) {
  let result = []
  let length = array.length
    if (length%2===0 ) {
    result.push(array [Math.floor(length/2)-1] )
    result.push (array[Math.floor(length/2)])
  } else {
    result.push(array[(Math.floor(length/2))])
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


assertArraysEqual(middle([1, 2, 3]) , [2])
assertArraysEqual(middle([1, 2, 3, 4]) ,  [2, 3])