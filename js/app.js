const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let topTriangleFilled = false
let bottomTriangleFilled = false

function drawTriangle(ctx, x1, y1, x2, y2, x3, y3, color, lineWidth) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.lineTo(x3, y3)
    ctx.closePath()
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = color
    ctx.stroke()

    if (color === 'blue' && topTriangleFilled) {
        ctx.fillStyle = 'blue'
        ctx.fill()
    } else if (color === 'red' && bottomTriangleFilled) {
        ctx.fillStyle = 'red'
        ctx.fill()
    }
}

drawTriangle(ctx, 100, 0, 0, 100, 200, 100, 'blue', 1)

drawTriangle(ctx, 100, 225, 0, 125, 200, 125, 'red', 1)

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    if (y < 100) {
        topTriangleFilled = !topTriangleFilled
        bottomTriangleFilled = false 
    } else {
        bottomTriangleFilled = !bottomTriangleFilled
        topTriangleFilled = false 
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    drawTriangle(ctx, 100, 0, 0, 100, 200, 100, 'blue', 1)
    drawTriangle(ctx, 100, 225, 0, 125, 200, 125, 'red', 1)
})