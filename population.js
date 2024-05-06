class Population {
    scoredPopulation = []
    population = []

    fillPopulation(popAmount, mutateBool, modelBrain) {
        for (let i = 0; i < popAmount; i++) {
            if (!mutateBool) {
                let brain = new Brain([0,0,0,0])
                brain.networkSetup()
                brain.newRow()

                this.population.push(brain)
            }
            else{
                let brain = modelBrain
                brain = this.mutate(modelBrain)
                
                this.population.push(brain)
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
        let red = new RedNode(Math.random(), [[0, Math.floor(Math.random() * modelBrain.network[0].length)], [0, Math.floor(Math.random() * modelBrain.network[0].length)]], Math.floor(Math.random() * 3), outputs[Math.floor(Math.random() * 6)])
        brain1.network[1][Math.floor(Math.random() * modelBrain.network[1].length)] = red
        return brain1
    }
}