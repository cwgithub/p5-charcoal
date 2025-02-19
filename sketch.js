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
      console.log("yes");
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

let palette = ["#002185", "#003c32", "#fcd300", "#ff2702", "#6b9404"];
let colors = [];
let seeds = [];

function setup() {
  C.createCanvas();
  angleMode(DEGREES);
  brush.scale(1.3);
  for (let i = 0; i < 150; i++) seeds.push(random());
  background("#fffceb");
}

function draw() {
  const scene = 0;

  let colors = [
    "#2c695a",
    "#4ad6af",
    "#7facc6",
    // "#4e93cc",
    // "#f6684f",
    // "#ffd300",
  ];
  let brushes = [
    "marker",
    // "spray",
    "charcoal",
    // "HB",
    // "2B",
    // "cpencil",
    // "2H",
    // "rotring",
  ];

  brush.field("seabed");
  brush.set(random(brushes), random(colors), random(0.7, 1.6));
  brush.flowLine(0, 0, random(140, 240), random(360));
}
