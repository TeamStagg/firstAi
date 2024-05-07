class Population {
    scoredPopulation = []
    population = []

    fillPopulation(popAmount, mutateBool, modelBrain) {
        this.population = []
        this.scoredPopulation = []
        for (let i = 0; i < popAmount; i++) {
            if (!mutateBool) {
                let brain = new Brain([0,0,0,0])
                brain.networkSetup()
                brain.newRow()

                this.population.push(brain)
            }
            else{
                let brain = modelBrain
                if(this.population.length == 0){
                    this.population.push(brain)
                }
                else{
                    brain = this.mutate(modelBrain)
                    this.population.push(brain)
                }
            }
        }
    }

    bestBrain() {
        let highestScore = -1.5
        let finalBrain
        for (let i = 0; i < this.scoredPopulation.length; i++) {
            if (this.scoredPopulation[i].score > highestScore) {
                highestScore = this.scoredPopulation[i].score
                finalBrain = this.scoredPopulation[i].brain
            }
        }
        return { score: highestScore, brain: finalBrain }
    }
    score(plat, maxPlat) {
        return (plat * 1) + (maxPlat * .5)
    }
    mutate(modelBrain) {
        let outputs = ["stopLeft", "Left", "stopRight", "Right", "Jump", "stopJump"]
        let brain1 = modelBrain
        
        let rand1 = Math.random()
        let rand2 = Math.floor(Math.random() * modelBrain.network[0].length)
        let rand3 = Math.floor(Math.random() * modelBrain.network[0].length)
        let rand4 = Math.floor(Math.random() * 3)
        let rand5 = outputs[Math.floor(Math.random() * 6)]

        console.log(rand1, rand2, rand3, rand4, rand5)

        let red = new RedNode(rand1, [[0, rand2], [0, rand3]], rand4, rand5)

        console.log(red)

        brain1.network[1][this.population.length % brain1.network[0].length] = red
        return brain1
    }
}