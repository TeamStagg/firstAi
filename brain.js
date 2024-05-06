class RedNode{
    //compare symbol >, <, =
    constructor(weight, compareNodes, compareSymbol, output){
        this.weight = weight
        this.compareNodes = compareNodes
        this.compareSymbol = compareSymbol
        this.output = output
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

let brain = new Brain([90,500,20,2000])
brain.networkSetup()
console.log(brain.network)

let nextSet = []

let outputs = ["stopLeft", "Left", "stopRight", "Right", "Jump", "stopJump"]

for(let i = 0; i < 6; i++){
    let red = new RedNode(Math.random(), [[0,Math.floor(Math.random() * 4)],[0,Math.floor(Math.random() * 4)]], Math.floor(Math.random() * 3), outputs[Math.floor(Math.random() * 6)])
    nextSet.push(red)
}

brain.network.push(nextSet)

for(let i = 0; i < nextSet.length; i++){
    console.log(nextSet[i])
}

let outputPercent = []

for(let i = 0; i < brain.network[1].length; i++){
    let compare1 = brain.network[brain.network[1][i].compareNodes[0][0]][brain.network[1][i].compareNodes[0][1]]
    let compare2 = brain.network[brain.network[1][i].compareNodes[1][0]][brain.network[1][i].compareNodes[1][1]]
    console.log(brain.network[1][i].Node(compare1, compare2))
    if(brain.network[1][i].Node(compare1, compare2)){
        outputPercent.push({output : brain.network[1][i].output, weight: brain.network[1][i].weight})
    }
}
console.log(outputPercent)
let totalWeight = 0
for(let i in outputPercent){
    totalWeight += outputPercent[i].weight
}

let chosenWeight = Math.random() * totalWeight
console.log(chosenWeight)

for(let i = 0; i < outputPercent.length; i++){
    if(outputPercent[i].weight > chosenWeight){
        console.log("in")
        console.log(outputPercent[i].output)
        break
    }
    else{
        chosenWeight -= outputPercent[i].weight
        console.log("LOWERED TOTAL WEIGH")
        console.log(chosenWeight)
    }
}