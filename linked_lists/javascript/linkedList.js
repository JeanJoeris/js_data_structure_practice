function List() {
  this._length = 0;
  this.head = null;

  this.push = function(data) {
    this._length += 1;
    var currentNode = this.head;
    if (currentNode === null) {
      return this.head = new ListNode(data);
    }
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = new ListNode(data);
  }

  this.pop = function(data) {
    if (this.head === null) {
      return null;
    }
    else if (this.head.nextNode === null) {
      var result = this.head;
      this.head = null;
    } else {
      var previousNode = null;
      var currentNode = this.head;
      while (currentNode.nextNode !== null) {
        previousNode = currentNode;
        currentNode = currentNode.nextNode;
      }
      previousNode.nextNode = null;
      var result = currentNode;
    }
    this._length -= 1;
    return result;
  }
}
