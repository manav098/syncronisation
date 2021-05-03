var ball,database,position;
function setup() {
  database=firebase.database()
  createCanvas(500,500);
  ball=createSprite(250, 250, 20, 20);
  ball.shapeColor='cyan'
  var ballposition=database.ref('ball/position')
  ballposition.on('value',readposition)
}

function draw() {
  background(255,255,255);  
if(position!==undefined){ 
  if(keyDown(LEFT_ARROW)){
    writePosition(-4,0)
  }
  else if(keyDown(RIGHT_ARROW)){
    writePosition(1,0)
  }
  else if(keyDown(UP_ARROW)){
    writePosition(0,-1)
  }
  else if(keyDown(DOWN_ARROW)){
    writePosition(0,1)
  }
  drawSprites();
}}
function writePosition(x,y){
  database.ref('ball/position').set({'x':position.x+x,'y':position.y+y})

 
}
function readposition(data){
  position=data.val()
  ball.x=position.x;
  ball.y=position.y;
}