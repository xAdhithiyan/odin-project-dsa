// a constructor for creating a node
function Node(data = null, next = null) {
  this.value = data;
  this.nextNode = next;
}

// module pattern(no need to create an object to use the function)
const linkedList = (function () {
  let head = null;

  // adding a node at the start of the list (new head points to the old head)
  function prepend(value) {
    head = new Node(value, head);
  }

  // adding a node at the end of the list
  function append(value) {
    const temp = new Node(value);
    let ptr = head;
    while (ptr.nextNode) {
      ptr = ptr.nextNode;
    }
    ptr.nextNode = temp;
  }

  // display the size of the linked list
  function size() {
    let count = 0;
    let ptr = head;
    while (ptr) {
      count++;
      ptr = ptr.nextNode;
    }
    console.log(`The size of the linked list is: ${count}`);
  }

  // display head node
  function headValue() {
    console.log(head);
  }

  // display the tail node
  function tailValue() {
    let ptr = head;
    while (ptr.nextNode) {
      ptr = ptr.nextNode;
    }
    console.log(ptr);
  }

  // display the node at a particular index
  function atIndex(index) {
    let ptr = head;
    for (let i = 0; i < index; i++) {
      ptr = ptr.nextNode;
    }
    console.log(`The node at index ${index} is: `, ptr);
  }

  // to remove the last element
  function pop() {
    let ptr = head;
    let prev;
    if (head == null) {
      console.log('Linked list is empty');
    } else if (head.nextNode == null) {
      head = null;
    } else {
      while (ptr.nextNode) {
        prev = ptr;
        ptr = ptr.nextNode;
      }
      prev.nextNode = null;
    }
  }

  // checks if a certain value is present in the linked list
  function contains(value) {
    let ptr = head;
    while (ptr) {
      if (ptr.value == value) {
        console.log('The linked list contains the value:', value);
        break;
      }
      ptr = ptr.nextNode;
    }
    if (ptr == null) {
      console.log('The linked list doesnt NOT contain the value:', value);
    }
  }
  // to display all the elements in the list
  function display() {
    let ptr = head;
    let answer = '';
    while (ptr) {
      answer += ptr.value + ' -> ';
      ptr = ptr.nextNode;
    }
    answer += 'null';
    console.log(answer);
  }

  return {
    prepend,
    append,
    size,
    headValue,
    tailValue,
    atIndex,
    pop,
    contains,
    display,
  };
})();

linkedList.prepend(50);
linkedList.prepend(60);
linkedList.prepend(70);
linkedList.append(100);
linkedList.append(120);
linkedList.display(); // 70 -> 60 -> 50 -> 100 -> 120 -> null
