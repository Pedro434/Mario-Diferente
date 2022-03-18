var mario
var marioRight,marioLeft,marioJump,marioIdle
var fundo
var nuvem1
var nuvem2
var imagemNuvem1
var imagemNuvem2
var ground,groundImage
var lastKey = 0

function preload(){
    fundo = loadImage("marioceu.png")
    groundImage = loadImage("marioterra.png")
    marioIdle = loadAnimation("marioparado.png")
    marioIdleLeft = loadAnimation("marioparadoesquerda.png")
    marioRight = loadAnimation("marioandano.png","marioparado.png")
    marioLeft = loadAnimation("marioandanoesquerda.png","marioparadoesquerda.png")
    marioJump = loadAnimation("mariopulando.png")
    imagemNuvem1 = loadImage("marionuvens1.png")
    imagemNuvem2 = loadImage("marionuvens2.png")
}
function setup(){
    createCanvas(800,400)
    mario=createSprite(30,259,15,35)
    mario.addAnimation("parado",marioIdle)
    mario.addAnimation("paradoEsquerda",marioIdleLeft)
    mario.addAnimation("andandoDireita",marioRight)
    mario.addAnimation("andandoEsquerda",marioLeft)
    mario.addAnimation("pulando",marioJump)

    mario.scale = 0.10
    ground=createSprite(0,355,displayWidth,150)
    ground.addImage("terra",groundImage)
    ground.scale = 1.6
    ground.debug = true

}
function draw(){
    background(fundo)

    if(keyDown("a")){
        mario.x -= 2
        mario.changeAnimation("andandoEsquerda",marioLeft)
        lastKey = 1
        mario.scale = 0.10
    }
    else if(keyDown("d")){
        mario.x += 2
        mario.changeAnimation("andandoDireita",marioRight)
        lastKey = 0
        mario.scale = 0.10
    }
    else if(keyDown("space")){
        mario.velocityY = -10
        mario.changeAnimation("pulando",marioJump)
        mario.scale = 0.18
    }
    else{
        mario.changeAnimation("parado",marioIdle)
        mario.scale = 0.10
    }
    camera.position.x = mario.x
    mario.velocityY = mario.velocityY + 0.8
    mario.collide(ground)
    drawSprites()
    gerarNuvens()
    
}
function gerarNuvens() {
    //escreva o código aqui para gerar as nuvens 
    if (frameCount % 60 === 0) {
        var nuvem = createSprite(900,90,24,57);
        nuvem.velocityX = -4
        nuvem.scale = 0.2;
        nuvem.lifetime = 300
        
        var rand = Math.round(random(1,2));
        switch(rand) {
            case 1: nuvem.addImage(imagemNuvem1)
            break;
            case 2: nuvem.addImage(imagemNuvem2)
            break;
    default: break;}
    }
}
