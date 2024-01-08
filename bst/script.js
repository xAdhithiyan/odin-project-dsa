//constructor to create a node
function Node(data, left = null, right = null) {
  this.data = data;
  this.left = left;
  this.right = right;
}

const tree = (function () {
  //function to sort and remove duplicated from an array
  function sortAndRemoveDuplicates(arr) {
    arr = arr.sort((a, b) => a - b); //merge sort can be used here
    arr = Array.from(new Set(arr)); //to remove duplicates
    return arr;
  }

  //function that uses recursion to build the bst
  function buildTree(arr, start = 0, end = arr.length - 1) {
    if (start == 0 && end == arr.length - 1) {
      arr = sortAndRemoveDuplicates(arr);
      end = arr.length - 1;
    }

    //base of the recursion
    if (start <= end) {
      let mid = Math.floor((start + end) / 2);
      let root = new Node(arr[mid]);
      root.left = buildTree(arr, start, mid - 1);
      root.right = buildTree(arr, mid + 1, end);
      return root;
    }
    return null;
  }

  //IMP -> recustion where the final node is returned only one level up
  function insert(root, value) {
    if (root == null) {
      return new Node(value);
    }

    if (value < root.data) {
      root.left = insert(root.left, value);
    } else if (value > root.data) {
      root.right = insert(root.right, value);
    }
    return root;
  }

  // removing an node with 2 children is not implemented yet
  function remove(root, value) {
    if (root.data == value) {
      if (root.left == null && root.right == null) {
        return null;
      } else if (root.left == null && root.right != null) {
        return root.right;
      } else if (root.left != null && root.right == null) {
        return root.left;
      }
    }

    if (value < root.data) {
      root.left = remove(root.left, value);
    } else if (value > root.data) {
      root.right = remove(root.right, value);
    }
    return root;
  }

  //IMP -> recursion where the final node is returned all the way to the top
  function find(root, value) {
    if (root.data == value) {
      return root;
    }

    if (value < root.data) {
      return find(root.left, value);
    } else if (value > root.data) {
      return find(root.right, value);
    }
  }

  // breadth first search(using the concent of queue)
  function levelOrder(root) {
    // prettier-ignore
    let levelOrderArr = [];
    let finalArr = [];
    levelOrderArr.push(root);
    while (levelOrderArr.length) {
      let currentNode = levelOrderArr.shift();
      finalArr.push(currentNode.data);

      if (currentNode.left) {
        levelOrderArr.push(currentNode.left);
      }
      if (currentNode.right) {
        levelOrderArr.push(currentNode.right);
      }
    }
    return finalArr;
  }

  // depth first search
  function preOrder(root, arr = []) {
    if (root == null) {
      return null;
    }
    arr.push(root.data);
    preOrder(root.left, arr);
    preOrder(root.right, arr);
    return arr;
  }

  function inOrder(root, arr = []) {
    if (root == null) {
      return null;
    }
    inOrder(root.left, arr);
    arr.push(root.data);
    inOrder(root.right, arr);
    return arr;
  }

  function postOrder(root, arr = []) {
    if (root == null) {
      return null;
    }
    postOrder(root.left, arr);
    postOrder(root.right, arr);
    arr.push(root.data);
    return arr;
  }

  // max height
  function height(root, heightValue = 1, max = 0) {
    if (root == null) {
      return max;
    }
    if (heightValue > max) {
      max = heightValue;
    }
    return Math.max(
      height(root.left, heightValue + 1, max),
      height(root.right, heightValue + 1, max)
    );
  }

  // number of nodes crossed before reaching the required node
  function depth(root, value, depthVal = 0) {
    if (root.data == value) {
      return depthVal;
    }
    depthVal++;
    if (value < root.data) {
      return depth(root.left, value, depthVal);
    } else if (value > root.data) {
      return depth(root.right, value, depthVal);
    }
  }

  //to visualize the bst
  function visualizeBST(node, prefix = '', isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      visualizeBST(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      visualizeBST(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

  //isBalance function later

  return {
    buildTree,
    insert,
    remove,
    find,
    levelOrder,
    preOrder,
    inOrder,
    postOrder,
    height,
    depth,
    visualizeBST,
  };
})();

function driverCode(arr) {
  // prettier-ignore
  const rootNode = tree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
  tree.visualizeBST(rootNode);
  console.log('Level order: ', tree.levelOrder(rootNode));
  console.log('Pre Order: ', tree.preOrder(rootNode));
  console.log('In Order: ', tree.inOrder(rootNode));
  console.log('Post Order: ', tree.postOrder(rootNode));
  console.log('Height of tree: ', tree.height(rootNode));
  console.log('Depth of the tree: ', tree.depth(rootNode, 1));
}

driverCode([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
