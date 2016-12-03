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

  this.delete = function(data) {
    if (this._length === 1 && this.head.data === data) {
      this.head = null;
      this._length -= 1;
    } else if (this._length > 1) {
      var previousNode = this.head;
      var currentNode = this.head;
      while (currentNode.data !== data) {
        previousNode = currentNode;
        currentNode = currentNode.nextNode;
        if (currentNode.nextNode === null && currentNode.data !== data) {
          return;
        }
      }
      if (currentNode === this.head) {
        this.head = currentNode.nextNode;
      } else {
        previousNode.nextNode = currentNode.nextNode;
      }
      currentNode = null;
      this._length -= 1;
    }
  }

  this.toArray = function() {
    if (this._length === 0) {
      return []
    } else {
      var result = [];
      var currentNode = this.head;
      while (currentNode.nextNode) {
        result.push(currentNode.data);
        currentNode = currentNode.nextNode;
      }
      result.push(currentNode.data);
      return result;
    }
  }
}
