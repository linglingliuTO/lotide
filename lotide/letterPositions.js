function letterPositions (sentence) {
  const results = {};
  //sentence = sentence.split(" ").join("")
 
for (const letter of sentence ) {
  results[letter]   = establishArray (sentence, letter )
}
  return results;
};

function establishArray (sentence, letter ) {

result = []
for (let i =0; i < sentence.length; i ++ ) {
if (sentence[i] === letter ) {
  result.push (i)
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
  console.log( `Assertion Passed: ${actual} === ${expected} `)
} else {
  console.log( `Assertion Failed: ${actual} !== ${expected} `)
}
}

const letterPositionsResult = letterPositions("lighthouse in the house") 

assertArraysEqual(letterPositionsResult["i"], [1, 11])

assertArraysEqual(letterPositionsResult["o"], [6, 19])
