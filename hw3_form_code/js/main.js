//trial 1


// function setup() {
//   createCanvas(innerWidth, innerHeight)  //, WEBGL
//   background(0)
//   // let x = width / 2
//   // let y = height / 2
//   // let r = width / 2
//   // ellipse(x, y, r)
// }

// // function mouseMoved() {
// //   let x = mouseX
// //   let y = mouseY
// //   // const arr = [10,20,30,40,50]
// //   // let d = get_random(arr)
// //   let d = mouseX/3
  
// //   let r = map(mouseX, 0, width, 0, 255)
// //   let g = map(mouseY, 0, height, 0, 255)
// //   fill(250, g, r)
// //   ellipse(x, y, d)
// //   // sphere(mouseX, mouseY, width/8)

// // // }

// let x = innerWidth/2
// let y = innerHeight/2
// let dx = 10
// let dy = 10
// function draw () {
//   background(0)
//   // let x = mouseX
//   // let y = mouseY
//   x+=dx
//   y+=dy
//   let d = width/6
  
//   let r = map(mouseX, 0, width, 0, 255)
//   let g = map(mouseY, 0, height, 0, 255)

//   if (y > height - d/2 || y < d/2) { 
//     dy *= -1
//     // r = map(mouseX, 0, width, 0, 255)
//     r = random(0, 255)
//     b = random(0, 255) 
//     fill(r, 100, b)
//     // ellipse(x, y, d)
//   }
//   if (x > width - d/2 || x < d/2){ 
//     dx *= -1 
//     // g = map(mouseY, 0, height, 0, 255) 
//     g = random(0, 255)

//     fill(250, g, r)
//     // ellipse(x, y, d)
//   }
//   // if (mouseIsPressed) {
  
//   // let r = map(mouseX, 0, width, 0, 255)
//   // let g = map(mouseY, 0, height, 0, 255)
//   // fill(250, g, r)
//     ellipse(x, y, d)

//   // }
  


// }
// // function mousePressed(){
// //   if (value === 0) {
// //     value = 255;
// //   } else {
// //     value = 0;
// //   }
// // }



//trial 2

let d = 70
let total = 300
let xs = []
let ys = []
let dxs = []
let dys = []

function setup () {
  createCanvas(innerWidth, innerHeight)
  background(0)
  for(let i = 0; i < total; i++) {
    xs.push(random(0, innerWidth))
    // ys.push(random(0, innerHeight))
    ys.push(innerHeight/2)

    dxs.push(random(-2,2))
    dys.push(random(-2,2))
  }
}

function overlaps (x, y) {
  stroke(random(60,255), random(60,255), random(60,255))
  for (let i = 0; i < total; i++) {
    // if (mousePressed) {background(0, 0, 0, 2)}
    let distance = dist(x, y, xs[i], ys[i])
    if (distance < d) {
      line(x, y, xs[i], ys[i])
    }
  }
}

function draw() {
  // background(0, 0, 0, 10)
  for (let i = 0; i < total; i++) {
    background(random(50,100), random(50,100), random(50,100), 10)
    xs[i] += dxs[i]
    ys[i] += dys[i]
    // ellipse(xs[i], ys[i], d)//random(width/6, width/3))
    if (ys[i] > height || ys[i] < 0){
      dys[i] *= -1
    }
    if (xs[i] > width || xs[i] < 0){
      dxs[i] *= -1
    }
    overlaps(xs[i], ys[i])
  }
}
