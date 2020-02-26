let CANVAS = document.getElementById("display")
//console.log(canvas)
CANVAS.width = document.body.clientWidth
CANVAS.height = document.body.clientHeight

let CTX = CANVAS.getContext("2d")
//console.log(CTX)

function ERASE() {
CTX.fillStyle = "green"
CTX.fillRect(0, 0, CANVAS.width, CANVAS.height)
}

let GRIDSIZE = CANVAS.height / 12