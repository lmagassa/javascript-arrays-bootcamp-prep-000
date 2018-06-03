
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(theArray, elementToAdd) {
  //theArray.unshift(elementToAdd)
  var spreadArray = [elementToAdd, ...theArray]
  return spreadArray
  
}


function destructivelyAddElementToBeginningOfArray(theDestructiveArray, destructiveElementToAdd) { 
    var addIt = theDestructiveArray.unshift(destructiveElementToAdd)
    //var destructiveArray = [destructiveElementToAdd,...theDestructiveArray]
    return addIt
}