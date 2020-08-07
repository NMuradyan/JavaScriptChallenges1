let number = 4785;
let digit = 1;

function searchNumber(number, digit) {
    let x = number.toString().split('');
    for (let i = 0; i < x.length; i++) {
        if (x[i] == digit) {
            return true
        }
        
    }
    return false
}

alert(searchNumber(number, digit));