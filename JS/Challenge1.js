let arr = [1, 2, 3, 4, 5, 6];

function cutArray(arr) {
    let oddArray = [];
    let evenArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 == 0) {
            oddArray.push(arr[i])                        
        } else {
            evenArray.push(arr[i])
        }        
    }
    alert(oddArray);
    alert(evenArray);
}
cutArray(arr);