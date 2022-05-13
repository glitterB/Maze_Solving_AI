var patch_size;
box_list = [];

function setup(){
  box_colors = [color(0),color(255)];
  createCanvas(600,600);
  patch_size = width/10;
  for (let x = 0; x<width; x+=patch_size){
    for (let y = 0; y<height; y+=patch_size){
      box_list.push(new Box(x,y,patch_size,random(box_colors)));
      
    }
  }
  //different color for Last Box i.e. our Goal
  var last_box = box_list[box_list.length-1];
  last_box.c = color(0,255,0);
}

function draw(){
  //Drawing Grid//
  for (b of box_list){
    b.draw()
    //----------------//
    //creating AI
    const ROBO = new AI(0,0);
    ROBO.move();
    ///-------------/
  }
}
//Defining CLass for Gird
class Box{
  constructor(x,y,sz,c){
    this.x = x; //x position
    this.y = y; // y position
    this.sz = sz; //size
    this.c = c; //color

    this.draw = function(){
      fill(this.c);
      rect(this.x,this.y,this.sz,this.sz);
    }
  }
}

//defining class for AI
class AI{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.sz = patch_size;
    this.c = color(255,100,25);

    this.move = function(){
      fill(this.c);
      rect(this.x,this.y,this.sz,this.sz);
    }
  }
}