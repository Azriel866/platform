
window.addEventListener("keydown", event => {
	let colorIndex = Math.random()
	let color = "red"
	if (colorIndex < 0.3) {
		color = "blue"
	}
	if (colorIndex > 0.6) {
		color = "orange"
	}
	ctx.fillStyle = color

	let x = Math.random() * canvas.width
	let y = Math.random() * canvas.height
	let width = Math.random() * canvas.width
	let height = Math
	new Shape(x, y, 200, 100).draw()
})