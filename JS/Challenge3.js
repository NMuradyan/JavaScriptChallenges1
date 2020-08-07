let myArray = [5,7,8,4,9,6,7,5,3,];
let elem = 9;

function searchElem(myArray, elem) {
    if (myArray.includes(elem)) {
        alert(true);
    }else {
        alert(false);
    }
}
searchElem(myArray, elem);