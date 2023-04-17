var song
var fft
var particles = []
var img
var play
var pause
var mtP
var o = 255
let yoff = 0.0;
let yoff2 = 0.0;
let yoff3 = 0.0;
let yoff4 = 0.0;
let yoff5 = 0.0;

function preload(){
  song = loadSound("/assets/Persona 5  Life Will Change.mp3")
  img = loadImage("assets/bg.jpeg")
  play = loadImage("assets/play.png")
  mtP = loadImage("assets/play.png")
  pause = loadImage("assets/pause.png")
}

function mouseClicked(){
  if (song.isPlaying()){
    song.pause()
    // noLoop()
    o = 254
    if(o<= 0){
      o = 255
    }
    pause = mtP
    mtP = play
    play = pause
  }
  else{
    song.play()
    loop()
    o = 254
    if(o<= 0){
      o = 255
    }
    play = mtP
    mtP = pause
    pause = play
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
  rectMode(CENTER)
  img.filter(BLUR, 1)
  song.setVolume(0.3)
  fft = new p5.FFT(0.5)
  
}

function draw() {
  background(0);
  
  translate(width / 2, height / 2);
  
  fft.analyze()
  amp = fft.getEnergy(20, 200)
  
  var wave = fft.waveform()
  
  push()
  angleMode(DEGREES)
  if(amp> 180){
    scale(1.01)
    rotate(-0.3, 0.3)
  }
  
  const ap = width / height;
  const bp = img.width / img.height;
  
  let w,h;
  
  if(ap<bp){
    w = width;
    h = img.height * (width/ img.width);
  }
  
  else{
    h = height
    w = img.width * (height/ img.height)
  }
  tint(255,255)
  image(img, 0, 0, w, h)
  
  var alpha = map(amp, 0, 255, 220, 50)
  fill(0, alpha+50)
  noStroke()
  rect(0, 0, w, h)
  pop()
  
  if(o<= 254){
    o -= 10
  }
  print(o)
  
  tint(255,o)
  image(play, 0, 0, play.width/3, play.height/3)
  
  
  push()
  stroke(255,0,0)
  noFill()
  strokeWeight(random(20,25))
  angleMode(DEGREES)


  for (var t = -1; t <= 1;t +=2){
    beginShape()
  for(var i = 0; i<= 180; i+= 0.5){
    var index = floor(map(i, 0, 180, 0, wave.length - 1))

    var ri = map(wave[index], -1, 1, 150, 350)

    var xi = ri * sin(i) * t
    var yi = ri * cos(i)
    vertex(xi,yi)
  }
  endShape()
  }

  pop()
  push()
  stroke(0,0,0)
  noFill()
  strokeWeight(random(10,15))
  angleMode(DEGREES)

  // var wave = fft.waveform()

  for (var t = -1; t <= 1;t +=2){
    beginShape()
  for(var i = 0; i<= 180; i+= 0.5){
    var index = floor(map(i, 0, 180, 0, wave.length - 1))

    var ri = map(wave[index], -1, 1, 150, 350)

    var xi = ri * sin(i) * t
    var yi = ri * cos(i)
    vertex(xi,yi)
  }
  endShape()
  }

  pop()
  
// ==============
  
  push()
  angleMode(RADIANS)
  var radius = 150;

  beginShape();
  let xoff = 0;
  for (var a = 0; a < TWO_PI; a += 0.1) {
    let offset = map(noise(xoff, yoff), 0, 1, -25, 25);
    let r = radius + offset;
    let x = r * cos(a);
    let y = r * sin(a);
    noFill()
    stroke(0,0,0,200)
    // stroke(0)
    strokeWeight(random(20,25))
    scale(1+ (frameCount%80)/2000)
    vertex(x, y);
    xoff += 0.1;
    
  }
  endShape();

  yoff += 0.01;
  pop()
// ======
  push()
  var radius2 = 100;

  beginShape();
  let xoff2 = 0;
  for (var a = 0; a < TWO_PI; a += 0.1) {
    let offset2 = map(noise(xoff2, yoff2), 0, 1, -25, 25);
    let r2 = radius2 + offset2;
    let x2 = r2 * cos(a);
    let y2 = r2 * sin(a);
    noFill()
    stroke(200,0,0,200)
    // stroke(0)
    strokeWeight(random(18,22))
    scale(1+ (frameCount%100)/2000)
    vertex(x2, y2);
    xoff2 += 0.1;
    
  }
  endShape();

  yoff2 += 0.01;
  pop()
// ======
  push()
  var radius3 = 50;

  beginShape();
  let xoff3 = 0;
  for (var a = 0; a < TWO_PI; a += 0.1) {
    let offset3 = map(noise(xoff3, yoff3), 0, 1, -5, 5);
    let r3 = radius3 + offset3;
    let x3 = r3 * cos(a);
    let y3 = r3 * sin(a);
    noFill()
    stroke(200,0,0,200)
    // stroke(0)
    strokeWeight(random(15,18))
    scale(1+ (frameCount%120)/2000)
    vertex(x3, y3);
    xoff3 += 0.1;
    
  }
  endShape();

  yoff3 += 0.01;
  pop()
// ======
  push()
  var radius4 = 10;

  beginShape();
  let xoff4 = 0;
  for (var a = 0; a < TWO_PI; a += 0.1) {
    let offset4 = map(noise(xoff4, yoff4), 0, 1, -1, 1);
    let r4 = radius4 + offset4;
    let x4 = r4 * cos(a);
    let y4 = r4 * sin(a);
    noFill()
    stroke(0,0,0,200)
    // stroke(0)
    strokeWeight(random(3,4))
    scale(1+ (frameCount%150)/2000)
    vertex(x4, y4);
    xoff4 += 0.1;
    
  }
  endShape();

  yoff4 += 0.01;
  pop()
// ======
  push()
  var radius5 = 10;

  beginShape();
  let xoff5 = 0;
  for (var a = 0; a < TWO_PI; a += 0.1) {
    let offset5 = map(noise(xoff5, yoff5), 0, 1, -1, 1);
    let r5 = radius5 + offset5;
    let x5 = r5 * cos(a);
    let y5 = r5 * sin(a);
    noFill()
    stroke(200,0,0,200)
    // stroke(0)
    strokeWeight(random(3,4))
    scale(1+ (frameCount%33.3)/1000)
    vertex(x5, y5);
    xoff5 += 0.1;
    
  }
  endShape();

  yoff5 += 0.01;
  pop()

  var p = new Particle()
  particles.push(p)
  
  for(var i = particles.length - 1; i >= 0;i--){
    if (!particles[i].edges()){
      particles[i].update(amp > 180)
      particles[i].show()
    }
    else {
      particles.splice(i, 1)
    }
  }
}


class Particle{
  constructor(){
    this.pos = p5.Vector.random2D().mult(250)
    this.vel = createVector(0, 0)
    this.acc = this.pos.copy().mult(random(0.0001, 0.00001))

    this.w = random(3,5)

    this.color = [random(100,255),0,0]
  }
  update(cond){
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    if(cond){
      this.pos.add(this.vel)
      this.pos.add(this.vel)
      this.pos.add(this.vel)
    }
  }
  edges(){
    if(this.pos.x < -width/ 2|| this.pos.x > width/ 2 ||this.pos.y < -height / 2 ||this.pos.y > height / 2){
      return true
    }
    else{
      return false
    }
  }

  show(){
    noStroke()
    fill(this.color)
    ellipse(this.pos.x, this.pos.y, this.w)
  }
}