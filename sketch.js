/* let myMap;
let canvas;
let mappa = new mappa('Leaflet'); */

/* const options = {
  lat: 0,
  lng: 0,
  zoom: 4,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
} */


function setup(){
  canvas = createCanvas(windowWidth-31,180);
}

function draw(){
  background(230,200)
  fill(255);
  rect(10,10,width-15,50,20);
  



  fill(255,255,0)
  noStroke();
  rect(10,70,width/2,100,20);
  
  fill(50);
  textStyle(BOLD);
  textSize(25);
  text("INFECTADOS : 8095751",200,130);
  rect((width/2)+20,70,width/2-25,100,20);
  fill(255);
  text("FALLECIDOS : 83507",width/2+200,130);
  textAlign(CENTER);
  fill(50)
  text("COVID-19 Mexico 2019",width/2,45)
}

/* function drawPoint(){
  clear();

  const nigeria = myMap.latLngToPixel(11.396396, 5.076543); 
  ellipse(nigeria.x, nigeria.y, 20, 20);
} */