var LinkedList = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

var Node = function(val, prev, next) {
  this.val = val;
  this.prev = prev;
  this.next = next;
};

LinkedList.prototype.push = function(input){
  if (this.length == 0) {
    this.tail = new Node(input, null, null);
    this.head = this.tail;
  } else {
    this.tail = new Node(input, this.tail, null);
    this.tail.prev.next = this.tail;
  }
  this.length++;
}

LinkedList.prototype.pop = function(){
  if (this.length == 0) {
    return null
  } else {
    var removed = this.tail.val;
    this.tail = this.tail.prev;
    this.length--;
    return removed;
  }
}

LinkedList.prototype.shift = function() {
  var removed = this.head.val;
  this.head = this.head.next;
  this.length--;
  if (this.length == 0) {
    this.tail = this.head;
  }
  return removed;
}

LinkedList.prototype.unshift = function(input) {
  this.head = new Node(input, null, this.head);
  if (this.length == 0) {
    this.tail = this.head;
  } else {
    this.head.next.prev = this.head;
  }
  this.length++;
}

LinkedList.prototype.count = function() {
  return this.length;
}

LinkedList.prototype.delete = function(input) {
  var element = this.head;
  while (element && element.val != input) {
    element = element.next;
  }
  if (element) {
    if (element.prev) {
      element.prev.next = element.next;
    }
    if (element.next) {
      element.prev.next = element.prev;
    }
    element.next = null;
    element.prev = null;
    this.length--;
  }
}
module.exports = LinkedList;
