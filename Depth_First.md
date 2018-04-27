### DFS ALGORITHM ###
The DFS algorithm is a recursive algorithm that uses the idea of backtracking. 
It involves exhaustive searches of all the nodes by going ahead, if possible,
else by backtracking.

This recursive nature of DFS can be implemented using stacks. The basic idea is: 
Pick a starting node and push all its neighboring nodes into a stack,
Pop a node from stack to select the next node to visit and push all its adjacent
nodes into a stack.
Repeat this process until the stack is empty. However, ensure that the nodes that 
are visited are marked. This will prevents us from visiting the same node more than 
once. Not marking nodes as visitedresults in a infinite loop

lets say we have a group of nodes represemted as objects
let *Nodes* = {
    {
        node_id: 1,
        visited: false
    },
    {
        node_id: 2,
        visited: false
    },
    {
        node_id: 3,
        visited: false
    }
    ...
}
Each object in the *Nodes* object is adjacent to two other nodes except the root 
node which in this case is the object with node_id: 1
and the end node which will be where ever we decide to terminate our object in 
this case node_id: 3.
To traverse the *Node* object we start at node 1

dfs = start => {
    const listToExplore = [ start ];

    listToExplore.forEach((adjacentNode) => {
        if(adjacentNode.visited){
            //then skip the node
            listToExplore.pop(adjacentNode)            
        }
        else{
            // visit adjacentNodes
            listToExplore.push(adjacentNode)
            adjacentNode.visited = true
            dfs(adjacentNode.pop())
        }
    })
}  

