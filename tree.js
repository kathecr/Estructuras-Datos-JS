class Node{
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
class BinaryTree{
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value);
    if(this.root === null){
      this.root = newNode;
    } else{      
      let currentNode = this.root
      while(true){
        if(value < currentNode.value){
          if(!currentNode.left){   
            currentNode.left = newNode //Ejecuta si es null
            return this            
          }
            currentNode = currentNode.left //Ejecuta si no es null
        }else {
          if(!currentNode.right){             
            currentNode.right = newNode //Ejecuta si es null
            return this            
          }
            currentNode = currentNode.right     //Ejecuta si no es null     
        }
      }
    }
  }
  search(value){
    let currentNode = this.root
    while(true){
      if(currentNode == null){
        return false
      }else if(value < currentNode.value){
        currentNode = currentNode.left
      }else if(value > currentNode.value){
        currentNode = currentNode.right
      }else{
        return true
      }
    }
  }
}

const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(4);
binaryTree.insert(2);
binaryTree.insert(8);
binaryTree.insert(20);
binaryTree.insert(17);
binaryTree.insert(170);