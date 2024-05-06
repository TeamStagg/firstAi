class RedNode{
    //compare symbol >, <, =
    constructor(weight, compareNodes, compareSymbol){
        this.weight = weight
        this.compareNodes = compareNodes
        this.compareSymbol = compareSymbol
    }

    Node(v1, v2){
        switch(this.compareSymbol){
            case 0:
                return v1 > v2
            case 1:
                return v1 < v2
            case 2:
                return Math.abs(v1 - v2) < 20
        }
    }
}

class BlueNode{
    constructor(compareNodes, compareSymbol){
        this.compareNodes = compareNodes
        this.compareSymbol = compareSymbol
    }
}

class Brain{
    constructor(inputs){
        this.inputs = inputs
        this.inputNum = inputs.length
    }

    networkSetup(){
        this.network = [
            this.inputs
        ]
    }
}

let brain = new Brain([5,2,4,2])
brain.networkSetup()
console.log(brain.network)

let red1 = new RedNode(Math.random(), [[0,Math.floor(Math.random() * 4)],[0,Math.floor(Math.random() * 4)]],Math.floor(Math.random() * 3))
let red2 = new RedNode(Math.random(), [[0,Math.floor(Math.random() * 4)],[0,Math.floor(Math.random() * 4)]],Math.floor(Math.random() * 3))
let red3 = new RedNode(Math.random(), [[0,Math.floor(Math.random() * 4)],[0,Math.floor(Math.random() * 4)]],Math.floor(Math.random() * 3))
let red4 = new RedNode(Math.random(), [[0,Math.floor(Math.random() * 4)],[0,Math.floor(Math.random() * 4)]],Math.floor(Math.random() * 3))
brain.network.push([red1, red2, red3, red4])

console.log(red1)
console.log(red2)
console.log(red3)
console.log(red4)

for(let i = 0; i < brain.network[1].length; i++){
    let compare1 = brain.network[brain.network[1][i].compareNodes[0][0]][brain.network[1][i].compareNodes[0][1]]
    let compare2 = brain.network[brain.network[1][i].compareNodes[1][0]][brain.network[1][i].compareNodes[1][1]]
    console.log(brain.network[1][i].Node(compare1, compare2))
}