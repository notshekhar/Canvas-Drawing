let canvas = document.querySelector('#canvas')
canvas.height = window.innerHeight
canvas.width = window.innerWidth
window.onresize = () =>{
  canvas.height = window.innerHeight
  canvas.width = window.innerWidth
}
let ctx = canvas.getContext("2d")
ctx.strokeStyle = "#BADA55"
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
let lastX = 0
let lastY = 0
let drawing = false
let hue = 0
let max_min = 100
let min_max = 0
canvas.onmousedown = e =>{
  lastX = e.offsetX
  lastY = e.offsetY
  drawing = true
}
canvas.onmouseup = ()=>{
  drawing = false
}
canvas.onmouseout = ()=>{
  drawing = false
}
canvas.onmousemove = e =>{
  if(drawing){
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    if(max_min<101 && max_min>-1){
      ctx.lineWidth = max_min
    }else{
      ctx.lineWidth = min_max
      min_max++
      if(min_max>100){
        min_max = 0
        max_min = 100
      }
    }
    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
    lastX = e.offsetX
    lastY = e.offsetY
    hue++
    max_min--
  }else{
    return
  }
}
