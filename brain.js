class RedNode {
    //compare symbol >, <, =
    constructor(weight, compareNodes, compareSymbol, output) {
        this.weight = weight
        this.compareNodes = compareNodes
        this.compareSymbol = compareSymbol
        this.output = output
    }

    Node(v1, v2) {
        switch (this.compareSymbol) {
            case 0:
                return v1 > v2
            case 1:
                return v1 < v2
            case 2:
                return Math.abs(v1 - v2) < 20
        }
    }
}

class Brain {
    constructor(inputs) {
        this.inputs = inputs
        this.inputNum = inputs.length
    }

    networkSetup() {
        this.network = [
            this.inputs
        ]
    }
    newRow() {
        let nextSet = []

        let outputs = ["stopLeft", "Left", "stopRight", "Right", "Jump", "stopJump"]

        for (let i = 0; i < 6; i++) {
            let red = new RedNode(Math.random(), [[0, Math.floor(Math.random() * 4)], [0, Math.floor(Math.random() * 4)]], Math.floor(Math.random() * 3), outputs[Math.floor(Math.random() * 6)])
            nextSet.push(red)
        }

        this.network.push(nextSet)
    }

    calculateNext() {
        let outputPercent = []
        //
        for (let i = 0; i < this.network[1].length; i++) {
            let compare1 = this.network[this.network[1][i].compareNodes[0][0]][this.network[1][i].compareNodes[0][1]]
            let compare2 = this.network[this.network[1][i].compareNodes[1][0]][this.network[1][i].compareNodes[1][1]]
            console.log(this.network[1][i].Node(compare1, compare2))
            if (this.network[1][i].Node(compare1, compare2)) {
                outputPercent.push({ output: this.network[1][i].output, weight: this.network[1][i].weight })
            }
        }

        if(outputPercent.length == 0){
            return null
        }

        console.log(outputPercent)
        let totalWeight = 0
        for (let i in outputPercent) {
            totalWeight += outputPercent[i].weight
        }

        let chosenWeight = Math.random() * totalWeight
        console.log(chosenWeight)

        for (let i = 0; i < outputPercent.length; i++) {
            if (outputPercent[i].weight > chosenWeight) {
                console.log("in")
                console.log(outputPercent[i].output)
                return outputPercent[i].output
            }
            else {
                chosenWeight -= outputPercent[i].weight
                console.log("LOWERED TOTAL WEIGH")
                console.log(chosenWeight)
            }
        }
    }
}

let brain = new Brain([90, 500, 20, 2000])
brain.networkSetup()
console.log(brain.network)

brain.newRow()
brain.calculateNext()