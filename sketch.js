// P5.js Sketch
// This is your main sketch file - edit this to create your p5.js projects!

// Array to store mouse click positions
let mouseClicks = [];

function setup() {
  // Create canvas and set initial settings
  createCanvas(800, 600);
  background(220);

  // Set color mode to RGB
  colorMode(RGB);

  console.log("P5.js sketch loaded successfully!");
}

function draw() {
  // Clear background each frame
  background(220, 220, 240);

  // Draw a simple animated circle
  let time = millis() * 0.001; // Convert to seconds

  // Create a pulsing circle
  let pulse = sin(time * 2) * 50 + 100;
  fill(100, 150, 255, 150);
  noStroke();
  ellipse(width / 2, height / 2, pulse, pulse);

  // Draw some moving particles
  for (let i = 0; i < 5; i++) {
    let x = width / 2 + cos(time + i) * 200;
    let y = height / 2 + sin(time + i) * 200;

    fill(255, 100 + i * 30, 100, 200);
    ellipse(x, y, 20, 20);
  }

  // Draw all mouse click circles
  for (let click of mouseClicks) {
    fill(255, 0, 0, 100);
    noStroke();
    ellipse(click.x, click.y, 50, 50);
  }

  // Add some text
  fill(50);
  textAlign(CENTER);
  textSize(24);
  text("Welcome to P5.js!", width / 2, 50);

  textSize(16);
  text("Edit this file to create your own sketches", width / 2, height - 30);
}

// Optional: Handle mouse interactions
function mousePressed() {
  console.log("Mouse pressed at:", mouseX, mouseY);

  // Store the mouse click position
  mouseClicks.push({ x: mouseX, y: mouseY });
}

// Optional: Handle key presses
function keyPressed() {
  if (key === " ") {
    // Spacebar pressed - clear all mouse clicks
    mouseClicks = [];
    console.log("All circles cleared!");
  }
}
