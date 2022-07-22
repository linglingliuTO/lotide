const assertEqual =  function (actual, expected) {
  if (actual=== expected) {
    console.log( "Assertion Passed: "+actual+" === "+ expected)
  } else {
    console.log( `Assertion Failed: ${actual} !== ${expected} `)
  }
}


function countLetters (string ) {

const result = {}
for (const letters of string) {
if (result[letters]) {
  result[letters]+=1
}else {
  result[letters]=1
}
}
return result



}


console.log(assertEqual ( countLetters("lighthouse in the house")["l"], 1))