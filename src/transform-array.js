const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(typeof(arr) !== typeof([]))
  throw "'arr' parameter must be an instance of the Array!";

let arrResult = [];

for(let i = 0, j = 0; i < arr.length; i++) {
  if( typeof(arr[i]) === typeof(1) ) {
      arrResult[j] = arr[i];
      j++;       
  }
  
  if( (arr[i] === '--discard-next') && i !== arr.length - 1)
      i++;

  if( (arr[i] === '--discard-prev') && (arr[i - 2] !== '--discard-next') && (i !== 0) )
      j--;

  if( (arr[i] === '--double-next') && i !== arr.length - 1) {
      arrResult[j] = arr[i + 1];
      j++;
  }

  if( (arr[i] === '--double-prev') && (arr[i - 2] !== '--discard-next') && i !== 0) {
      arrResult[j] = arr[i - 1];
      j++
  }
  
}

return arrResult;
}

module.exports = {
  transform
};
