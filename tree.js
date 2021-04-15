class Node{
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value
  }
}
class BinaryTree{
  constructor(){
    this.root = null;
  }
  insert(value){
    let newNode = new Node(value);
    if(this.root === null){
      this.root = newNode;
    } else{      
      let currentNode = this.root
      while(true){
        if(value < currentNode.value){
          if(!currenteNode.left){ 
            //Ejecuta si es null
            currentNode.left = newNode 
            return this            
          }//Ejecuta si no es null
            currentNode = currentNode.left
        }else {
          if(!currenteNode.right){ 
            //Ejecuta si es null
            currentNode.right = newNode 
            return this            
          }//Ejecuta si no es null
            currentNode = currentNode.right
          
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
        currenteNode = currenteNode.right
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