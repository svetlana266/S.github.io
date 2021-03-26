let turn = 'X'
const canvas = document.querySelector('canvas')
const t_w = canvas.width /3
const t_h = canvas.height /3
const ctx = canvas.getContext ('2d')
const grid = new Path2D()

grid.moveTo(0, 100)
grid.lineTo(300, 100)

grid.moveTo(0, 200)
grid.lineTo(300,200)

grid.moveTo(100,0)
grid.lineTo(100,300)

grid.moveTo(200,0)
grid.lineTo(200,300)

ctx.strokeStyle ='white'
ctx.lineWidth = 2
ctx.stroke(grid)

canvas.addEventListener

('click', (e) =>
{

putSym (
Math.floor(e.offsetX / t_w),
Math.floor(e.offsetY /t_h)
    )
    turn = (turn === 'X'? 'O': 'X')
    if (turn == 'X')
    {
turn === 'O'
    }
    else
{
  turn == 'X'
}
})





function putSym

(x,y)
{
 ctx.font='$ { t_w * 0.9} px Arial'
ctx.fillStyle = 'red'
ctx.textAlign = 'center'
ctx.textBaseline = 'middle'
ctx.fillText (turn, t_w * x + t_w/2, t_h * y + t_h / 2)
}
