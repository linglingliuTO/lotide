

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!


function eqArrays(actual, expected) {
  var output = true   
  for (var i = 0; i < actual.length; i++) {
      if ( actual[i]!== expected[i]) {
        output = false 
      } 
}
return output
}


const eqObjects = function(object1, object2) {

if ( Object.keys(object1).length !== Object.keys(object2).length) {
  return false
} else {
  result = true 
  for (let keys in object1 ) {
       if (Array.isArray(object1[keys])===true) {
   if (eqArrays(object1[keys], object2[keys]) === false) {
    result = false 
   }
    } else {
      if (object1[keys]!== object2[keys]) {
      result = false 
    }
  }


}
return result 
}  
}


const assertObjectsEqual=  function (actual, expected) {
  if (eqObjects (actual, expected)) {
    console.log( "Assertion Passed: "+actual+" === "+ expected)
  } else {
    console.log( `Assertion Failed: ${actual} !== ${expected} `)
  }
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => fa


