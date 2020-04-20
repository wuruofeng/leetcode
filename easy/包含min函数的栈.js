/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.unshift(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.shift();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[0];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return Math.min(...this.stack);
};

/**
 * Your MinStack object will be instantiated and called as such:

 */
var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
console.log(obj.min())
obj.pop();
console.log(obj);
var param_3 = obj.top();
var param_4 = obj.min();
console.log(param_3)
console.log(param_4)


