// 翻车了 = =

let yanhuaDiv = document.createElement('canvas')
yanhuaDiv.id = 'yanhuaCanvas'
yanhuaDiv.style.height = '100vh'
yanhuaDiv.style.width = '100vw'
yanhuaDiv.style.position = 'absolute'
yanhuaDiv.style.top = '0'
yanhuaDiv.style.left = '0'
document.querySelector('body').appendChild(yanhuaDiv)

let yanhuaCanvas = document.getElementById('yanhuaCanvas')
let context = yanhuaCanvas.getContext('2d');

function resizeCanvas() {
  context.width = window.innerWidth;
  context.height = window.innerHeight;
}
resizeCanvas()
function mouseDown (e) {
  const { clientX, clientY } = e

  console.log(clientX, clientY, 11111111)
  createStart(clientX, clientY)
}

// 初始化生成 烟花点
function createStart (x, y) {
  let count = 10 // 烟花数量
  let radius = 10 // 半径

  for (let i = 0; i < count; i++) {
    let angle = 360 / count * i;//烟花粒子角度
    let radians = angle * Math.PI / 180;//烟花粒子弧度

    let vx = x + Math.cos(radians) * radius;
    let vy = y + Math.sin(radians) * radius;

    let size = 2;
    context.beginPath();
    context.arc(vx, vy, size, 0, Math.PI * 2, false)
    context.closePath();
    context.fillStyle = "#ff0000";
    context.fill();
  }
}

// 注册鼠标点击事件
document.addEventListener('mousedown', mouseDown, false)
