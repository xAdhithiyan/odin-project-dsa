function Node(data, prev = null) {
  this.data = data;
  this.prev = prev;
}

function knightMoves(start, end, counter = 0) {
  let levelOrderArr = [new Node(start, null)];
  let finalArr = [];

  while (levelOrderArr.length && counter == 0) {
    let root = levelOrderArr.shift();
    if (root.data[0] < 8 && root.data[1] < 8) {
      let arr = [
        [root.data[0] + 1, root.data[1] + 2],
        [root.data[0] + 2, root.data[1] + 1],
        [root.data[0] + 1, root.data[1] - 2],
        [root.data[0] + 2, root.data[1] - 1],
        [root.data[0] - 1, root.data[1] - 2],
        [root.data[0] - 2, root.data[1] - 1],
        [root.data[0] - 1, root.data[1] + 2],
        [root.data[0] - 2, root.data[1] + 1],
      ];
      arr.forEach((n) => {
        let child = new Node(n, root);
        levelOrderArr.push(child);

        if (arraysEqual(child.data, end)) {
          finalArr.push(child);
          counter = 1;
        }
      });
    }
  }
  displayPath(finalArr);
}

function displayPath(arr) {
  let total = 0;
  let printArr = [];
  console.log('Shortest Path: ');
  arr.forEach((position) => {
    while (position) {
      printArr.push(position);
      position = position.prev;
      total++;
    }
    printArr.reverse();
    printArr.forEach((n) => console.log(n.data));
  });
  console.log(`A total of ${total - 1} moves were made`);
}

// == only checks reference equality of the arrays and not the contents of the arrays
function arraysEqual(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
}

knightMoves([0, 0], [0, 7]);
