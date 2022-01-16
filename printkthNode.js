class node {
 
    constructor()
    {
        this.data = 0;
        this.left = null;
        this.right = null;
    }
};
function newNode(data)
{
    var temp = new node();
    temp.data = data;
    temp.left = null;
    temp.right = null;
    return temp;
}
function nodesAtKthLevel(root, k){
   
    if (root == null)
        return;
    var que = [];
    que.push(root);
    var s = new Set();
    var level = 0;
    var flag = 0;
    while (que.length != 0) {
        var size = que.length;
        while (size-- > 0) {
            var ptr = que[0];
            que.shift();
            if (level == k) {
                flag = 1;
                s.add(ptr.data);
            }
            else {
                if (ptr.left != null)
                    que.push(ptr.left);
                if (ptr.right != null)
                    que.push(ptr.right);
            }
        }
        level++;
   
        if (flag == 1)
            break;
    }
    for(var it of s) {
        console.log(it+ " ");
    }
}
var root = new node();
 
// Tree Construction
root = newNode(90);
root.left = newNode(80);
root.right = newNode(70);
root.left.left = newNode(60);
root.left.right = newNode(50);
root.right.left = newNode(40);
var level = 1;
nodesAtKthLevel(root, level);