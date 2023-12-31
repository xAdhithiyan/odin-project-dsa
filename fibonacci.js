// fibonacci using iteration
function fibs(n) {
  let x = 0;
  let y = 1;
  arr = [x, y];
  for (let i = 0; i < n - 2; i++) {
    arr.push(x + y);
    x = y;
    y = arr[arr.length - 1];
  }
  return arr;
}

//fibonacci using recursion
function fibsRec(n, arr = [0, 1]) {
  if (n <= 2) {
    return arr;
  } else {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return fibsRec(n - 1, arr); //to return the final arr
  }
}
console.log(fibsRec(8)); //returns [0, 1, 1, 2, 3, 5, 8, 13]

//the best way to solve is -> reutrn fibRec(n-1) + fibRec(n-2) -> will return the last number in the fibonacci series
