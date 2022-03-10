
function preload(){
  //imagens pré-carregadas
  imagemMenino= loadAnimation ("Runner-1.png" ,"Runner-2.png")
  street=loadImage("path.png")
  
}




function setup(){
  createCanvas(400,400)
 rua= createSprite(200,200,200,200)
 rua.addImage(street)
  Menino=createSprite(200,200,20,20)
  //crie sprite aqui
Menino.addAnimation("jaxon",imagemMenino)
Menino.scale=0.08

}

function draw() {
  background(0);
  Menino.x=World.mouseX
 rua.velocityY=7
 if(rua.y > 400){
   rua.y=height/2
 }
drawSprites()

}
