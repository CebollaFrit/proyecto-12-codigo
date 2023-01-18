var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage de path (camino)
  pathImg.loadImage("path.png");
  //loadAnimation de boy (niño)
  boyImg.loadAnimation("Runner-1.png, Runner-2.png");
 
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
 var path = createSprite(200,200,50,40);
 //agregar imagen de path
 path.addImage("path", pathImg);
 //Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
 path.velocityY = 4;
 path.scale = 1.2;

 //crear sprite de boy (niño)
 var boy = createSprite(200,200,40,50)
 //agregar animación para boy
 boy.addAnimation("boyrun", boyImg)
 boy.scale = 0.08;
  
 // crear  left Boundary (límite izquierdo)
 leftBoundary=createSprite(0,0,100,800);
 ////establecer visibilidad como false (falso) para límite izquierdo
 leftBoundary.visibility = false

 //crear right Boundary (límite derecho)
 rightBoundary=createSprite(410,0,100,800);
 //establecer visibilidad como false (falso) para límite izquierdo
 rightBoundary.visibility = false
}

function draw() {
  background(0);
  
  // boy moviéndose en el eje X con el mouse
  boy.X = Mouse.X
  
  edges= createEdgeSprites();
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
