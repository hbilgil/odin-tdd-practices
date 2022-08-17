const analyzeArray = function (array) {
    if (!isValidArray(array)) return 'Not an array';

    const sum = array.reduce((current, previous) => {
        return current + previous;
    });
  
    const average = sum / array.length;
  
    const min = array.reduce((current, previous) => {
        return Math.min(current, previous);
    });
  
    const max = array.reduce((current, previous) => {
        return Math.max(current, previous);
    });
  
    const length = array.length;
  
    const analyzedArray = {
        average: average,
        min: min,
        max: max,
        length: length,
    };
  
    return analyzedArray;
}

function isValidArray(array) { //checks if all items are numbers in an array
    if (Array.isArray(array)) {
        for (let item of array) {
            if (typeof item !== 'number') {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;   
}

module.exports = analyzeArray;