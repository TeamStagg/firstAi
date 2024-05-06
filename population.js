class Population{
    population = []

    bestBrain(){
        let highestScore = -1
        let finalBrain
        for(let i in this.population){
            if(this.population[i].score > highestScore){
                highestScore = this.population[i].score
                finalBrain = this.population[i].brain
            }
        }
        return {score: highestScore, brain: finalBrain}
    }
}