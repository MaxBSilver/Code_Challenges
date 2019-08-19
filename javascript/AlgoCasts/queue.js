class Queue {
	constructor () {
		this.queue = [];
	}
	add (num) {
		this.queue.push(num);
	}
	remove () {
		return this.queue.shift();
	}
}

module.exports = Queue;
