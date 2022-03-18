var mario
var marioRight,marioLeft,marioJump,marioIdle
var fundo
var nuvem1
var nuvem2
var imagemNuvem1
var imagemNuvem2
var ground,groundImage
var lastKey = 0
var ground2

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
    mario=createSprite(-458,259,15,35)
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

    ground2 = createSprite(1794,355,displayWidth,150 )
    ground2.addImage("terra",groundImage)
    ground2.scale = 1.6
    ground2.debug = true

}
function draw(){
    background(fundo)

    if(keyDown("a")){
        mario.x -= 4
        mario.changeAnimation("andandoEsquerda",marioLeft)
        mario.scale = 0.10
    }
    else if(keyDown("d")){
        mario.x += 4
        mario.changeAnimation("andandoDireita",marioRight)
        mario.scale = 0.10
    }
    else if(keyDown("space") && mario.y > 170){
        mario.velocityY = -10;
        
    }
    else if(mario.y < 259.3 ){
        mario.changeAnimation("pulando",marioJump);
        mario.scale = 0.18;
    }
    else{
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
    console.log(mario.x)
    drawSprites()
    gerarNuvens()
    
}
function gerarNuvens() {
    //escreva o código aqui para gerar as nuvens 
    if (frameCount % 60 === 0) {
        var nuvem = createSprite(900,90,24,57);
        nuvem.velocityX = -4
        nuvem.scale = 0.2;
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
