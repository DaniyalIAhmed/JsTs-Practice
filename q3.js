/**
 * Question 3
 * Linked List creation
 */

/**
 * Represents a singly linked list node.
 */
class Node {
    /**
     * @type {number}
     */
    value;
    /**
     * @type {Node|null}
     */
    next;
    constructor(value) {
        this.value = value;
        this.next = null;
    };
}

class LinkedList {
    /**
     * @type {Node}
     */
    head;
    /**
     * @param {number} value
     * @return {void}
     */
    push(value) {
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = new Node(value);
    }
    pop() {
        let temp = this.head;
        let nodeToDelete;
        while (temp.next != null) {
            nodeToDelete = temp;
            temp = temp.next;
        }
        nodeToDelete.next = null;
    }
}