import Node from "./Node.js";

class BST {
    #root;

    constructor() {
        this.#root = null;
    }

    add(value) {
        if (this.#root == null) {
            this.#root = new Node(value);
            return true;
        } else {
            return this.insertNode(this.#root, value);
        }
    }

    insertNode(node, value) {
        if (value.lastName < node.value.lastName) {
            if (node.left == null) {
                node.left = new Node(value);
                return true;
            } else {
                return this.insertNode(node.left, value);
            }
        } else {
            if (node.right == null) {
                node.right = new Node(value);
                return true;
            } else {
                return this.insertNode(node.right, value);
            }
        }
    }

    search(lastName) {
        return this.searchNode(this.#root, lastName);
    }

    searchNode(node, lastName) {
        if (node === null || node.value.lastName === lastName) {
            return node;
        } else if (lastName < node.value.lastName) {
            return this.searchNode(node.left, lastName);
        } else {
            return this.searchNode(node.right, lastName);
        }
    }

    inOrder(callback) {
        this.inOrderNode(this.#root, callback);
    }

    inOrderNode(node, callback) {
        if (node == null) return;
        this.inOrderNode(node.left, callback);
        callback(node.value);
        this.inOrderNode(node.right, callback);
    }
    
    min() {
        return this.minNode(this.#root);
    }
    
    minNode(node) {
        if (node != null && node.left != null) 
            return this.minNode(node.left);
        else return node;
    }
    
    max() {
        return this.maxNode(this.#root);
    }
    
    maxNode(node) {
        if (node != null && node.right != null) 
            return this.maxNode(node.right);
        else return node;
    }
}

export default BST;
