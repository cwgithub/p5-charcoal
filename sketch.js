//////////////////////////////////////////////////
// Object for creation and real-time resize of canvas
// Good function to create canvas and resize functions. I use this in all examples.
const C = {
  loaded: false,
  prop() {
    return this.height / this.width;
  },
  isLandscape() {
    return window.innerHeight <= window.innerWidth * this.prop();
  },
  resize() {
    if (this.isLandscape()) {
      console.log("isLandscape");
      document.getElementById(this.css).style.height = "100%";
      document.getElementById(this.css).style.removeProperty("width");
    } else {
      document.getElementById(this.css).style.removeProperty("height");
      document.getElementById(this.css).style.width = "100%";
    }
  },
  setSize(w, h, p, css) {
    (this.width = w), (this.height = h), (this.pD = p), (this.css = css);
  },
  createCanvas() {
    (this.main = createCanvas(this.width, this.height, WEBGL)),
      pixelDensity(this.pD),
      this.main.id(this.css),
      this.resize();
  },
};
C.setSize(1000, 1000, 2, "mainCanvas");

function windowResized() {
  C.resize();
}

const palettes = [
  ["#ff9a8b", "#ff6a88", "#ff99ac", "#ffb6c1", "#ffcad4"],  // sunset: 
  ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"],  // ocean: 
  ["#ff00ff", "#ff8800", "#ffcc00", "#00ffcc", "#8800ff"],  // neon: 
  ["#a8dadc", "#f1faee", "#457b9d", "#1d3557", "#e63946"],  // pastel: 
  ["#2b2d42", "#8d99ae", "#edf2f4", "#ef233c", "#d90429"],  // forest: 
  ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"],  // retro: 
  ["#F8FAFC", "#D9EAFD", "#BCCCDC", "#9AA6B2", "#F14A00"],  // chris: 
  ["#9CFA08", "#9CFA08", "#9CFA08", "#9CFA08", "#9CFA08"],  // greens: 
];


let colors = [];
let seeds = [];

function setup() {
  C.createCanvas();
  angleMode(DEGREES);
  brush.scale(1.3);
  for (let i = 0; i < 150; i++) seeds.push(random());
  // background("#fffceb");
  background("#F78A11");
  frameRate(10)
}

function draw() {

  let colors = palettes[0];
  let brushes = [
    "marker",
    "spray",
    // "charcoal",
    // "HB",
    // "2B",
    "cpencil",
    // "2H",
    // "rotring",
  ];

  brush.field("seabed");

  const color = random(colors);

  let rows = [-100, 0, 100];
  let cols = [-100, 0, 100];

  let minLen = 100;
  let maxLen = 120;

  for (let y = 0; y < rows.length; y++) {
    for (let x = 0; x < cols.length; x++) {
      brush.set(random(brushes), color, random(0.7, 1.6));
      brush.flowLine(
        cols[x] + random(-20, 20),
        rows[y] + random(-20, 20),
        random(minLen, maxLen),
        random(360)
      );
    }
  }


   rows = [-100, 0, 100];
   cols = [-100, 0, 100];

   minLen = 50;
   maxLen = 70;

  for (let y = 0; y < rows.length; y++) {
    for (let x = 0; x < cols.length; x++) {
      brush.set(random(brushes), color, random(0.7, 1.6));
      brush.flowLine(
        cols[x] + random(-10, 10),
        rows[y] + random(-10, 10),
        random(minLen, maxLen),
        random(360)
      );
    }
  }


}
