let door;
const circSize = 30;
const snowSpeed = 2;
const snowSize = 10;
const nSnow = 50;
const snowFlakes = [];
let iLight = 0;
let lightColors = [0, 5, 10];
const d = new Date();
let day = d.getDate();

let colors = [
"AliceBlue ",
"AntiqueWhite ",
"Aqua ",
"Aquamarine ",
"Azure ",
"Beige ",
"Bisque ",
"Black ",
"BlanchedAlmond ",
"Blue ",
"BlueViolet ",
"Brown ",
"BurlyWood ",
"CadetBlue ",
"Chartreuse ",
"Chocolate ",
"Coral ",
"CornflowerBlue ",
"Cornsilk ",
"Crimson ",
"Cyan ",
"DarkBlue ",
"DarkCyan ",
"DarkGoldenRod ",
"DarkGray ",
"DarkGrey ",
"DarkGreen ",
"DarkKhaki ",
"DarkMagenta ",
"DarkOliveGreen ",
"DarkOrange ",
"DarkOrchid ",
"DarkRed ",
"DarkSalmon ",
"DarkSeaGreen ",
"DarkSlateBlue ",
"DarkSlateGray ",
"DarkSlateGrey ",
"DarkTurquoise ",
"DarkViolet ",
"DeepPink ",
"DeepSkyBlue ",
"DimGray ",
"DimGrey ",
"DodgerBlue ",
"FireBrick ",
"FloralWhite ",
"ForestGreen ",
"Fuchsia ",
"Gainsboro ",
"GhostWhite ",
"Gold ",
"GoldenRod ",
"Gray ",
"Grey ",
"Green ",
"GreenYellow ",
"HoneyDew ",
"HotPink ",
"IndianRed  ",
"Indigo  ",
"Ivory ",
"Khaki ",
"Lavender ",
"LavenderBlush ",
"LawnGreen ",
"LemonChiffon ",
"LightBlue ",
"LightCoral ",
"LightCyan ",
"LightGoldenRodYellow ",
"LightGray ",
"LightGrey ",
"LightGreen ",
"LightPink ",
"LightSalmon ",
"LightSeaGreen ",
"LightSkyBlue ",
"LightSlateGray ",
"LightSlateGrey ",
"LightSteelBlue ",
"LightYellow ",
"Lime ",
"LimeGreen ",
"Linen ",
"Magenta ",
"Maroon ",
"MediumAquaMarine ",
"MediumBlue ",
"MediumOrchid ",
"MediumPurple ",
"MediumSeaGreen ",
"MediumSlateBlue ",
"MediumSpringGreen ",
"MediumTurquoise ",
"MediumVioletRed ",
"MidnightBlue ",
"MintCream ",
"MistyRose ",
"Moccasin ",
"NavajoWhite ",
"Navy ",
"OldLace ",
"Olive ",
"OliveDrab ",
"Orange ",
"OrangeRed ",
"Orchid ",
"PaleGoldenRod ",
"PaleGreen ",
"PaleTurquoise ",
"PaleVioletRed ",
"PapayaWhip ",
"PeachPuff ",
"Peru ",
"Pink ",
"Plum ",
"PowderBlue ",
"Purple ",
"RebeccaPurple ",
"Red ",
"RosyBrown ",
"RoyalBlue ",
"SaddleBrown ",
"Salmon ",
"SandyBrown ",
"SeaGreen ",
"SeaShell ",
"Sienna ",
"Silver ",
"SkyBlue ",
"SlateBlue ",
"SlateGray ",
"SlateGrey ",
"Snow ",
"SpringGreen ",
"SteelBlue ",
"Tan ",
"Teal ",
"Thistle ",
"Tomato ",
"Turquoise ",
"Violet ",
"Wheat ",
"White ",
"WhiteSmoke ",
"Yellow ",
"YellowGreen "
];
let i=0;

function preload() {
  door = loadImage("door.jpg")
  imageOfTheDay = loadImage(`./images/image-${day}.jpg`)
}

function setup() {
  createCanvas(500, 500);
  noStroke();
  
  for (let i = 0; i < nSnow; i++) {
    snowFlakes.push([random(width), random(height)]);
  }  
}

function draw() {
  background("midnightblue");
  if (iLight === 0) {
    for (let j = 0; j < lightColors.length; j++){
      lightColors[j] = (lightColors[j] + 1) % colors.length;
    }
  }
  iLight = (iLight + 1) % 12;
  
  fill("WhiteSmoke");
  ellipse(50, 500, 200);
  ellipse(450, 500, 200);
  ellipse(150, 500, 150);
  ellipse(370, 500, 150);
  ellipse(270, 500, 125);  
  
  fill("red");
   
  branch(300, 450, 300, colors[lightColors[0]]);
  branch(300, 350, 250, colors[lightColors[1]]);
  branch(300, 250, 200, colors[lightColors[2]]);
  
 
  
  //trunk
  fill('Chocolate');
  rect(270, 450, 60, 100);
  
  // snow
  fill("ivory")
  for (let s of snowFlakes) {
    ellipse(s[0], s[1], snowSize);
    s[1] = (s[1] + snowSpeed) % height; 
  }
  door.resize(100, 200)
  image(door, 35, 40);

  fill("#25cc51");
  textSize(63);
  text(day, 48, 150);
  if (mouseX > 35 && mouseX < 135 && mouseY > 40 && mouseY < 240 && mouseIsPressed) {
    imageOfTheDay.resize(500, 500);
    image(imageOfTheDay, 0, 0);
  }

}

function branch(xm, yb, w, clr) {
  fill('ForestGreen');
  noStroke();
  const h = w/2;
  const x1 = xm - w/2;
  const y1 = yb;
  const x2 = xm + w/2;
  const y2 = yb;
  const x3 = xm;
  const y3 = yb - h;
  triangle(x1, y1, x2, y2, x3, y3);
  fill(clr);
  ellipse(x1, y1, circSize);
  ellipse(x2, y2, circSize);
  ellipse(x3, y3, circSize);
}

// fix frameraate
// do the clearing thing


