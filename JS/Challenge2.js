let myArray1 = [2, 3, 4, 5, 6];
let myArray2 = [3, 7, 8, 5];
//let newArray = [];

let newArray = myArray1.filter(function(createArray) {
    return myArray2.indexOf(createArray) != -1;
  });
  
  console.log(newArray);