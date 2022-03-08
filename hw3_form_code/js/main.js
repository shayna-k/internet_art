let d = 125
let total = 250
let xs = []
let ys = []
let dxs = []
let dys = []

function setup () {
  createCanvas(innerWidth, innerHeight)
  background(0)
  var button = createButton("click me to reset!");
  button.position(innerWidth/2 - 35, 10)
  button.mousePressed(reset);
  for(let i = 0; i < total; i++) {
    xs.push(random(0, innerWidth))
    ys.push(innerHeight/2)
    dxs.push(random(-2,2))
    dys.push(random(-2,2))
  }
}

function overlaps (x, y) {
  stroke(random(60,255), random(60,255), random(60,255))
  for (let i = 0; i < total; i++) {
    let distance = dist(x, y, xs[i], ys[i])
    if (distance < d) { line(x, y, xs[i], ys[i]) }
  }
}

function draw() {
  for (let i = 0; i < total; i++) {
    background(random(50,100), random(50,100), random(50,100), 2)
    xs[i] += dxs[i]
    ys[i] += dys[i]
    fill(random(50,255), random(50,255), random(50,255))
    ellipse(xs[i], ys[i], 10)
    if (ys[i] > height - d/3 || ys[i] < d/3) { dys[i] *= -1 }
    if ( xs[i] > width - d/3 || xs[i] < d/3) { dxs[i] *= -1 }
    overlaps(xs[i], ys[i])
  }
}

function reset () {
  xs = []
  ys = []
  dxs = []
  dys = []
  for (let i = 0; i<total; i++){
    xs.push(random(0, innerWidth))
    ys.push(innerHeight/2)
    dxs.push(random(-2,2))
    dys.push(random(-2,2))
  }
  draw()
}