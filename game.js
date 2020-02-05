let hero = new Hero()
let shapes = []
ERASE()
hero.draw()

window.addEventListener("keydown", event => {
	console.log(event.code)
	if (event.code === 'KeyS'){
		let colorIndex = Math.random()
		let color = "red"
		if (colorIndex < 0.3) {
			color = "blue"
		}
		if (colorIndex > 0.6) {
			color = "orange"
		}
		CTX.fillStyle = color

		let x = Math.random() * CANVAS.width
		let y = Math.random() * CANVAS.height
		let width = Math.random() * CANVAS.width
		let height = Math.random() * CANVAS.height
		
		let s = new Shape(x, y, width, height)
		shapes.push(s)
	}
	if (event.code === "ArrowRight") {
		hero.moveRight()
	}
	
	ERASE()

	console.log(shapes)
	
	shapes.forEach(s => s.draw())

	hero.draw()
})