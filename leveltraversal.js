class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}
var root= null;

function printLevelOrder() {
    var h = height(root);
    var i;
    for (i = 1; i <= h; i++)
        printCurrentLevel(root, i);
}

function height(root) {
    if (root == null)
        return 0;
    else {
        var lheight = height(root.left);
        var rheight = height(root.right);

        /* use the larger one */
        if (lheight > rheight)
            return (lheight + 1);
        else
            return (rheight + 1);
    }
}

function printCurrentLevel(root , level) {
    if (root == null)
        return;
    if (level == 1)
        console.log(root.data + " ");
    else if (level > 1) {
        printCurrentLevel(root.left, level - 1);
        printCurrentLevel(root.right, level - 1);
    }
}
    root = new Node(9);
    root.left = new Node(8);
    root.right = new Node(7);
    root.left.left = new Node(6);
    root.left.right = new Node(5);

   console.log("Level order traversal of  binary tree is ");
   printLevelOrder();