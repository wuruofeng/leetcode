var CQueue = function () {
    this.arr = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.arr.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (this.arr.length == 0) {
        return -1;
    }
    return this.arr.shift();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
