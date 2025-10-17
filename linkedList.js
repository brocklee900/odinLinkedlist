
import { createNode } from "./node.js";

function createLinkedList(head = null, tail = null) {
    let size = 0;

    function adjustSize(value) {
        size += value;
    }

    function append(value) {
        let node = createNode(value);
        if (head == null && tail == null) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            tail = tail.next;
        }
        adjustSize(1);
    };

    function prepend(value) {
        let node = createNode(value);
        if (head == null && tail == null) {
            head = node;
            tail = node;
        } else {
            node.next = head;
            head = node;
        }
        adjustSize(1);
    };

    function at(index) {
        if (index >= size) {
            return null;
        } else if (index == 1) {
            return head;
        } else {
            let current = head;
            while (index > 0) {
                current = current.next;
                index -= 1;
            }
            return current;
        }
    }

    function pop() {
        if (size == 0) {
            return;
        } else if (size == 1) {
            head = null;
            tail = null;
        } else {
            let index = 0;
            let current = head;
            while (index < size - 2) {
                index += 1;
                current = current.next;
            }
            tail = current;
            tail.next = null;
            adjustSize(-1);
            
        }
    }

    function contains(value) {
        if (size == 0) {
            return false;
        } else {
            let current = head;
            while (current != null) {
                if (current.value == value) {
                    return true;
                }
                current = current.next;
            }
            return false;
        } 
    }

    function find(value) {
        if (size == 0) {
            return null;
        } else {
            let current = head;
            let index = 0;
            while (current != null) {
                if (current.value == value) {
                    return index;
                }
                index += 1;
                current = current.next;
            }
            return null;
        }
    }

    function toString() {
        let current = head;
        let string = "";

        while (current != null) {
            if (current != head) {
                string += " -> ";
            }
            string += `(${current.value})`;
            current = current.next;
        }

        if (string != "") {
            string += " -> ";
        }
        string += "null";

        return string;
    }

    function insertAt(value, index) {
        if (index > size) {
            append(value);
        } else if (index == 0) {
            prepend(value);
        } else {
            let current = head;

            while (current != null && index-1 > 0) {
                current = current.next;
                index -= 1;
            }

            let node = createNode(value);
            let temp = current.next;
            current.next = node;
            node.next = temp;
            adjustSize(1);
        }
    };

    function removeAt(index) {
        if (index >= size) {
            console.log("index out of array scope");
        } else if (index == 0) {
            head = head.next;
            adjustSize(-1);
        } else {
            let previous = head;
            let current = head.next;

            while (current != null && index-1 > 0) {
                previous = current;
                current = current.next;
                index -= 1;
            }
            
            previous.next = current.next;
            adjustSize(-1);
        }
    }


    return {
        append,
        prepend,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
        get head() {
            return head;
        },
        get tail() {
            return tail;
        },
        get size() {
            return size;
        }
    }
};

export { createLinkedList };