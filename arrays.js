
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(theArray, elementToAdd) {
  //theArray.unshift(elementToAdd)
  var spreadArray = [elementToAdd, ...theArray]
  return spreadArray
}


function destructivelyAddElementToBeginningOfArray(theDestructiveArray, destructiveElementToAdd) { 
   //[destructiveElementToAdd,...theDestructiveArray]
   theDestructiveArray.unshift(destructiveElementToAdd)
    return theDestructiveArray
}

function addElementToEndOfArray(theAddArray, elementAddToAdd) {
  
}

function destructivelyAddElementToEndOfArray(theDestructiveAddArray, destructiveElementAddToAdd) {
  
}