let ctx
// let platformPrint = ""
let player

let platforms = [
    [106,486,100,10],
    [210,458,100,10],
    [315,416,100,10],
    [384,372,100,10],
    [277,334,100,10],
    [161,307,100,10],
    [77,247,100,10],
    [170,188,100,10],
    [293,167,100,10],
    [405,146,100,10],
    [262,117,100,10],
    [135,75,100,10],
    [11,73,100,10],
]

class Player {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    grounded = true
    vy = 0

    left = false
    right = false
    jump = false

    onPlatform = -1

    checkGrounded(){
        for(let i in platforms){
            if(this.y >= 490){
                this.onPlatform = -1
                return true
            }
            if(platforms[i][0] < this.x + 10 && platforms[i][0] + 100 > this.x && platforms[i][1] + 10 >= this.y + 10 && platforms[i][1] - 2 < this.y + 10){
                this.onPlatform = i
                return true
            }
            else{

            }
        }
        return false
    }
};


// document.addEventListener('click', function(event){
//     console.log(event.clientX-8)
//     console.log(event.clientY-8)
//     platforms.push([event.clientX-8, event.clientY-8, 100, 10])
//     setTimeout(() => {
//         printCanvas()
//     }, 500);

    
// })

document.addEventListener('keydown', function(event){
    if(event.key == "a"){
        player.left = true
    }
    if(event.key == "d"){
        player.right = true
    }
    if(event.key == "w"){
        player.jump = true
    }
})

document.addEventListener('keyup', function(event){
    if(event.key == "a"){
        player.left = false
    }
    if(event.key == "d"){
        player.right = false
    }
    if(event.key == "w"){
        player.jump = false
    }
})


function printCanvas() {
    ctx.fillStyle = "rgb(100,50,50)"
    ctx.fillRect(platforms[0][0], platforms[0][1], platforms[0][2], 10)
    for (let i in platforms) {
        ctx.fillRect(platforms[i][0], platforms[i][1], platforms[i][2], 10)
    }
    // platformPrint += "[" + platforms[platforms.length-1] + "]"
}

function update(){
    ctx.fillStyle = "rgb(255,255,255)"
    ctx.fillRect(0,0,500,500)

    // ~+3 drawing the stuffs
    printCanvas()
    ctx.fillStyle = "rgb(0,0,0)"
    ctx.fillRect(player.x, player.y, 10, 10)

    if(!player.checkGrounded()){
        if(player.vy < 10){
            player.vy ++
        }
    }
    else{
        player.vy = 0
        if(player.onPlatform >= 0){
            player.y = platforms[player.onPlatform][1] - 10
        }
    }

    if(player.left){
        player.x -= 5
    }
    if(player.right){
        player.x += 5
    }
    if(player.checkGrounded() && player.jump){
        player.vy = -10
    }

    player.y += player.vy

    setTimeout(() => {
        update()
    }, 30);
}

function start() {
    player = new Player(0, 490)
    let canvas = document.getElementById("canvas")

    canvas.height = 500
    canvas.width = 500
    ctx = canvas.getContext('2d')
    ctx.fillStyle = "rgb(100,50,50)"
    update(player)
}