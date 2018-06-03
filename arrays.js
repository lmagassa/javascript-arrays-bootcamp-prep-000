
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(theArray, elementToAdd) {
  //theArray.unshift(elementToAdd)
  var spreadArray = [elementToAdd, ...theArray]
  return spreadArray
  
}


function destructivelyAddElementToBeginningOfArray(theArray, elementToAdd) { 
    var destructiveSpreadArray = theArray.unshift(elementToAdd)
    //var destructiveSpreadArray = [elementToAdd,...theArray]
    return destructiveSpreadArray
}