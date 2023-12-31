/* 
merge sort:
  step 1: sort the left half
  step 2: sort the right half
  step 3: merge both the halves
*/

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  newArr = [];
  //if one of the array ends loop ends
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] > rightArr[0]) {
      newArr.push(rightArr.shift());
    } else {
      newArr.push(leftArr.shift());
    }
  }
  return [...newArr, ...leftArr, ...rightArr]; // adds any left over elements
}

console.log(mergeSort([105, 79, 100, 110]));
