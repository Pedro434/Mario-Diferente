var mario
var marioRight,marioLeft,marioJump,marioIdle,marioDuck
var fundo
var nuvem1
var nuvem2
var imagemNuvem1
var imagemNuvem2
var ground,groundImage
var lastKey = 0
var ground2
var goomba,goombaAnimation
var cano,canoImg

function preload(){
    fundo = loadImage("marioceu.png")
    groundImage = loadImage("marioterra.png")
    marioIdle = loadAnimation("marioparado.png")
    marioIdleLeft = loadAnimation("marioparadoesquerda.png")
    marioRight = loadAnimation("marioandano.png","marioparado.png")
    marioLeft = loadAnimation("marioandanoesquerda.png","marioparadoesquerda.png")
    marioJump = loadAnimation("mariopulando.png")
    marioDuck = loadAnimation("marioagachado.png")
    imagemNuvem1 = loadImage("marionuvens1.png")
    imagemNuvem2 = loadImage("marionuvens2.png")
    goombaAnimation = loadAnimation("goomba1.png","goomba2.png")
    canoImg = loadImage("canomario.png")
}
function setup(){
    createCanvas(800,400)
    mario=createSprite(-458,259,15,35)
    mario.addAnimation("parado",marioIdle)
    mario.addAnimation("paradoEsquerda",marioIdleLeft)
    mario.addAnimation("andandoDireita",marioRight)
    mario.addAnimation("andandoEsquerda",marioLeft)
    mario.addAnimation("pulando",marioJump)
    mario.addAnimation("agachado",marioDuck)

    mario.scale = 0.10
    ground=createSprite(0,355,displayWidth,150)
    ground.addImage("terra",groundImage)
    ground.scale = 1.6
    ground.debug = true

    ground2 = createSprite(1794,355,displayWidth,150 )
    ground2.addImage("terra",groundImage)
    ground2.scale = 1.6
    ground2.debug = true

    goomba=createSprite(-80,262,15,15)
    goomba.addAnimation("goombaAndando",goombaAnimation)
    goomba.scale = 0.06
    goomba.debug = true
    goomba.velocityX = -2

    cano=createSprite(30,248,15,35)
    cano.addImage("cano",canoImg)
    cano.scale = 0.1


}
function draw(){
    background(fundo)
    if(goomba.x<-500){
        goomba.velocityX = 2
    }
    if(keyDown("LEFT_ARROW")){
        mario.x -= 4
        mario.changeAnimation("andandoEsquerda",marioLeft)
        mario.scale = 0.10
    }
    else if(keyDown("RIGHT_ARROW")){
        mario.x += 4
        mario.changeAnimation("andandoDireita",marioRight)
        mario.scale = 0.10
    }
    else if(keyDown("space") && mario.y > 170){
        mario.velocityY = -10;
        
    }
    else if(keyDown("DOWN_ARROW")){
        mario.changeAnimation("agachado",marioDuck)
        mario.scale = 0.07
    }
    else if(mario.y < 259.3 ){
        mario.changeAnimation("pulando",marioJump);
        mario.scale = 0.18;
    }
    else if(mario.y>170||mario.collide(cano)){
        mario.changeAnimation("parado",marioIdle)
        mario.scale = 0.10
    }
    camera.position.x = mario.x
    if(mario.x < -458){
        camera.position.x = -458
    }
    mario.velocityY = mario.velocityY + 0.8
    mario.collide(ground);
    mario.collide(ground2);
    mario.collide(cano);
    goomba.bounceOff(cano);
    console.log(mario.x)
    drawSprites()
    gerarNuvens()
    
}
function gerarNuvens() {
    //escreva o código aqui para gerar as nuvens 
    if (frameCount % 60 === 0) {
        var nuvem = createSprite(900,90,24,57);
        nuvem.velocityX = random(-1,-6);
        nuvem.scale = random(0.1,0.8);
        nuvem.lifetime = 400
        
        var rand = Math.round(random(1,2));
        switch(rand) {
            case 1: nuvem.addImage(imagemNuvem1)
            break;
            case 2: nuvem.addImage(imagemNuvem2)
            break;
    default: break;}
    }
}
