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
C.setSize(1500, 1500, 2, "mainCanvas");

function windowResized() {
  C.resize();
}

const palettes = [
  ["#ff9a8b", "#ff6a88", "#ff99ac", "#ffb6c1", "#ffcad4"], // sunset: 0
  ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"], // ocean: 1
  ["#ff00ff", "#ff8800", "#ffcc00", "#00ffcc", "#8800ff"], // neon: 2
  ["#a8dadc", "#f1faee", "#457b9d", "#1d3557", "#e63946"], // pastel: 3
  ["#2b2d42", "#8d99ae", "#edf2f4", "#ef233c", "#d90429"], // forest: 4
  ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"], // retro: 5
  ["#F8FAFC", "#D9EAFD", "#BCCCDC", "#9AA6B2", "#F14A00"], // chris: 6
  ["#9CFA08", "#9CFA08", "#9CFA08", "#9CFA08", "#9CFA08"], // greens: 7
];

const oranges = [
  "#ff7b00",
  "#ff8800",
  "#ff9500",
  "#ffa200",
  "#ffaa00",
  "#ffb700",
  "#ffc300",
  "#ffd000",
  "#ffdd00",
  "#ffea00",
];

const greens = [
  "#007f5f",
  "#2b9348",
  "#55a630",
  "#80b918",
  "#aacc00",
  "#bfd200",
  "#d4d700",
  "#dddf00",
  "#eeef20",
  "#ffff3f",
];

let line = 0;

function setup() {
  C.createCanvas();
  angleMode(DEGREES);
  brush.scale(1.3);
  // for (let i = 0; i < 150; i++) seeds.push(random());
  // background("#fffceb");
  background("#dad7cd");
  // background("#ff006e");
  frameRate(50);
}

function getColour(colours) {
  let c = random(colours);
  console.log('Color: ', c);
  return c;

}

function flowLine(x, y, len, deg) {
  // if(x<120 && x>-120 && y>-120 && y < 120) {
  //   return;
  // }

  brush.flowLine(x, y, len, deg);
  line++;
  console.log(line);
  if (line === 20000) {
    noLoop();
  }
}

function draw() {
  brush.field("seabed");

  let colours = greens

  let offset = 300

  this.area(-offset, -offset, colours);
  this.area(-offset, -0, colours);
  this.area(-offset, offset, colours);

  this.area(-0, -offset, colours);
  this.area(0, 0, colours);
  this.area(-0, offset, colours);

  this.area(offset, -offset, colours);
  this.area(offset, -0, colours);
  this.area(offset, offset, colours);

  // for (let x = -1 * 175; x < 3 * 175; 1 += 175) {
  //   for (let y = -1 * 175; y < 3 * 175; 1 += 175) {
  //     this.area(x, y);
  //   }
  // }

  // rows = [-100, 0, 100];
  // cols = [-100, 0, 100];
  // wobble = 40;
  // minLen = 90;
  // maxLen = 110;
  // brushes = [
  //   "marker",
  //   "spray",
  //   // "charcoal",
  //   // "HB",
  //   // "2B",
  //   // "cpencil",
  //   // "2H",
  //   "rotring",
  // ];

  // squares(rows, cols, wobble, minLen, maxLen, brushes);

  // rows = [-175, -125, -75, -25, 25, 75, 125, 175];
  // cols = [-175, -125, -75, -25, 25, 75, 125, 175];
  // wobble = 10;
  // minLen = 15;
  // maxLen = 45;

  // brushes = [
  //   "marker",
  //   // "spray",
  //   // "charcoal",
  //   // "HB",
  //   // "2B",
  //   "cpencil",
  //   // "2H",
  //   "rotring",
  // ];

  // squares(rows, cols, wobble, minLen, maxLen, brushes);
}

function area(x, y, colours) {
  let rows, cols, wobble, minLen, maxLen, brushes;

  cols = [x - 100, x - 50, x, x + 50, x + 100];
  rows = [y - 100, y - 50, y, y + 50, y + 100];
  wobble = 10;
  minLen = 15;
  maxLen = 20;
  brushes = [
    // "spray",
    // "charcoal",
    "marker",
    "HB",
    "2B",
    "cpencil",
    "2H",
    "rotring",
  ];

  squares(rows, cols, wobble, minLen, maxLen, brushes, colours);
}

function squares(rows, cols, wobble, minLen, maxLen, brushes, colours) {
  // big circles
  for (let y = 0; y < rows.length; y++) {
    for (let x = 0; x < cols.length; x++) {
      brush.set(random(brushes), getColour(colours), random(0.7, 1.6));

      flowLine(
        cols[x] + random(-wobble, wobble),
        rows[y] + random(-wobble, wobble),
        random(minLen, maxLen),
        random(360)
      );
    }
  }
}
